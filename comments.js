// create web server with express
const express = require('express');
const app = express();
const port = 3000;

// create comments array
const comments = [
    {
        name: 'Alex',
        message: 'Hello World'
    },
    {
        name: 'John',
        message: 'Hi there'
    }
];

// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});