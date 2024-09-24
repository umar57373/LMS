const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware to parse JSON and url-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Custom middleware to set correct Content-Type for different file extensions
app.use((req, res, next) => {
    const ext = path.extname(req.url);
    switch (ext) {
        case '.css':
            res.type('text/css');
            break;
        case '.js':
            res.type('text/javascript');
            break;
        default:
            res.type('text/html');
    }
    next();
});

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'main.html'));
});

// Route for login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

// Route for registration page
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
});

// Route for success login page
app.get('/success_login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'success_login.html'));
});

// POST route for login (placeholder)
app.post('/login', (req, res) => {
    // Here you would typically validate the user's credentials
    console.log('Login attempt:', req.body);
    // For now, we'll just redirect to the success_login page
    res.redirect('/success_login');
});

// POST route for registration (placeholder)
app.post('/register', (req, res) => {
    // Here you would typically save the user's information
    console.log('Registration attempt:', req.body);
    res.redirect('/success_login');
});

// Catch-all route for any other HTML pages
app.get('*.html', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', req.url);
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.status(404).send('404 - Page Not Found');
        } else {
            res.sendFile(filePath);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});