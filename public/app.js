class MarketingAnalyzer {
    constructor() {
        this.businessDesc = null;
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('analyzeBtn').addEventListener('click', () => this.analyze());
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());
        document.getElementById('errorCloseBtn').addEventListener('click', () => this.hideError());
    }

    async analyze() {
        this.businessDesc = document.getElementById('businessDesc').value.trim();

        if (!this.businessDesc) {
            this.showError('Please describe your business');
            return;
        }

        this.showLoading();

        try {
            const analysis = await this.callAnalysisAPI();
            this.displayResults(analysis);
        } catch (error) {
            this.showError(error.message || 'An error occurred during analysis');
        }
    }

    async callAnalysisAPI() {
        const response = await fetch('/api/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                businessDescription: this.businessDesc
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Analysis failed');
        }

        return await response.json();
    }

    displayResults(analysis) {
        document.getElementById('fiveC').innerHTML = this.formatContent(analysis.fiveC);
        document.getElementById('swot').innerHTML = this.formatContent(analysis.swot);
        document.getElementById('smart').innerHTML = this.formatContent(analysis.smart);
        document.getElementById('stp').innerHTML = this.formatContent(analysis.stp);
        document.getElementById('fourPs').innerHTML = this.formatContent(analysis.fourPs);
        document.getElementById('fourMs').innerHTML = this.formatContent(analysis.fourMs);
        document.getElementById('kpi').innerHTML = this.formatContent(analysis.kpi);

        this.hideLoading();
        this.showResults();
    }

    formatContent(content) {
        if (!content) return '<p>No data available</p>';
        
        let html = '';
        const lines = content.split('\n').map(l => l.trim()).filter(l => l);
        let i = 0;
        
        while (i < lines.length) {
            const line = lines[i];
            
            // Check for headings (### Title)
            if (line.startsWith('###')) {
                const title = line.replace(/^###\s+/, '').trim();
                html += `<h3 class="section-heading">${this.formatLine(title)}</h3>`;
                i++;
            }
            // Check for bullet list
            else if (/^[-•*]\s/.test(line)) {
                html += '<ul class="content-list">';
                while (i < lines.length && /^[-•*]\s/.test(lines[i])) {
                    const item = lines[i].replace(/^[-•*]\s/, '').trim();
                    html += `<li>${this.formatLine(item)}</li>`;
                    i++;
                }
                html += '</ul>';
            }
            // Check for numbered list
            else if (/^\d+[.):?]?\s/.test(line)) {
                html += '<ol class="content-list">';
                while (i < lines.length && /^\d+[.):?]?\s/.test(lines[i])) {
                    const item = lines[i].replace(/^\d+[.):?]?\s/, '').trim();
                    html += `<li>${this.formatLine(item)}</li>`;
                    i++;
                }
                html += '</ol>';
            }
            // Regular paragraph
            else {
                html += `<p>${this.formatLine(line)}</p>`;
                i++;
            }
        }
        
        return html;
    }
    
    formatLine(line) {
        // Bold text markers ** and __
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        line = line.replace(/__(.+?)__/g, '<strong>$1</strong>');
        // Italic text markers * and _
        line = line.replace(/(?<!\*)\*(?!\*)(.*?)\*(?!\*)/g, '<em>$1</em>');
        return line;
    }

    showLoading() {
        document.getElementById('resultsContainer').classList.add('hidden');
        document.getElementById('errorContainer').classList.add('hidden');
        document.getElementById('loadingSpinner').classList.remove('hidden');
    }

    hideLoading() {
        document.getElementById('loadingSpinner').classList.add('hidden');
    }

    showResults() {
        document.getElementById('resultsContainer').classList.remove('hidden');
    }

    showError(message) {
        document.getElementById('errorMessage').textContent = message;
        document.getElementById('errorContainer').classList.remove('hidden');
        document.getElementById('loadingSpinner').classList.add('hidden');
        document.getElementById('resultsContainer').classList.add('hidden');
    }

    hideError() {
        document.getElementById('errorContainer').classList.add('hidden');
    }

    reset() {
        document.getElementById('businessDesc').value = '';
        document.getElementById('resultsContainer').classList.add('hidden');
        document.getElementById('errorContainer').classList.add('hidden');
        document.getElementById('businessDesc').focus();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MarketingAnalyzer();
});
