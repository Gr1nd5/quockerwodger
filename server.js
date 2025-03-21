const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/blog/:post', (req, res) => {
  const post = req.params.post;
  res.sendFile(path.join(__dirname, 'views', 'blog', `${post}.html`));
});

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received message from ${name} (${email}): ${message}`);
  res.status(200).send('Message received');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Serve the main.js file
app.get('/js/main.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'main.js'));
});
