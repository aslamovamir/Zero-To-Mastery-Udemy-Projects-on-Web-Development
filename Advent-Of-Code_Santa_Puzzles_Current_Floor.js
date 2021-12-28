// Advent of Code[About][Events][Shop][Settings][Log Out]aslamovamir
//    $year=2015;[Calendar][AoC++][Sponsors][Leaderboard][Stats]
// --- Day 1: Not Quite Lisp ---

// Santa was hoping for a white Christmas, but his weather machine's "snow" function is powered by stars, and he's fresh out! To save Christmas, he needs you to collect fifty stars by December 25th.

// Collect stars by helping Santa solve puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// Here's an easy puzzle to warm you up.

// Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

// An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

// The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

// For example:

// (()) and ()() both result in floor 0.
// ((( and (()(()( both result in floor 3.
// ))((((( also results in floor 3.
// ()) and ))( both result in floor -1 (the first basement level).
// ))) and )())()) both result in floor -3.
// To what floor do the instructions take Santa?

// ANSWER:

//Let'sread the file content first
//import the file-system library
const fs = require('fs');

//we get hold of the file object and read the content
//we will do it the synchronous way
const file = fs.readFileSync('./input.txt', err => {
	if (err) {
		console.log("Error in reading the file!");
	}
});

//let's print the contents of the read file to confirm the object
console.log(file.toString());

//now we create a variable indicator to track the current location of Santa on the building
//we know that Santa starts off at the ground floor, so we initialize the 
//variable with 0
let current_floor = 0;
//let's save the input in string form in a variable
const input = file.toString();

//we know that each '(' means a floor up and ')' means a floor down
//accordingly, as we parse the input each character a time, if we meet
//a '(', we incrtement out indicator variable, and if we meet a ')', we 
//decrement it

for (let i = 0; i < input.length; i++) {
	if (input[i] === '(') {
		current_floor++;
	} else {
		current_floor--;
	}
}

console.log("Current flour: ", current_floor, "!!!");
