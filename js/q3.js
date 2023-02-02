let btn = document.getElementById("myBtn");
var myInput1 = document.getElementById("num1");
var myInput2 = document.getElementById("num2");



function display(){
    document.getElementById("disp").innerHTML = `
        ${myInput1.value === myInput2.value ? "The numbers is Equal" 
        : Math.max(myInput1.value, myInput2.value) } `
    event.preventDefault();
};


btn.addEventListener("click", function() {   
    display();
});
