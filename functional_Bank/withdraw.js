document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputValue('withdraw-field');
    const preWithdrawTotal = getInnerTextValue('total-withdraw');

    const currentWithdrawTotal = newWithdrawAmount + preWithdrawTotal;
    setTotal('total-withdraw', currentWithdrawTotal);

    const preBalance = getInnerTextValue('total-balance');
    const currentBalance = preBalance - newWithdrawAmount;
    setTotal('total-balance', currentBalance);
})