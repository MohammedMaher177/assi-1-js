let btn = document.getElementById("myBtn");
var myInput = document.getElementById("num");
let box;

function display() {
  switch (myInput.value) {
    case "a":
    case "A":
    case "e":
    case "E":
    case "i":
    case "I":
    case "o":
    case "O":
    case "u":
    case "U":
      document.getElementById("disp").innerHTML = "The character is: vowel";
      break;
    default:
      document.getElementById("disp").innerHTML = "The character is: Consonant";
  }
  event.preventDefault();
}

btn.addEventListener("click", function () {
  display();
});
