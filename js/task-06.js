const textInput = document.querySelector("#validation-input");
const dataLength = textInput.getAttribute("data-length");
console.log(dataLength);

textInput.addEventListener("blur", () => {
    // textInput.textContent.length = "";
    console.log(textInput.value.length);
    const actualValue = textInput.value.length;
    if (actualValue == dataLength) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    }
    else {
        textInput.classList.add("invalid");
         textInput.classList.remove("valid");
    }
});

textInput.addEventListener("focus", () => {
    textInput.classList.remove("invalid");
    textInput.classList.remove("valid");
  
});
