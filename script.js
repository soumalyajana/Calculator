let display = document.querySelector('input[name="display"]'); 
let buttons = document.querySelectorAll('input[type="button"]'); 

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let buttonValue = e.target.value;

        if (buttonValue === "=") {
            display.value = eval(display.value); 
        } else if (buttonValue === "AC") {
            display.value = "";
        } else if (buttonValue === "DE") {
            display.value = display.value.slice(0, -1); 
        } else {
            display.value += buttonValue;
        }
    });
});
