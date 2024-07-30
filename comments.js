// create web server
const express = require('express');
const app = express();
const port = 3000;

// use the express.static() middleware to serve static files
app.use(express.static('public'));

// use the express.json() middleware to parse JSON requests
app.use(express.json());

// use the express.urlencoded() middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// create a variable to store comments
let comments = [];

// create a GET route for the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// create a POST route for the comments
app.post('/comments', (req, res) => {
  const { name, comment } = req.body;
  const newComment = { name, comment };
  comments.push(newComment);
  res.json(newComment);
});

// start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});