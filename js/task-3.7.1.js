
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



function toggleImages( dataClass ) {
    if( dataClass === "all") {
        allImages.forEach( function( image ) {
            image.style.display ="block";
        })
    } else {
        allImages.forEach( image => { 
            image.dataset.class === dataClass ? 
            image.style.display = "block" : 
            image.style.display = "none";
     })

    }


} //end of toggleImages function



    listItems.forEach( function( item ) {
        item.addEventListener("click", function() {
            toggleActiveClass( item );
            toggleImages( item.dataset.class );
        })
    })