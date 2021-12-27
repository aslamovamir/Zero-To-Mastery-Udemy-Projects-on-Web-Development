//Install npm express package
const express = require('express');
//Install npm body-parser to read the posts requests 
const bodyParser = require('body-parser')

const app = express();

//listen to a host
app.listen(3000)


//middleware using body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//post
app.post('/profile', (req, res) => {
	console.log(req.body);
	res.send("Successfully posted!");
})
