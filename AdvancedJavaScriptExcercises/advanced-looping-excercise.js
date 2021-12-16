const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0


//forEach method
function biggestNumberInArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let biggest = arr[0];
  let i = 1;
  while (isNaN(biggest)) {
    biggest = arr[i];
    i++;
  }
  arr.forEach(item => {
    if (!isNaN(item)) {
      if (item > biggest) {
        biggest = item;
      }
    }
  })
  return biggest;
}

//for Standard method
function biggestNumberInArray2(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let biggest = arr[0];
  let i = 1;
  while(isNaN(biggest)) {
    biggest = arr[i];
    i++;
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > biggest) {
      biggest = arr[j];
    }
  }
  return biggest;
}

//for in Method
function biggestNumberInArray3(arr) {
  if (arr.length == 0) {
    return 0;
  }
  let biggest = arr[0];
  let i = 1;
  while(isNaN(biggest)) {
    biggest = arr[i];
    i++;
  }
  for (item in arr) {
    if (arr[item] > biggest) {
      biggest = arr[item];
    }
  }
  return biggest;
}

//for of Method
function biggestNumberInArray4(arr) {
  if (arr.length == 0) {
    return 0;
  }
  let biggest = arr[0];
  let i = 1;
  while(isNaN(biggest)) {
    biggest = arr[i];
    i++;
  }
  for (item of array) {
    if (item > biggest) {
      biggest = item;
    }
  }
  return biggest;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return true;
    }
  }
  return false;
}
