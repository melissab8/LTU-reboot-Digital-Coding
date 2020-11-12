//using a switch statement. This should be used when you are testing 1 variable, otherwise use if, else if, else


function drinkOrder(drink, size) {



var makeDrinkLowercase = drink.toLowerCase();
//this is to make the code NOT case sensitive, it will convert it all to lowercase, i.e if they entered Coke and not coke.


    switch(makeDrinkLowercase) {
        case "fanta" :
            console.log("you have ordered a " + size + " " + makeDrinkLowercase );
            break;

        case "coke" :
            console.log("you have ordered a " + size + " " + makeDrinkLowercase );
            break;

        case "lemonade" :
            console.log("you have ordered a " + size + " " + makeDrinkLowercase );
            break;

        default:
            alert("The drink that you have tried to order is not available");
            break;    
    }





}

//if you enter this function into the browser console e.g. - drinkOrder("coke, "medium");  and assign it a drink you should get the message output.