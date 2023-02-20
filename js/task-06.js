const textInput = document.querySelector("#validation-input");
const dataLength = textInput.getAttribute("data-length");


textInput.addEventListener("blur", () => {
   
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


