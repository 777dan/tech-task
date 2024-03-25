let canvas = document.getElementById('temp');
let ctx = canvas.getContext('2d');

function drawThermometer(temperature) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#cccccc';
    ctx.fillRect(120, 50, 60, 300);

    var liquidHeight = ((temperature + 50) / 100) * 250;
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(145, 350 - liquidHeight, 10, liquidHeight);

    ctx.fillStyle = '#000000';
    ctx.font = '16px Arial';
    ctx.textAlign = 'right';
    for (let i = -50; i <= 50; i += 10) {
        let yPos = 350 - (i + 50) * 2.5;
        ctx.fillText(i, 210, yPos);
        ctx.fillRect(170, yPos - 2, 10, 2);
    }
}

let temperature = 25;
drawThermometer(temperature);

const changeTemp = document.querySelector("#change-temp");
changeTemp.addEventListener('click', () => {
    let randTemp = Math.floor(Math.random() * 101) - 50;
    animateTemp(temperature, randTemp);
});

function animateTemp(startTemp, endTemp) {
    let currentTemp = startTemp;
    let animationSpeed = 1;
    function update() {
        if (currentTemp !== endTemp) {
            currentTemp += (endTemp - startTemp) / Math.abs(endTemp - startTemp) * animationSpeed;
            drawThermometer(currentTemp);
            requestAnimationFrame(update);
        }
    }
    update();
    temperature = endTemp;
}
