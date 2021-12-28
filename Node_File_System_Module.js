//importing the file system into the script.js
const fs = require('fs');

//fs allows to access our file system
//"readFile" method reads the file specified
//the first parameter is the peth and the name of the actual file
//the second parameter consists of two parameters: error, data
//the data to be returned has to be encoded first, otherwise the raw
//buffer is returned

//There are 2 ways to read the files
// #1 Way
//readFile method is asynchronous, it has call back function
//because it is async, it tells the program to carry on with executions of 
//the rest of the code, until the reading process is completed
fs.readFile('./hello.txt', (err, data) => {
	if (err) {
		console.log('Error!');
	}
	//to encode the data, use toString() method
	//the default encoding type is 'utf8'
	//console.log(data.toString());
})


// #2nd Way
//readFileSync is synchronous and tells the program to wait until the 
//reading is complete
const file = fs.readFileSync('./hello.txt');
console.log(file.toString());

//the disadvantage of the synchronous method is that if the server is coded
//to read a massive file, there will be a lag in the program


//appendFile method adds a new data to the file specified in the first parameter
//if the file does not exist, it will create a new one and add the data
//the second paramter is the data to be written onto the file, and the third parameter
//is any error object encountered in writing onto the file
fs.appendFile('./hello.txt', ' This is so cool!', err => {
	if (err) {
		console.log(err);
	}
});

//Write method to create a new file and write onto it
fs.writeFile('bye.txt', 'Sad to see you go', err => {
	if (err) {
		console.log(err);
	}
})


//Delete method to delete a file
fs.unlink('./bye.txt', err => {
	if (err) {
		console.log(err);
	}
	console.log('Inception');
});
