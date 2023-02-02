let btn = document.getElementById("myBtn");
var myInput = document.getElementById("num");

let show = document.getElementById("disp");

function display(e) {
  show.innerHTML = `<h3>your number is: ${myInput.value}</h3>`;
  e.preventDefault();
}
btn.addEventListener("click", display);
