const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON
app.use(express.json());

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Endpoint to handle form submissions
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;
    // You can handle the form data here, e.g., send an email or save to a database
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.status(200).send('Message received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
