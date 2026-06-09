# Marketing Step Up - AI Marketing Framework Analyzer

Transform your business description into comprehensive marketing frameworks using AI. This web application analyzes your business and generates strategic insights using the SOSTAC framework combined with industry-standard marketing models.

## ✨ Features

- 🎯 **AI-Powered Analysis** - Uses Claude AI for intelligent marketing insights
- 📊 **SOSTAC Framework** - Complete marketing strategy breakdown:
  - **Situation**: 5C Framework + SWOT Analysis
  - **Objectives**: SMART(ER) Goals
  - **Strategy**: STP Framework  
  - **Tactics**: 4Ps Marketing Mix
  - **Actions**: 4Ms Resource Planning
  - **Control**: KPI Suggestions
- 🎨 **Smart Formatting** - Auto-generated headings, bold keywords, organized lists
- 🔒 **Secure** - Your API key stays on your machine (never sent to our servers)
- 🚀 **Easy Setup** - One command to start

## ⚙️ Prerequisites

- Node.js 18+ (for native fetch support)
- npm or yarn
- **Your own Anthropic API key** (free tier available at https://console.anthropic.com/)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/marketingstepup.git
cd marketingstepup
npm install
```

### 2. **⚠️ IMPORTANT: Set Up Your API Key** (Required!)

Each user must use their own API key. This ensures:
- ✅ You don't spend your tokens on others' usage
- ✅ Users control their own costs
- ✅ No API keys are ever exposed on GitHub

**Setup Instructions:**

```bash
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

⚠️ **DO NOT commit your `.env` file!** It's in `.gitignore` for your protection.

### 3. Start the Application
```bash
npm start
```

Open your browser to `http://localhost:3000`

## 📖 How to Use

1. Enter your business description
2. Click "Analyze"
3. Get instant insights across 7 marketing frameworks
4. Review formatted output with headings and bold keywords

## 📁 Project Structure

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

## 🚀 Syncing with GitHub (One Command!)

Once you've set up GitHub:

### First Time Upload
```bash
# Stage all changes
git add .

# Create first commit
git commit -m "Initial commit: Marketing framework analyzer"

# Push to GitHub (set up remote first)
git remote add origin https://github.com/yourusername/marketingstepup.git
git branch -M main
git push -u origin main
```

### After Making Changes (One Command!)
```bash
git push
```

That's it! Your changes upload instantly to GitHub.

### Daily Workflow
```bash
# Make your changes in the code...

# Then commit and push:
git add .
git commit -m "Description of changes"
git push
```

## 🔐 API Key Security

**Your `.env` file will NOT be uploaded to GitHub because:**
- ✅ It's listed in `.gitignore`
- ✅ Git automatically ignores it
- ✅ Your API key stays private

**For GitHub collaborators:**
1. They clone your repo
2. Copy `.env.example` to `.env`
3. Add their own API key
4. They never commit `.env`

## 💡 How It Works

1. **User enters business description** → Frontend (`app.js`)
2. **Request sent to backend** → Server (`src/server.js`)
3. **AI analyzes the description** → Claude API (`src/services/aiService.js`)
4. **Results formatted automatically** → Smart formatting with `###`, `**bold**`, lists
5. **Beautiful output displayed** → Styled HTML rendered in browser

## 🔧 Development

Start with auto-reload (requires nodemon):
```bash
npm run dev
```

Standard start:
```bash
npm start
```

## 📊 Output Formats

The AI automatically formats responses with:
- `### Section Heading` - Becomes styled blue heading
- `**bold text**` - Becomes strong emphasis
- `- bullet points` - Becomes organized list
- `1. numbered items` - Becomes ordered list

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| "API key missing" | Create `.env` file with `ANTHROPIC_API_KEY=your_key` |
| "fetch not available" | Upgrade to Node.js 18+ |
| "Response cut off" | Shorter business description |
| "Port 3000 in use" | Change port in `src/server.js` or kill process on port |

## 📦 Dependencies

- **Express** - Web server
- **Node.js 18+** - Runtime with native fetch
- **Anthropic Claude API** - AI analysis

## 📋 Marketing Frameworks Included

- **5C Analysis** - Company, Customers, Competitors, Collaborators, Context
- **SWOT** - Strengths, Weaknesses, Opportunities, Threats
- **SMART(ER) Goals** - Specific, Measurable, Achievable, Relevant, Time-bound, Exciting, Recorded
- **STP** - Segmentation, Targeting, Positioning
- **4Ps** - Product, Price, Place, Promotion
- **4Ms** - Men/Women, Money, Minutes, Materials
- **KPIs** - Key Performance Indicators

## 📄 License

MIT - Feel free to use and modify

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

Found a bug or have a question? [Create an issue](https://github.com/yourusername/marketingstepup/issues)

---

**Made with ❤️ using Claude AI** | **Open Source**

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
