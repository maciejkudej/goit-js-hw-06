const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const fontSize = fontSizeControl.value;
text.style.fontSize = `${fontSize}px`;

fontSizeControl.addEventListener("input", () => {
  const actualFontSize = fontSizeControl.value;
  text.style.fontSize = `${actualFontSize}px`;
});
