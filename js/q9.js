let btn = document.getElementById("myBtn");
var myInput = document.getElementById("num");
let box = "";

function display() {
  if (Number(myInput.value) == myInput.value) {
    for (let i = 1; i < myInput.value; i++) {
      box += i + " , ";
    }
    box += myInput.value;
  } else {
    box = "it's not a number";
  }

  document.getElementById("disp").innerHTML = box;
  box = "";
  event.preventDefault();
}

btn.addEventListener("click", function () {
  display();
});
