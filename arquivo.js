
const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

function convertValue() {
    const inputCurrencyValue = parseFloat(document.querySelector('.input-currency').value.replace('.', '').replace(',', '.'));
    const currencyToConvert = document.querySelector('.value-to-convert');
    const currencyConverted = document.querySelector('.value');
    const todayDolar = 4.968;
    const todayEuro = 5.323;
    const todayLibra = 6.17;
    const todayBitcoin = 124245.86;

    
    currencyToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue);

    if (currencySelect.value === 'dolar') {
        currencyConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / todayDolar);
    }

    if (currencySelect.value === 'euro') {
        currencyConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / todayEuro);
    }

    if (currencySelect.value === 'libra') {
        currencyConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / todayLibra);
    }

    if (currencySelect.value === 'bitcoin') {
        currencyConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / todayBitcoin);
    }
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name');
    const currencyImg = document.querySelector('.currency-image');

    if (currencySelect.value === 'dolar') {
        currencyName.innerHTML = 'Dólar americano';
        currencyImg.src = './assets/dolar.png';
    }

    if (currencySelect.value === 'euro') {
        currencyName.innerHTML = 'Euro';
        currencyImg.src = './assets/euro.png';
    }

    if (currencySelect.value === 'libra') {
        currencyName.innerHTML = 'Libra';
        currencyImg.src = './assets/libra.png';
    }

    if (currencySelect.value === 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin';
        currencyImg.src = './assets/bitcoin.png';
    }

    convertValue();
}

currencySelect.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertValue);


document.querySelector('.input-currency').addEventListener('input', convertValue);
