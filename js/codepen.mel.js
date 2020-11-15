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

