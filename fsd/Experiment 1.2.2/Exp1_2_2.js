let filterDropdown = document.getElementById('kitty');
let products = document.querySelectorAll(".card");

filterDropdown.addEventListener("change", function(){
    let selectedcategory = this.value;

    products.forEach(card =>{
        let cardCategory = card.getAttribute("data-category");
        if(selectedcategory == "all" || cardCategory === selectedcategory)
        {
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    })
})