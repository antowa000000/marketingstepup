const frameworks = {
    SOSTAC: {
        title: 'SOSTAC Planning Framework',
        components: {
            S: {
                name: 'Situation',
                description: 'Analyze the current position',
                includes: ['5C Framework', 'SWOT Analysis']
            },
            O: {
                name: 'Objectives',
                description: 'Define clear goals',
                includes: ['SMART(ER) Objectives']
            },
            S2: {
                name: 'Strategy',
                description: 'Plan the approach',
                includes: ['STP Framework']
            },
            T: {
                name: 'Tactics',
                description: 'Implement the strategy',
                includes: ['4Ps Framework']
            },
            A: {
                name: 'Actions',
                description: 'Execute the plan',
                includes: ['4Ms Framework']
            },
            C: {
                name: 'Control',
                description: 'Measure and monitor',
                includes: ['KPI Suggestions']
            }
        }
    },

    FiveC: {
        title: '5C Framework',
        description: 'Comprehensive market analysis',
        elements: ['Company', 'Customers', 'Competitors', 'Collaborators', 'Context']
    },

    SWOT: {
        title: 'SWOT Analysis',
        description: 'Internal and external factors',
        elements: ['Strengths', 'Weaknesses', 'Opportunities', 'Threats']
    },

    SMARTER: {
        title: 'SMART(ER) Objectives',
        description: 'Goal setting framework',
        elements: [
            'Specific - Clear and well-defined',
            'Measurable - Quantifiable',
            'Achievable - Realistic',
            'Relevant - Aligned with business',
            'Time-bound - Has deadlines',
            'Exciting - Motivating',
            'Recorded - Documented'
        ]
    },

    STP: {
        title: 'STP Framework',
        description: 'Strategic positioning',
        elements: ['Segmentation', 'Targeting', 'Positioning']
    },

    FourPs: {
        title: '4Ps Marketing Mix',
        description: 'Product marketing framework',
        elements: [
            'Product - What you offer',
            'Price - What you charge',
            'Place - Where customers find you',
            'Promotion - How you communicate'
        ]
    },

    FourMs: {
        title: '4Ms Framework',
        description: 'Resource and action planning',
        elements: [
            'Men/Women - Team and people',
            'Money - Budget and investment',
            'Minutes - Time and scheduling',
            'Materials - Resources and tools'
        ]
    },

    KPI: {
        title: 'Key Performance Indicators',
        description: 'Measurement framework',
        categories: {
            awareness: 'Brand awareness metrics',
            engagement: 'Customer engagement metrics',
            conversion: 'Sales and conversion metrics',
            retention: 'Customer retention metrics',
            revenue: 'Revenue metrics',
            efficiency: 'Operational efficiency metrics'
        }
    }
};

module.exports = frameworks;
