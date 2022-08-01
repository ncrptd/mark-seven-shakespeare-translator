let btnTranslate = document.querySelector("#btn-translate");
let userInput = document.querySelector("#user-input");

btnTranslate.addEventListener("click", clickEventHandler);

function clickEventHandler() {
  console.log(userInput.value);
}
