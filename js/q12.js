let btn = document.getElementById("myBtn");
var myInput = document.getElementById("num");

function display() {
  let box;
  if (Number(myInput.value)) {
    box = myInput.value * myInput.value * myInput.value;
  } else box = "Not anumber";
  document.getElementById("disp").innerHTML = box;
  event.preventDefault();
}

btn.addEventListener("click", function () {
  display();
});
