function calculator( number1, number2, operator) {
 

    var result = " ";
    //this var will output my result


switch( operator ) {
     case "+" :
        result = number1 + number2;
        console.log( number1 + " + " + number2 + " = " + result );
        break;

    case "-" :
        result = number1 - number2;
        console.log( number1 + " - " + number2 + " = " + result );
        break;

    case "/" :
        result = number1 / number2;
        console.log( number1 + " / " + number2 + " = " + result );
        break;

    case "%" :
        result = number1 % number2;
        console.log( number1 + " / " + number2 + " = remainder " + result );
        break;

    case "*" :
        result = number1 * number2;
        console.log( number1 + " * " + number2 + " = " + result );
        break;

     default :  
        console.log( "There is an error" ); 

 }





}

// + ,-, % , *, / these are the operators i need to use. In browser console i need to write function(5,5,"+"); to see the output. 