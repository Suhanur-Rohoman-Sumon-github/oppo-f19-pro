function getElementById(elmentId){
    const currentTotalElement = document.getElementById(elmentId); 
    const newTotalElmentstirng = currentTotalElement.innerText;
    const newTotalElement = parseInt(newTotalElmentstirng);
    return newTotalElement ;
}
function setElementValueById(elmentId, value){
    const currentwSubTotal =  document.getElementById(elmentId);
    currentwSubTotal.innerText = value;
}
function subTotal(){
    const currentPhoneTotal = getElementById('phone-price');
    const currentCaseTotal = getElementById('case-price') ;
    const OldcurrentSubtotal = currentPhoneTotal + currentCaseTotal;
    setElementValueById('sub-total-price', OldcurrentSubtotal )
    const currentTax = OldcurrentSubtotal * 0.2 ;
    setElementValueById('tex', currentTax )
    const newCurrentTotal = OldcurrentSubtotal + currentTax;
    setElementValueById('total-price', newCurrentTotal )
    
}

