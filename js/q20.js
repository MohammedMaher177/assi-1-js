let btn = document.getElementById("myBtn");
var myInput1 = document.getElementById("num1");
var myChar = document.getElementById("char");
var myInput2 = document.getElementById("num2");

let show = document.getElementById("disp");

function display(e) {
  let box;
  switch (myChar.value) {
    case "+":
      box = Number(myInput1.value) + Number(myInput2.value);
      break;
    case "-":
      box = Number(myInput1.value) - Number(myInput2.value);
      break;
    case "*":
      box = Number(myInput1.value) * Number(myInput2.value);
      break;
    case "/":
      box = Number(myInput1.value) / Number(myInput2.value);
      break;
    default:
      box = "Invalid Input";
      break;
  }
  show.innerHTML = box;
  e.preventDefault();
}
btn.addEventListener("click", display);
