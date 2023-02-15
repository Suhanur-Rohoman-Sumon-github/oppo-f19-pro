function updatePhoneNumbar(isIncrise) {
    const phoneField = document.getElementById('phone-inputfield')
    const phoneFieldString = phoneField.value;
    const phoneFieldValue = parseInt(phoneFieldString)

    let newPhoneNumbar;

    if (isIncrise) {
        newPhoneNumbar = phoneFieldValue + 1;
    }
    else {
        newPhoneNumbar = phoneFieldValue - 1;
    }
    phoneField.value = newPhoneNumbar;
    return newPhoneNumbar;
}
function phonePrice(newPhoneNumbar) {
    const phoneTotalPrice = newPhoneNumbar * 29990;
    const phonePrice = document.getElementById('phone-price')
    phonePrice.innerText = phoneTotalPrice;
}
document.getElementById('phone-pluse').addEventListener('click', function () {
    const newPhoneNumbar = updatePhoneNumbar(true);
    phonePrice(newPhoneNumbar);
    subTotal()

});
document.getElementById('phone-minus').addEventListener('click', function () {
    const newPhoneNumbar = updatePhoneNumbar(false);
    phonePrice(newPhoneNumbar);
    subTotal()

});


