let btn = document.getElementById("myBtn");
var myInput1 = document.getElementById("num1");
var myInput2 = document.getElementById("num2");
var myInput3 = document.getElementById("num3");

function display() {
  if (myInput1.value == myInput2.value && myInput2.value == myInput3.value) {
    document.getElementById("dispMax").innerHTML = `The numbers is Equal`;
  } else {
    document.getElementById("dispMax").innerHTML = `
            the Max number is: ${Math.max(
              myInput1.value,
              myInput2.value,
              myInput3.value
            )}
            <hr>
            the Min number is: ${Math.min(
              myInput1.value,
              myInput2.value,
              myInput3.value
            )}
        `;
  }
  event.preventDefault();
}
btn.addEventListener("click", function () {
  display();
});
