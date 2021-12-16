// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
//ANSWER
console.log(dragons.includes("John"));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const array_john = dragons.filter(name => name.includes('John'));
console.log(array_john);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const pow100 = (num) => num**10;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
console.log(pow100(10000));
// Research for yourself why you get this result

