let btn = document.getElementById("myBtn");
var myInput = document.getElementById("num");

function display() {
  let box = "";
  for (let i = 2; i < 12; i++) {
    box += `${myInput.value * i} ,`;
  }
  box += myInput.value * 12;
  document.getElementById("disp").innerHTML = box;
  event.preventDefault();
}

btn.addEventListener("click", function () {
  display();
});
