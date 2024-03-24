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


