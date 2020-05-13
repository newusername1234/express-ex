let { header, legal, about, footer, data } = require('./routes');
const express = require('express');
const app = express();
const PORT = 8000;

app.get('/cats', (req, res) => {
    res.json(data.filter(animal => animal.type == 'cat'));
})

app.get('/dogs', (req, res) => {
    res.json(data.filter(animal => animal.type == 'dog'))
})

app.get('/:id(\\d+)', (req, res) => {
    res.json(data.filter(animal => animal.id == req.params.id))
})

app.get('/', (req, res) => {
    let filteredData = [...data];
    if (req.query.color) {
        let color = req.query.color;
        filteredData = filteredData.filter(animal => animal.color == color);
    } if (req.query.age) {
        let age = req.query.age;
        filteredData = filteredData.filter(animal => animal.age == age);
    } if (filteredData != data) {
        res.json(filteredData);
    } else {
        res.json(data);
    }
})

app.get('/legal/:page', (req, res) => {
    // console.log(req.params);
    res.send(header + legal + footer)
})

app.get('/about/:page', (req, res) => {
    // console.log(req.params);
    res.send(header + about + footer)
})

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
})