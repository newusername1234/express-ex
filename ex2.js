const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/cats', (req, res) => {
    res.send('meow');
})

app.get('/dogs', (req, res) => {
    res.send('woof');
})

app.get('/cats_and_dogs', (req, res) => {
    res.send('living together');
})

app.get('/greet/:user', (req, res) => {
    res.send(`Hello, ${req.params.user}!`);
})

app.listen(PORT);