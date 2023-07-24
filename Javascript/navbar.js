let themeBtn;
let background1;
let background2;
let background3;

document.addEventListener("DOMContentLoaded", function() {
    themeBtn = document.querySelector("#theme");
    background1 = document.querySelector('.background1');
    background2 = document.querySelector('.background2');
    background3 = document.querySelector('.contact')

    themeBtn.addEventListener("click", function() {
        themeBtn.classList.toggle("ON");

        if (themeBtn.classList.contains("ON")) {
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            background1.style.backgroundImage = "url(../Images/night.jpg)";
            background2.style.backgroundImage = "url(../Images/mountain_night.jpg)";
            background3.style.backgroundImage = "url(../Images/city-night.webp)";
        } else {
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            background1.style.backgroundImage = "url(../Images/day.jpg)";
            background2.style.backgroundImage = "url(../Images/mountain_day.jpg)";
            background3.style.backgroundImage = "url(../Images/city-day.webp)";
        }
    });
});