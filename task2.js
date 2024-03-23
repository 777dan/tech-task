const text = document.querySelector("#text");
let fadeIn = true;

function animateText() {
    if (fadeIn) {
        text.style.transform = "rotate(0deg)";
        text.style.opacity = 1;
        fadeIn = false;
    } else {
        text.style.transform = "rotate(180deg)";
        text.style.opacity = 0;
        fadeIn = true;
    }
}

setInterval(animateText, 1000);
