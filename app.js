let btnTranslate = document.querySelector("#btn-translate");
let userInput = document.querySelector("#user-input");
let output = document.querySelector("#output");

btnTranslate.addEventListener("click", clickEventHandler);

function clickEventHandler() {
  output.innerText = userInput.value;
}
