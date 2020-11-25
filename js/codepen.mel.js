//TASK - CAPITALISE A NAME THAT WAS ENTERED IN A PROMPT IN LOWERCASE


var name = prompt("What is your name?");
//this declares a variable and assigns the value to what the user enters in the prompt.

var firstChar = name.slice(0,1);
//this now slice the first character

var remainderName = name.slice(1,name.length);
//this slices the remainder of the name - we have used name length as we won't alwasy know the length of the name being enetered.

var upperCaseFirstChar = firstChar.toUpperCase();
// this variable now take the firstChar variable and capitalises it

remainderName = remainderName.toLowerCase();
//this ensure that the rest of the name is all in lowercase

var capitalisedName = upperCaseFirstChar + remainderName;
//we have concatenated the variables

alert("Hello " + capitalisedName);

//this alert now outputs the capitalisedName






//TASK LIFE CALCULATOR TO 90 YEARS OLD
// i want to enter age in a prompt but it is not working!!!!!    var age = prompt("Please enter your age in years");

function lifeInWeeks(age) {
    var remainingYearsTo90 = 90 - age;

    var days = remainingYearsTo90 * 365;
    var months = remainingYearsTo90 * 12;
    var weeks = remainingYearsTo90 * 52;

    console.log("You have " + days + " days & " + weeks + " weeks and " + months + " months left to live");
    

}




//While loop

var bottlesOfBeer = 50;
while (bottlesOfBeer > 0) {
    console.log( bottlesOfBeer + " bottles of beer on the wall");
    bottlesOfBeer = bottlesOfBeer - 1;
}





//for loop - must have a 'counter', 'condition' and 'a change' the below for loop is outputting numbers 1-10.

for ( var index = 1; index <= 10; index++){
console.log( index );

}