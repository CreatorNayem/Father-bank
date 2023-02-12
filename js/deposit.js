document.getElementById("deposit-btn").addEventListener("click", handleDeposit);


function handleDeposit(){
  const depositField = document.getElementById("deposit-field");
  const depositAmount = depositField.value;
  const convertAmount = Number(depositAmount);
  const depositTotal = document.getElementById("deposit");
  const currentAmount = convertAmount + Number(depositTotal.innerHTML);
  depositTotal.innerText = currentAmount;
  const depositBalance = document.getElementById('balance');
  const currentBalance = Number(depositBalance.innerHTML);
  const resutlBalance = currentBalance + convertAmount;
  depositBalance.innerText = resutlBalance;
  depositField.value = "";
  depositField.focus();
}