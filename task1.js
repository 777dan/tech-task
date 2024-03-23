const images = document.querySelectorAll(".images");

images.forEach(image => {
    image.addEventListener('click', (event) => {
        let targetImage = event.target;
        alert(targetImage.getAttribute('data-name'));
        let interval = setInterval(() => {
            targetImage.style.top = `${(parseInt(targetImage.style.top)) + 1}px`;
        }, 10);
        setTimeout(() => {
            clearInterval(interval);
        }, 2000);
    });
});

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

