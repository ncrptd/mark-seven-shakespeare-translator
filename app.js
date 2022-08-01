let btnTranslate = document.querySelector("#btn-translate");
let clearBtn = document.querySelector("#clr-btn");
let userInput = document.querySelector("#user-input");
let output = document.querySelector("#output");
// let url = "https://api.funtranslations.com/translate/shakespeare.json";
let url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

btnTranslate.addEventListener("click", clickEventHandler);

clearBtn.addEventListener("click", function () {
  userInput.value = "";
  output.innerText = "";
});

function clickEventHandler() {
  if (userInput.value !== "") {
    let text = url + "?text=" + userInput.value;
    fetch(text)
      .then((response) => response.json())
      .then((json) => (output.innerText = json.contents.translated))
      .catch(errorHandler);
  } else {
    output.innerText = "You forgot to write";
  }
}
function errorHandler(error) {
  alert("something wrong with the server please try again later");
  userInput.value = "";
}
