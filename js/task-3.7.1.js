
//const is a variable that in constant and doesn't change
const listItems = document.querySelectorAll("button.selection");

const allImages = document.querySelectorAll(".main .image-selections .images");

//this is adding an class of 'active' to a button so we can style it later
function toggleActiveClass( active ) {
    
    listItems.forEach( function( item ) {
        item.classList.remove("active");
    })

    active.classList.add("active");

}

    listItems.forEach( function( item ) {
        item.addEventListener("click", function() {
            toggleActiveClass( item );
        })
    })