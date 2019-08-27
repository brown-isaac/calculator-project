function clickMe() {
    alert ("You are welcome");
}

function project() {
    alert ("My calculator project");
}

function plusBtn(){
  document.calculator.display.value +="+";
  /* document.calculator.display.value.textAlign="right"; */
}
function subBtn(){
  document.calculator.display.value +="-";
  /* document.calculator.display.value.textAlign="right"; */
}
function mulBtn(){
  document.calculator.display.value +="*";
  /* document.calculator.display.value.textAlign="right"; */
}
function perBtn(){
  document.calculator.display.value +="%";
 /* document.calculator.display.value.textAlign="right"; */
}
function dotBtn(){
  document.calculator.display.value +=".";
  /* document.calculator.display.value.textAlign="right"; */
}
function divBtn(){
  document.calculator.display.value +="/";
  /* document.calculator.display.value.textAlign="right"; */
}
function clearBtn(){
  document.calculator.display.value ="";
  /* document.calculator.display.value.textAlign="right"; */
}