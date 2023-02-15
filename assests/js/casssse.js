function caseIncrese(isIncrise) {
    const casefield = document.getElementById('case-field');
    const casefieldString = casefield.value;
    const newcasefieldValue = parseInt(casefieldString)
    let newcasefield;
    if (isIncrise === true) {
        newcasefield = newcasefieldValue + 1;
    }
    else {
        newcasefield = newcasefieldValue - 1;
    }
    casefield.value = newcasefield;
    return newcasefield;
}

function casePriceUpdate(newcasefield) {
    const casePriceOld = newcasefield * 500;
    const caseprice = document.getElementById('case-price');
    const casePriceString = caseprice.innerText;
    const newCasePrice = casePriceString;
    caseprice.innerText = casePriceOld;
}
document.getElementById('case-pluse').addEventListener('click', function () {
    const newcasefield = caseIncrese(true)
    casePriceUpdate(newcasefield)
    subTotal()

})
document.getElementById('case-minus').addEventListener('click', function () {
    const newcasefield = caseIncrese(false)
    casePriceUpdate(newcasefield)
    subTotal()

})
