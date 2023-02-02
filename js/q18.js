let btn = document.getElementById("myBtn");
var myInput = document.getElementById("num");

function display() {
  let box = myInput.value % 2;
  let cartona;
  switch (box) {
    case 0:
      cartona = "the number is: Even";
      break;
    case 1:
      cartona = "the number is: Odd";
      break;
    default:
      cartona = "Invalid Input";
      break;
  }
  document.getElementById("disp").innerHTML = cartona;
  event.preventDefault();
}

btn.addEventListener("click", function () {
  display();
});
