document.getElementById('cashout-btn').addEventListener('click', function(event){
   event.preventDefault();
   const pin = document.getElementById('cashout-pin').value;
   const convertedPin = parseInt(pin);
   const amount = document.getElementById('cashout-amount').value;
   convertedAmount = parseFloat(amount);
   const mainBalance = document.getElementById('main-balance').innerText;
   const convertedMainbalance = parseFloat(mainBalance);
   if(convertedPin===2413){
    const sum = convertedMainbalance-convertedAmount;
    document.getElementById('main-balance').innerText= sum;
    
   }else{
    alert('Enter valid PIN');
   }
})
   
   
   
   
   
   
//    const acountNumber = document.getElementById('Acount-number').value;
//    const amount = document.getInputValueByID('cashout-amount');
//  const pinNumber = getInputValueByID('cashout-pin');
//  const mainBalance = getInputValueByID('main-balance')
//    if(acountNumber.length===11){
//    if(pinNumber===2413){
//      const sum = mainBalance - amount;
//      setInnerTextByIDandValue('main-balance',sum);
//    }else{
//     alert('Pin not valid');
//    }
//    }else{
//     alert('Acount number not valid');
//    }
    