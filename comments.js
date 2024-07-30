//Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//GET /comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

//POST /comments
app.post('/comments', function(req, res) {
    var comment = req.body;
    comments.push(comment);
    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
        if (err) {
            console.log(err);
        } else {
            res.json(comments);
        }
    });
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});