const express = require('express');
const app = express();
const PORT = 3000;

function logger(req, res, next) {
    console.log(Object.keys(req.query).length > 0 ? req.query : 'No queries');
    next();
}

app.get('/', (req, res) => {
    res.send('hello world');
})
app.use(express.static('public'));
app.use(logger);

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

app.get('/hello1', (req, res) => {
    const name = req.query.name || 'world';
    const age = req.query.age;
    const birthyear = 2020 - Number(age);
    res.send(birthyear ? `Hello, ${name}!<br>You were born in ${birthyear}` : `Hello, ${name}!<br>Tell me how old you are!`);
})

app.listen(PORT);