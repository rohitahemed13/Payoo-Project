document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMain = parseFloat(mainBalance);

    console.log(convertedPin,convertedAmount);
    if(amount && pin){
       if(convertedPin===2413){
       const sum = convertedMain + convertedAmount;
       document.getElementById('main-balance').innerText = sum;
       }else{
        alert('Enter valid PIN')
       }
    }else{
        alert("Enter amount")
    }
})