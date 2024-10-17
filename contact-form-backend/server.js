const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use other services like Outlook, Yahoo, etc.
    auth: {
        user: 'your_email@gmail.com', // Your email address
        pass: 'your_email_password' // Your email password or an app-specific password
    }
});

// Contact form endpoint
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, // Sender's email address
        to: 'SpencerNakamura@quockerwodger.ca', // Your email address
        subject: `New message from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Message sent successfully!');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
