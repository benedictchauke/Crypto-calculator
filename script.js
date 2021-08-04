const cEl_one = document.getElementById('currency-one');
const aEl_one = document.getElementById('amount-one');
const cEl_two = document.getElementById('currency-two');
const aEl_two = document.getElementById('amount-two');

const rEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rates and update the DOM
function compute() {
    const c_one = cEl_one.value;
    const c_two = cEl_two.value;

    fetch('https://api.exchangerate-api.com/v4/latest/${c_one}')
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[c_two];

        rEl.innerText = '1 ${c_one} = ${rate} ${c_two}';

        aEl_two.value = (aEl_one.value * rate).toFixed(2);
    });

}

//Event listeners
cEl_one.addEventListener('change', compute);
aEl_one.addEventListener('input', compute);
cEl_two.addEventListener('change', compute);
aEl_two.addEventListener('input', compute);

swap.addEventListener('click', ()=> {
    const temp = cEl_one.value;
    cEl_one.value = cEl_two.value;
    cEl_two = temp;
    compute();
} );
compute();