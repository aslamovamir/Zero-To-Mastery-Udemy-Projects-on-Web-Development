//get the package 'http'
const http = require('http');

const server = http.createServer((request, response) => {
	//Logging the request
	console.log('headers', request.headers);
	console.log('method', request.method);
	console.log('url', request.url);

	//Sending a response of HTML type
	response.setHeader('Content-Type', 'text/html');
	response.end('<h1>Hello World!</h1>');

	//Sending a response of JSON type
	const user = {
		name: 'John',
		hobby: 'Skating'
	}
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(user));
})

server.listen(3000)
