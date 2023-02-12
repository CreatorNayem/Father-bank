document.getElementById("withraw-btn").addEventListener('click', handleWithraw);


function handleWithraw(){
    const withrawField = document.querySelector('#withraw-field');
    const withrawAmount = Number(withrawField.value);
    const totalWithraw = document.querySelector('#withraw');
    withrawField.value = "";
    withrawField.focus();
    const withrawBalance = document.querySelector('#balance');
    const currentWithrawBalance = Number(withrawBalance.innerText);
    if(withrawAmount > currentWithrawBalance){
        alert('Baper Bank A ato Taka Nai');
        return;
        
    }
    const currntWithrawAmount = withrawAmount + Number(totalWithraw.innerText);
    totalWithraw.innerText = currntWithrawAmount;
    
    const resultWithrawBalance = currentWithrawBalance - withrawAmount;
    withrawBalance.innerHTML = resultWithrawBalance;

    
}
