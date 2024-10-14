const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('D:\ee')));

app.get('/', function (req, res) {
    res.sendFile(path.join('D:/work/homepage.html'))
});
app.get('/index', function (req, res) {
    res.sendFile(path.join('D:/work/homepage.html'))
});
app.get('/index', function (req, res) {
    res.sendFile(path.join('D:/work/about me.html'))
});
app.get('/index', function (req, res) {
    res.sendFile(path.join('D:/work/Experience.html'))
});
app.get('/index', function (req, res) {
    res.sendFile(path.join('D:/work/Project.html'))
});

app.listen(3000, function () {
    console.log('Server listening on port http://localhost:3000/')
});