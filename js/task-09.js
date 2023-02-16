function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector("button.change-color");
const backgroundSpan = document.querySelector("span.color");
const body = document.querySelector("body");


button.addEventListener("click", changeColor);


function changeColor()  {
  const color = getRandomHexColor();
  body.setAttribute("style", `background-color:${color}`);
  backgroundSpan.textContent = color;
};


