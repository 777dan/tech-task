const blocks = document.querySelector("#blocks");
const field = document.querySelector("#field");
let numbers = [5, 1, 2, 4, 3];

const genBlocks = () => {
    for (let i = numbers.length - 1; i > 0; i--) {
        let randNum = Math.floor(Math.random() * (i + 1));
        let temp = numbers[i];
        numbers[i] = numbers[randNum];
        numbers[randNum] = temp;
    }
    for (let i = 1; i <= 5; i++) {
        let block = `<div class='blocks' id='block${numbers[i - 1]}' style='left:0;' draggable="true" ondragstart="drag(event)" data-id='${numbers[i - 1]}'>${numbers[i - 1]}</div>`;
        blocks.innerHTML += (block);
    }
}
genBlocks();

function allowDrop(event) {
    if (event.target.id === "field") {
        event.preventDefault();
    }
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}


const submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', () => {
    let isOrderTrue = true;
    for (let i = 0; i < field.children.length; i++) {
        if (field.children[i].getAttribute('data-id') != i + 1) {
            isOrderTrue = false;
            break;
        }
    }
    if (isOrderTrue) {
        alert("OK");
        let interval = setInterval(() => {
            for (let i = 0; i < field.children.length; i++) {
                console.log(field.children[i].style.left)
                field.children[i].style.left = `${(parseInt(field.children[i].style.left)) + 1}px`;
            }
        }, 10);
        setTimeout(() => {
            clearInterval(interval);
        }, 2000);
    } else {
        alert("Error");
    }
});

