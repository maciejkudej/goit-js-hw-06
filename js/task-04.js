let counterValue = 0;
let value = document.querySelector("span#value");
value.textContent = counterValue;

const buttonIncrement = document.querySelector("button[data-action='increment']");;
const buttonDecrement = document.querySelector("button[data-action='decrement']");;

const handleClickIncrement = (button) => {
    
    counterValue += 1;
    value.textContent = counterValue;

};

buttonIncrement.addEventListener("click", handleClickIncrement);

const handleClickDecrement = (button) => {
   
    counterValue -= 1;
    value.textContent = counterValue;
};

buttonDecrement.addEventListener("click", handleClickDecrement);


