const express = require('express');

const app = express();

//listen to a host
app.listen(3000)

//Express Middleware
app.use((req, res, next) => {
	console.log("hi");
	//the browser will hand until next() function is run
	next();
})

app.get('/', (req, res) => {
	res.send('test!');
});
