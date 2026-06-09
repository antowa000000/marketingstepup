async function analyzeBusinessDescription(businessDescription, apiKey) {
    try {
        const analysisPrompt = buildAnalysisPrompt(businessDescription);
        const response = await callAnthropicAPI(analysisPrompt, apiKey);
        const analysis = parseAnalysisResponse(response);
        return analysis;
    } catch (error) {
        throw new Error(`AI Analysis failed: ${error.message}`);
    }
}

function buildAnalysisPrompt(businessDescription) {
    return `Analyze the following business description and provide a comprehensive marketing framework analysis in SOSTAC format.

Business Description:
${businessDescription}

Provide the analysis in the following JSON format ONLY (no other text). For formatting:
- Use ### Title for section headings (e.g., ### Context Consumer, ### Company Analysis)
- Use **bold text** for important keywords and key concepts
- Use newlines to separate ideas
- Keep text minimal and concise, focusing on critical points only
- No lines or decorative elements
{
    "fiveC": "Analyze the 5Cs (Company, Customers, Competitors, Collaborators, Context) based on the description. Format with clear bullet points or numbering.",
    "swot": "Provide SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) based on the description. Format with clear sections.",
    "smart": "Create SMART(ER) objectives (Specific, Measurable, Achievable, Relevant, Time-bound, Exciting, Recorded) for this business. Provide 3-4 key objectives.",
    "stp": "Outline the STP strategy (Segmentation, Targeting, Positioning). Identify market segments and positioning strategy.",
    "fourPs": "Break down the 4Ps (Product, Price, Place, Promotion) relevant to this business.",
    "fourMs": "Outline the 4Ms (Men/Women, Money, Minutes, Materials) - resources and actions needed to execute the strategy.",
    "kpi": "Suggest relevant KPIs (Key Performance Indicators) to measure success. Provide 5-7 KPIs with brief explanations."
}

Return ONLY valid JSON, no markdown, no code blocks.`;
}

async function callAnthropicAPI(prompt, apiKey) {
    // Require Node.js 18+ for native fetch, or install node-fetch for older versions
    if (typeof fetch === 'undefined') {
        throw new Error(
            'fetch is not available. Please use Node.js 18+ or run: npm install node-fetch'
        );
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'claude-sonnet-4-6',   // ✅ valid model string
            max_tokens: 8192,
            system: 'You are a marketing strategy expert. Respond with valid JSON only.',  // ✅ correct placement
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ]
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMsg =
            errorData?.error?.message ||
            JSON.stringify(errorData) ||
            `HTTP ${response.status}`;
        throw new Error(`Anthropic API Error: ${errorMsg}`);
    }

    const data = await response.json();

    if (!data.content || !data.content[0] || !data.content[0].text) {
        throw new Error('Unexpected API response structure');
    }

    return data.content[0].text;
    if (data.stop_reason === 'max_tokens') {
    throw new Error('Response was cut off — the output exceeded the token limit. Try a shorter business description.');
}
}

function parseAnalysisResponse(response) {
    try {
        const cleaned = response.replace(/```json\n?|\n?```/g, '').trim();
        const parsed = JSON.parse(cleaned);

        return {
            fiveC:  formatFrameworkContent(parsed.fiveC),
            swot:   formatFrameworkContent(parsed.swot),
            smart:  formatFrameworkContent(parsed.smart),
            stp:    formatFrameworkContent(parsed.stp),
            fourPs: formatFrameworkContent(parsed.fourPs),
            fourMs: formatFrameworkContent(parsed.fourMs),
            kpi:    formatFrameworkContent(parsed.kpi)
        };
    } catch (error) {
        throw new Error(`Failed to parse AI response: ${error.message}`);
    }
}

function formatFrameworkContent(content) {
    if (!content) return '';
    return content
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n');
}

module.exports = { analyzeBusinessDescription };
