# Marketing Step Up - AI Marketing Framework Analyzer

Transform your business description into marketing frameworks using AI. This web application analyzes your business and generates strategic insights using the SOSTAC framework combined with other marketing models.

## Features

- 🎯 **Claude-Powered Analysis**
- 📊 **SOSTAC Framework** - Complete marketing strategy breakdown:
  - **Situation**: 5C Framework + SWOT Analysis
  - **Objectives**: SMART(ER) Goals
  - **Strategy**: STP Framework  
  - **Tactics**: 4Ps Marketing Mix
  - **Actions**: 4Ms Resource Planning
  - **Control**: KPI Suggestions
-  **Smart Formatting** - Auto-generated headings, bold keywords, organized lists
-  **Secure** - Your API key stays on your machine (never sent to our servers)
-  **Easy Setup** - One command to start

## ⚙️ Prerequisites

- Node.js 18+ (for native fetch support)
- npm or yarn
- **Your own Anthropic API key**

## Quick Start

### 1. Clone the Repository
```
git clone https://github.com/yourusername/marketingstepup.git
cd marketingstepup
npm install
```

### 2. Set Up Your API Key
```
# 1. Copy the example file
cp .env.example .env

# 2. Get your API key:
#    - Go to https://console.anthropic.com/
#    - Sign up or log in
#    - Create an API key
#
# 3. Edit .env and add your key:
#    ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
```

### 3. Start the Web-app
```
npm start
```

Open `http://localhost:3000`

## How to Use

1. Enter your business description
2. Click "Analyze"
3. Get instant insights across 7 marketing frameworks
4. Review output

## Project Structure

```
marketingstepup/
├── public/
│   ├── index.html          # Main UI
│   ├── app.js              # Frontend & formatting logic
│   └── styles.css          # Styling
├── src/
│   ├── server.js           # Express server
│   ├── services/
│   │   └── aiService.js    # Claude API integration
│   └── utils/
│       └── frameworks.js   # Framework definitions
├── .env.example            # API key template (COPY THIS!)
├── .gitignore              # Protects your .env file
└── README.md               # This file
```

## Marketing Frameworks Included

- **5C Analysis** - Company, Customers, Competitors, Collaborators, Context
- **SWOT** - Strengths, Weaknesses, Opportunities, Threats
- **SMART(ER) Goals** - Specific, Measurable, Achievable, Relevant, Time-bound, Exciting, Recorded
- **STP** - Segmentation, Targeting, Positioning
- **4Ps** - Product, Price, Place, Promotion
- **4Ms** - Men/Women, Money, Minutes, Materials
- **KPIs** - Key Performance Indicators

## License

MIT

### STP Framework
Market positioning strategy:
- **Segmentation**: Divide market into groups
- **Targeting**: Select target segments
- **Positioning**: Create market position

### 4Ps Marketing Mix
Tactical execution elements:
- **Product**: What you offer
- **Price**: Cost strategy
- **Place**: Distribution channels
- **Promotion**: Communication strategy

### 4Ms Framework
Resource allocation:
- **Men/Women**: Team requirements
- **Money**: Budget allocation
- **Minutes**: Time scheduling
- **Materials**: Physical resources

### KPIs
Suggested metrics to track success across:
- Brand awareness
- Customer engagement
- Conversion rates
- Retention metrics
- Revenue performance
- Operational efficiency

## Security Notes

- API keys are stored in browser's local storage only
- Keys are not sent to any server except OpenAI
- For production, consider implementing backend API key management
- Never commit `.env` files with real API keys

## Troubleshooting

### "API key is required" error
- Make sure you entered an API key in the Configuration section
- Ensure your Anthropic API key is valid and has sufficient credits

### "Failed to analyze business description"
- Check your internet connection
- Verify your Anthropic API key is correct
- Check Anthropic API status: https://status.anthropic.com/

### Port already in use
- Change the PORT in `.env` or use: `PORT=3001 npm start`

## Performance Tips

- Provide detailed business descriptions for better analysis
- Be specific about your target market
- Include unique value propositions
- Mention competitive advantages

## Future Enhancements

- Multiple AI provider support (Claude, etc.)
- Export results as PDF/Word
- Save analysis history
- Customize framework combinations
- Team collaboration features
- Analysis templates for specific industries

## License

MIT License - feel free to use and modify

## Support

For issues or questions, refer to the framework definitions in `src/utils/frameworks.js` or the AI service configuration in `src/services/aiService.js`.
