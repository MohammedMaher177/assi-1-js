let btn = document.getElementById("myBtn");
var myInput = document.getElementById("num");

function display(){
    document.getElementById("disp").innerHTML = `
        the number is: ${myInput.value % 2 == 0 ? "Even" : 'Odd'}
    `
    event.preventDefault();
}


btn.addEventListener("click", function() {   
    display();
});