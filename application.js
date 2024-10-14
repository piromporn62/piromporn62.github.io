const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'work')));

// Define routes for the application
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'work', 'homepage.html'));
});

app.get('/about me.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'work', 'about me.html'));
});

app.get('/Experience.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'work', 'Experience.html'));
});

app.get('/Projects.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'work', 'Projects.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
