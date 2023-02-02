let btn = document.getElementById("myBtn");
var myInput = document.getElementById("num");

function display() {
  let box = [];
  for (let i = 2; i <= myInput.value; i += 2) {
    box.push(i);
  }
  document.getElementById("disp").innerHTML = box.join(" | ");
  event.preventDefault();
}

btn.addEventListener("click", function () {
  display();
});
