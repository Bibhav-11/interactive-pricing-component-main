const toggle = document.querySelector(".toggle");
const pageviews = document.querySelector(".views");
const price = document.querySelector(".price_value");
const rangeSlider = document.querySelector(".input");

//UI update
function updateViews(views) {
    const str = `${views} pageviews`;
    pageviews.textContent = str;
}

function updatePrice(priceValue) {
    price.textContent = priceValue.toFixed(2);
}

function updateUI(views, price) {
    updateViews(views);
    updatePrice(price);
}

//GLOBAL VARIABLES
let duration = "month";
let curPrice = 16.00;
let curViews = "100K";


//MAIN PROGRAM
function calcPriceViews() {
    const value = Number(rangeSlider.value);
    switch(value) {
        case 0: curPrice = evaluatePrice(8);
                curViews = "10K"
                break;
        case 5: curPrice = evaluatePrice(12);
                curViews = "50K"
                break;
        case 10: curPrice = evaluatePrice(16);
                curViews = "100K"
                break;
        case 15: curPrice = evaluatePrice(24);
                curViews = "500K"
                break;
        case 20: curPrice = evaluatePrice(36);
                curViews = "1M"
                break;
    }
}

function evaluatePrice(price) {
    return duration === "month" ? price : price*0.75; 
}



//EVENT LISTENERS 
toggle.addEventListener("change", function() {
    if(toggle.checked) {
        duration = "year";
        calcPriceViews();
        updateUI(curViews, curPrice);
    } else {
        duration = "month";
        calcPriceViews();
        updateUI(curViews, curPrice);
    }
})

rangeSlider.addEventListener("input", function() {
    calcPriceViews();
    updateUI(curViews, curPrice);
})
