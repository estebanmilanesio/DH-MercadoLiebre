const express = require('express');
const path = require ('path');
const app = express();

const port_number = server.listen(process.env.PORT || 3000);

app.listen(port_number);

// const port = process.env.PORT || 3000;

app.use(express.static('public'));

/*app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});*/

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});