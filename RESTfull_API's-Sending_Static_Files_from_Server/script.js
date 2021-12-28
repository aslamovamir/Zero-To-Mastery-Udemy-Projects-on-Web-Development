//Install npm express package
const express = require('express');
//Install npm body-parser to read the posts requests 
const bodyParser = require('body-parser')

const app = express();

//Demonstration of how to send static files, such as html files
app.use(express.static(__dirname + '/public'));

//listen to a host
app.listen(3000)
