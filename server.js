const express = require('express');
const fs = require('fs');
var app = express();
const PORT = 5000



app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    let peopleData = JSON.parse(fs.readFile('./data/main.json'))
    res.render('pages/main', {
        people: peopleData,
    })
    console.log('rendered index page');
})





app.listen(PORT, () =>{
    console.log(`listening on port 5000...`);
})


//http://localhost:5000/