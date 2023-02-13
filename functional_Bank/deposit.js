document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputValue('deposit-field');
    const preDepositTotal = getInnerTextValue('total-deposit');

    const currentDepositTotal = preDepositTotal + newDepositAmount;  
    setTotal('total-deposit', currentDepositTotal);

    const preBalance = getInnerTextValue('total-balance');

    const currentBalance = preBalance + newDepositAmount;
    setTotal('total-balance', currentBalance);

})