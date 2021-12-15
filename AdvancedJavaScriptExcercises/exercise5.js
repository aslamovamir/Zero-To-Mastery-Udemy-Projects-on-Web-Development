// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
//ANSWER
const arrayForEach = [];
const ForEach = array.forEach((object) => {
  arrayForEach.push(object.username + "!");
});
console.log(arrayForEach);

//Create an array using map that has all the usernames with a "? to each of the usernames
//ANSWER
const mapArray1 = array.map((object) => {
  return object.username + "?";
});
const mapArray2 = array.map(object => object.username + '?');

//Filter the array to only include users who are on team: red
//ANSWER
const filterArray1 = array.filter((object) => {
  return object.team === 'red';
});
const filterArray2 = array.filter(object => object.team === 'red');

//Find out the total score of all users using reduce
//ANSWER
const totalScore1 = array.reduce((acc, object) => {
  return acc + object.score;
}, 0)



// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
//ANSWER
//(1)
//0, 1, 2, 3, 4, 5
//(2)
const newArray2 = arrayNum.map(num => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newUserInfo = array.map((object) => {
  object.items = object.items.map((item) => {
    return item + '!';
  });
  return object;
});
