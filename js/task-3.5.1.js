



let shoppingCart = [
    {
    name:"loaf of bread",
    type:"food",
    quantity:1,
    price:.85
    },
    {
    name:"multipack beans",
    type:"food",
    quantity:1,
    price:1
    },
    {
    name:"mushrooms",
    type:"food",
    quantity:10,
    price:.1
    },
    {
    name:"can of beer",
    type:"alcohol",
    quantity:4,
    price:1.1
    },
    {
    name:"prosecco",
    type:"alcohol",
    quantity:1,
    price:8.99
    },
    {
    name:"steak",
    type:"food",
    quantity:2,
    price:3.99
    },
    {
    name:"blue cheese",
    type:"food",
    quantity:1,
    price:2.99
    },
    {
    name:"candles",
    type:"home",
    quantity:3,
    price:1.99
    },
    {
    name:"cheesecake",
    type:"food",
    quantity:1,
    price:4.99
    },
    {
    name:"onions",
    type:"food",
    quantity:3,
    price:.4
    }];

    function shoppingCartTotalPrice( arr ) { // 1. create a function that takes 1 argument (the array)

        var totalPrice = 0; // 2.create a variable inside the function called 'total price'

        // 3. Loop through each item in the array (shopping list) and add the value of the item to the total price, rembering to account for the quantity.
         for( var index = 0; index < arr.length; index++) {

            totalPrice = totalPrice + ( arr[index].price * arr[index].quantity );

        }

        // 4. return the totalPrice variable (value)
        return totalPrice.toFixed(2);

    }



    //we can use this by doing a console log

    console.log( shoppingCartTotalPrice( shoppingCart) );