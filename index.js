const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const myPort = process.env.PORT;



app.get('/', (req, res)=>{
    res.sendFile(__dirname+ '/index.html');
})

app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/about.html')
})

app.get('/contact-me', (req, res)=>{
    res.sendFile(__dirname + '/contact-me.html')
})

app.use((req, res)=>{
    res.sendFile(__dirname+ '/404.html');
})

app.listen(myPort, ()=>{
    console.log(`Server is listening on port ${myPort}`);
})