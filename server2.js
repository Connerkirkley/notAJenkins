var express = require('express');
const fs = require('fs');
const path = require('path');
const hhtp = require('http')
var app = express()
const PORT = 3000

const peopleData = require('./data/main.json')

app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.render('pages/index', {
        people: peopleData,
    })
})




app.get('/about', (req, res) => {
    res.render('pages/about', {
        people: peopleData,
    })
})

app.listen(PORT, PORT =>{
    console.log(`listening on port ${PORT}...`);
})