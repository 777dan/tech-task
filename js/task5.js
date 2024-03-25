const productsArr = {
    0: {
        name: "Carrots",
        price: 2
    },
    5: {
        name: "Tomatoes",
        price: 5
    },
    2: {
        name: "Potatoes",
        price: 3
    }
}

const products = document.querySelectorAll('.products');
const result = document.querySelector('#result');
const totalAmountSpan = document.querySelector('#total-amount');

const getCartData = () => {
    return JSON.parse(localStorage.getItem("cart"));
}

const setList = () => {
    let cartArr = getCartData();
    let totalAmount = 0;
    result.innerHTML = '';
    if (cartArr !== null) {
        for (const product in cartArr) {
            totalAmount += cartArr[product][2] * cartArr[product][3];
            result.innerHTML += `<li>Name: ${cartArr[product][1]} ${cartArr[product][2] * cartArr[product][3]}$</li>`
        }
    }
    totalAmountSpan.textContent = `${totalAmount}$`;
}

setList();

for (let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', () => {
        let itemId = products[i].getAttribute('data-id');
        let cartArr = getCartData() || {};
        if (cartArr.hasOwnProperty(itemId)) {
            cartArr[itemId][3] += 1;
        } else {
            cartArr[itemId] = [
                products[i].getAttribute('data-id'),
                productsArr[products[i].getAttribute('data-id')].name,
                productsArr[products[i].getAttribute('data-id')].price,
                1
            ];
        }
        localStorage.setItem("cart", JSON.stringify(cartArr));
        setList();
    });
}

