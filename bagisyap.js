function selectAmount(amount) {
    document.querySelectorAll('.amount-buttons button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('customAmount').value = amount;
}

function updateAmount() {
    document.querySelectorAll('.amount-buttons button').forEach(btn => btn.classList.remove('active'));
}

function formatCardNumber() {
    let input = document.getElementById('cardNumber');
    input.value = input.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry() {
    let input = document.getElementById('expiry');
    input.value = input.value.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2').trim();
}
