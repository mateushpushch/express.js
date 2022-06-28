const express = require('express');
const app = express();

const hbs = require('express-handlebars');


app.use( express.static('public'));

app.engine('hbs', hbs.engine({defaultLayount: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');


const User = require('./app/models/User');

const user = require('./app/controllers/user.controller');

app.get('/', function(req, res) {
   res.render('home', {
    name: 'List User',
   });
});

app.get('/mongoose', function(req, res) {

    res.send('done');
 });


app.get('/user', function(req, res) {
    user.list(function(err, users){
        if(err) res.send(err);
        console.log(users)
        res.render('user', {users});
    });
 });


app.listen(8090, function(){
    console.log('Serwer Node.js działa');
});