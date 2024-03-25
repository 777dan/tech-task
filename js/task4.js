const selectColor = document.querySelector("#select-color");
const header = document.querySelector("h1");
const body = document.querySelector("body");
selectColor.addEventListener('click', () => {
    console.log(selectColor.value);
    header.style.color =  `rgb(${selectColor.value})`;
    let oppositeColor = getOppositeColor(selectColor.value.split(", "));
    body.style.backgroundColor = `rgb(${oppositeColor.join(", ")})`;
});

const getOppositeColor = (rgbColor) => {
    let red = rgbColor[0];
    let green = rgbColor[1];
    let blue = rgbColor[2];
    
    let oppositeRed = 255 - red;
    let oppositeGreen = 255 - green;
    let oppositeBlue = 255 - blue;
    
    let oppositeColor = [oppositeRed, oppositeGreen, oppositeBlue];
    
    return oppositeColor;
}