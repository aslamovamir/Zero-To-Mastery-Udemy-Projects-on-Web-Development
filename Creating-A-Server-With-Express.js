const express = require('express');

const app = express();

//listen to a host
app.listen(3000)

//To get a request
//1st parameter: path | 2nd paramter: response, request
app.get('/', (req, res) => {
	//automatic text.html converted
	res.send('Hello world!');

	//senidng html tags
	res.send('<h1>Hello world!</h1>');

	//sending a JSON object
	const user = {
		name: 'Sebastian',
		password: 'lFs2007#'
	}
	res.send(user);
})
