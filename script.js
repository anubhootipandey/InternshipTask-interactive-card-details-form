const cardForm = document.getElementById('card-form');
const thankyouSection = document.querySelector('.thankyou-section');
const continueBtn = document.getElementById('continue-btn');

cardForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const cardholderName = document.getElementById('cardholder-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvc = document.getElementById('cvc').value;

    let valid = true;

    document.getElementById('number-error').textContent = '';
    document.getElementById('expiry-error').textContent = '';
    document.getElementById('cvc-error').textContent = '';

    if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ''))) {
        document.getElementById('number-error').textContent = 'Card number must be 16 digits.';
        valid = false;
    }

    if (valid) {
        document.querySelector('.card-holder').textContent = cardholderName.toUpperCase();
        document.querySelector('.card-number').textContent = formatCardNumber(cardNumber);
        document.querySelector('.card-expiry').textContent = expiryDate;
        document.querySelector('.card-cvv').textContent = cvc;

        cardForm.classList.add('d-none');
        thankyouSection.classList.remove('d-none');
    }
});

function formatCardNumber(cardNumber) {
    return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
}

continueBtn.addEventListener('click', function() {
    thankyouSection.classList.add('d-none');
    cardForm.classList.remove('d-none');
});