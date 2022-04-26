const slider = document.querySelector(".input");
const progress = document.querySelector(".progress");


const max = slider.getAttribute('max');
slider.addEventListener("input", e => {
    const value = slider.value;
    progress.style.width = `${value/max*100}%`;
})