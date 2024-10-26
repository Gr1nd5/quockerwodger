const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 5000;

// Enable compression middleware
app.use(compression());

// Set cache-control headers for static assets
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1y', // Cache static assets for 1 year
    etag: false // Disable ETag to rely on cache-control
}));

// Serve the HTML file with appropriate caching headers
app.get('/', (req, res) => {
    res.set({
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    });
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Endpoint for form submissions
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.status(200).send('Message received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
