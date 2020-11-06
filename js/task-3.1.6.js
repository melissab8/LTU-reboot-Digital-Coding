var costOfMeal = 40.50;
var mealTip = costOfMeal / 100 * 15;
var subTotalMeal = costOfMeal + mealTip;
var mealTotal = subTotalMeal.toFixed (2); 

/* using toFixed method rounds up to the decimal place you set, in the above case this is 2 decimal places */


console.log(subTotalMeal);
console.log(mealTotal);

alert("Your meal total is £" + mealTotal + ". This included a 15% tip of £" + mealTip + ".");



