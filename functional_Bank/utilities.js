function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const inputAmount = parseFloat(inputString);
    inputField.value ='';
    return inputAmount;
}

function getInnerTextValue(textId){
    const textElement = document.getElementById(textId);
    const textString = textElement.innerText;
    const totalDeposit = parseFloat(textString);
    return totalDeposit;
}

function setTotal(textId, value){
    const totalElement = document.getElementById(textId);
    totalElement.innerText = value;
}