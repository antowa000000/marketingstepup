require('dotenv').config();

const express = require('express');
const path = require('path');
const aiService = require('./services/aiService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.post('/api/analyze', async (req, res) => {
    try {
        const { businessDescription } = req.body;
        const apiKey = process.env.ANTHROPIC_API_KEY;

        if (!businessDescription) {
            return res.status(400).json({
                error: 'Business description is required'
            });
        }

        if (!apiKey) {
            return res.status(500).json({
                error: 'API key is not configured on the server'
            });
        }

        const analysis = await aiService.analyzeBusinessDescription(
            businessDescription,
            apiKey
        );

        res.json(analysis);
    } catch (error) {
        console.error('Analysis error:', error);
        res.status(500).json({
            error: error.message || 'Failed to analyze business description'
        });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Marketing Framework Analyzer running on http://localhost:${PORT}`);
});
