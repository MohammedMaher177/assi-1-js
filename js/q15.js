let btn = document.getElementById("myBtn");
var myInput = document.getElementById("num");

function display() {
  let box = 0;
  if (!Number(myInput.value)) {
    box =
      "Not A Number,<P class='fs-5 m-3 text-danger'> Please enetr the number of mounth</P>";
    document.getElementById("disp").innerHTML = box;
  } else {
    switch (Number(myInput.value)) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 12:
        for (let i = 1; i <= 31; i++) box += i;

        break;
      case 2:
        for (let i = 1; i <= 28; i++) box += i;
        break;
      case 4:
      case 6:
      case 9:
      case 10:
      case 11:
        for (let i = 1; i <= 30; i++) box += i;
        break;
      default:
        box = "<span class=' text-danger'>Not Amounth</span>";
    }
    document.getElementById(
      "disp"
    ).innerHTML = `Total numbers of Days is: ${box}`;
  }

  event.preventDefault();
}

btn.addEventListener("click", function () {
  display();
});
