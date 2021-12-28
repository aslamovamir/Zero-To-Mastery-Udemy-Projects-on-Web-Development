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


app.get('/', (req, res) =? {
	//different properties of request object

	//query is what we get when we do a  GET query
	//one way it is sent is when in the browser data is followed by a '?'
	console.log(req.query)

	// body is what is written in the body of a request
	console.log(req.body);

	// req.header
	console.log(req.body)

	// req.params
	//params are parameters sent in url spcified by a ":" in the url
	console.log(req.params);

	//we can send a response object along with a status 
	req.status(404).send("not found:(");
});
