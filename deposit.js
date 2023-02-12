document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button clicked');
    const depositElement = document.getElementById('deposit-field');
    const depositAmountString = depositElement.value;
    const newDepositAmount = parseFloat(depositAmountString);
    // console.log(newDepositAmount);
    // clear input Field
    depositElement.value ='';
    if(isNaN(newDepositAmount)){
        alert('Please Provide a Number');
        return;
    }

    const totalDepositElement = document.getElementById('total-deposit');
    const totalDepositString = totalDepositElement.innerText;
    const preDepositAmount = parseFloat(totalDepositString);    

    const currentDepositAmount = preDepositAmount + newDepositAmount;
    totalDepositElement.innerText = currentDepositAmount;

    const balanceElement = document.getElementById('total-balance');
    const balanceString = balanceElement.innerText;
    const preBalance = parseFloat(balanceString);

    const currentBalance = preBalance + newDepositAmount;
    balanceElement.innerText = currentBalance;
})