
// 1. common function

// empty value
function emptyValue(id){
document.getElementById(id).value = '';
}

// empty text
function emptyText(id){
document.getElementById(id).innerText = '';
}

// display none
function displayNone(id){
document.getElementById(id).style.display = 'none';
}

// display block
function displayBlock(id){
document.getElementById(id).style.display = 'block';
}

// 2. genarate random number

function randomNumFun(){
var randomNumber = Math.floor(1000 + Math.random() * 9000);
document.getElementById('genarateNum').value = randomNumber;
}

// 3. input number value
function btnKey(id){
   const prevValue = document.getElementById('inputPin').value; 
   const key = document.getElementById(id).innerHTML;
   const keyNumber = prevValue + key;
   document.getElementById('inputPin').value = keyNumber;
}