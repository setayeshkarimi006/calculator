let display = document.getElementById("display");

function press(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value); 
  }
   catch {
    display.value = "خطا!";
  }
}
function backspace() { 
  display.value = display.value.slice(0, -1);
}
function clearDisplay() {
  display.value = "";
}
function sqrt() {
   display.value = Math.sqrt(parseFloat(display.value)); 
  } 
function square() { 
  display.value = Math.pow(parseFloat(display.value), 2); 
}
function power(){
let base = parseFloat(display.value);
let exponent = +prompt("توان مورد نظر را وارد کنید:");
display.value= Math.power(base,exponent);
document.getElementById("display").innerText = base + " به توان " + exponent + " = " + display;
return
}
function ln(){
  display.value=Math.log(parseFloat(display.value))
  // display.value=Math.LOG10E(parseFloat(display.value))
}
function log10(){
   display.value=Math.log10(parseFloat(display.value)); 
  }
function sinFunc() {
   display.value = Math.sin(parseFloat(display.value) * Math.PI / 180); 
  }
function cosFunc() {
   display.value = Math.cos(parseFloat(display.value) * Math.PI / 180);
  }
function tanFunc() {
   display.value = Math.tan(parseFloat(display.value) * Math.PI / 180); 
  }
function atanFunc() {
   let rad = Math.atan(parseFloat(display.value)); display.value = rad * 180 / Math.PI; 
  }






