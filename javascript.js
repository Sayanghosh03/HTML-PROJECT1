let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let food3s = document.getElementById('food3');

let foods = document.getElementById('right');

foods.addEventListener('click', () => {
    foods.style.backgroundImage = "url('img/biriyani2.jpg')";
})

food1s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('img/burger1.jpg')";
})

food2s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('img/noodles.jpg')";
})

food3s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('img/pizza2.jpeg')";
})