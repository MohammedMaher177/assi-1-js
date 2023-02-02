let btn = document.getElementById("myBtn");
var myInput = document.getElementById("num");

function display() {
  let box;
  if (!Number(myInput.value)) {
    box = "Not A Number,<P class='fs-5 m-3 text-danger'> Please enetr the number of mounth</P>";
  } else {
    switch (Number(myInput.value)) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 12:
        box = "Days in Month: 31";
        break;
      case 2:
        box = "Days in Month: 28";
        break;
      case 4:
      case 6:
      case 9:
      case 10:
      case 11:
        box = "Days in Month: 30";
        break;
      default:
        box = "Not Amounth";
    }
  }
  document.getElementById("disp").innerHTML = box;
  event.preventDefault();
}

btn.addEventListener("click", function () {
  display();
});
