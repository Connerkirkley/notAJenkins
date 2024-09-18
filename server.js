const express = require('express');
const fs = require('fs');
var app = express();
const PORT = 5000




app.use(express.static('public'));
app.set('view engine', 'ejs');



let checkSessionLogin = (req) =>{
    let peopleData = JSON.parse(fs.readFileSync('./data/main.json'))
    peopleData.forEach(person => {
        if(req.body.userName === person.userName && req.body.userPassword === person.userPassword){
            if (person.admin === true){
                return [person.id, true, true]
            }
            return [person.id, true, false]
        }
    })
    return false
}

app.get('/', (req, res) => {
    let session = checkSessionLogin(req)

    if (session[1] === true){
        
        res.render('pages/main', {
            userid: session[0],
            isLogin: session[1],
            isAdmin: session[2],
            events: JSON.parse(fs.readFileSync('./data/events.json'))
        })
    }
    res.render('pages/login', {
    })
})





app.get('/main', (req, res) => {
    let peopleData = JSON.parse(fs.readFileSync('./data/main.json'))
    res.render('pages/main', {
        people: peopleData,
    })
    console.log('rendered index page');
})





app.listen(PORT, () =>{
    console.log(`listening on port 5000...`);
})


//http://localhost:5000/