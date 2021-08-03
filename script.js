const cEl_one = document.getElementById('currency-one');
const aEl_one = document.getElementById('amount-one');
const cEl_two = document.getElementById('currency-two');
const aEl_two = document.getElementById('amount-two');

const rEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rates and update the DOM
function compute() {
    console.log('test');
}

//Event listeners
cEl_one.addEventListener('change', compute);
aEl_one.addEventListener('input', compute);
cEl_two.addEventListener('change', compute);
aEl_two.addEventListener('input', compute);

compute();