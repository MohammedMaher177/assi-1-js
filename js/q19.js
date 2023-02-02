let btn = document.getElementById("myBtn");
var myInput = document.getElementById("num");

function display() {
  document.getElementById("disp").innerHTML = `The Number is: ${
    myInput.value > 0 ? "Positive" : myInput.value < 0 ? "Negative" : "ZerOo"
  }`;
  event.preventDefault();
}

btn.addEventListener("click", function () {
  display();
});
