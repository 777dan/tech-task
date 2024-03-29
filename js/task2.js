const text = document.querySelector("#text").children;
console.log(text[0].innerHTML)
let fadeIn = true;

function animateText() {
    if (fadeIn) {
        for (let i = 0; i < text.length; i++) {
            text[i].style.transform = "rotate(0deg)";
            text[i].style.opacity = 1;
            fadeIn = false;
        }
    } else {
        for (let i = 0; i < text.length; i++) {
            text[i].style.transform = "rotate(180deg)";
            text[i].style.opacity = 0;
            fadeIn = true;
        }
    }
}

setInterval(animateText, 1000);
