//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

//ANSWER:
var experiencePoints = winBattle()? 10: 1;



//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
//ANSWER:
//undefined

//#3 return value when moveCommand("back");
//ANSWER:
//you arrived home

//#4 return value when moveCommand("right");
//ANSWER:
//you found a river


//#5 return value when moveCommand("left");
//ANSWER:
//undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function myOwn(input) {
    var internal;
    switch(input) {
        case "JavaScript":
            internal = "Web-Development";
            break;
        case "Python":
            internal = "Machine Learning";
            break;
        case "C++":
            internal = "Systems Development, Gaming";
            break;
        case "Java":
            internal = "Mobile Apps Development";
            break;
        case "C":
            internal = "Programming";
            break;
        default:
            internal = "Not in Computer Science!";
            break;
    }
    return internal;
};
