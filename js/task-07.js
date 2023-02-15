const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const fontSize = fontSizeControl.value;
text.setAttribute("style", `font-size:${fontSize}px`);

fontSizeControl.addEventListener("input", () => {
  const actualFontSize = fontSizeControl.value;
  text.setAttribute("style", `font-size:${actualFontSize}px`);
});
