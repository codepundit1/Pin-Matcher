// 1. common function

// empty value
function emptyValue(id) {
  document.getElementById(id).value = "";
}


// empty text
function emptyText(id) {
  document.getElementById(id).innerText = "";
}


// display none
function displayNone(id) {
  document.getElementById(id).style.display = "none";
}


// display block
function displayBlock(id) {
  document.getElementById(id).style.display = "block";
}




// 2. genarate random number

function randomNumFun() {
  var randomNumber = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("genarateNum").value = randomNumber;

  emptyValue("inputPin");
  displayNone("matched");
  displayNone("unmatched");
}




// 3. input number value
function btnKey(id) {
  const prevValue = document.getElementById("inputPin").value;
  const key = document.getElementById(id).innerHTML;
  const keyNumber = prevValue + key;
  document.getElementById("inputPin").value = keyNumber;
}




// 4. clean and clear input value
function clean() {
  document.getElementById("inputPin").value = "";
}




// 5. clear last value/ backspace button

function cleanLast() {
  const inputResult = document.getElementById("inputPin").value;
  const removeValue = inputResult.slice(0, inputResult.length - 1);
  document.getElementById("inputPin").value = removeValue;
}





// 6. submit button (pin match or not consition)
function submitBtn() {
  const randomNumber = document.getElementById("genarateNum").value;
  const typeNumber = document.getElementById("inputPin").value;

  // 7. matching condition
  if (randomNumber == typeNumber) {
    displayBlock("matched");
    displayNone("unmatched");
    displayNone("tryContent");
  }
  // 8. unmatching condition
  else {
    displayBlock("unmatched");
    displayNone("matched");
    tryLeft("tryLeft");
    displayBlock("tryContent");
  }
}




// 9. pin matcher error
function tryLeft(id) {
  const tryAgain = document.getElementById(id).innerHTML;
  document.getElementById(id).innerHTML -= 1;
  if (tryAgain == "1") {
    disableBtn("submit");
  }
}




function disableBtn(id) {
  const button = document.getElementById(id);
  button.style.cursor = "not-allowed";
  button.setAttribute("disabled", "true");
  button.title = "Please reload the page";
}
