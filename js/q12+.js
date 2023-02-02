(function (e) {
  let box = "";
  for (let i = 1; i <= 5; i++) {
    box += `<label for="num${i}" class=" text-primary">Please Enter ANumber</label>
                <input type="number" name="num" class=" form-control mb-5"
                    id="num${i}">`;
  }
  const newLocal = `<button type="button" id="myBtn" class="mb-5 btn btn-light
                    border
                    border-bottom">Click Hire</button>`;
  box += newLocal;
  document.querySelector("#form").innerHTML = box;
})();

let btn = document.getElementById("myBtn");
var myInput1 = document.getElementById("num1");
var myInput2 = document.getElementById("num2");
var myInput3 = document.getElementById("num3");
var myInput4 = document.getElementById("num4");
var myInput5 = document.getElementById("num5");

function display(total, average, percentage) {
  document.getElementById("disp").innerHTML = `
    Total numbers = ${total}
    <hr>
    Average of Numbers = ${average}
    <hr>
    Percentage = ${percentage}
  `;
}
btn.addEventListener("click", function (e) {
  var myInput = [
    myInput1.value,
    myInput2.value,
    myInput3.value,
    myInput4.value,
    myInput5.value,
  ];
  let total = 0,
    average,
    percentage;
  for (let i = 0; i < myInput.length; i++) {
    total += Number(myInput[i]);
  }
  console.log(total);
  average = total / 5;
  percentage = average + "%";
  display(total, average, percentage);
});
