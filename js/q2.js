let btn = document.getElementById("myBtn");
var myInput = document.getElementById("num");
let flag;



function display(){
    document.getElementById("disp").innerHTML = `
        ${flag}<br>
        <hr>${myInput.value} can ${flag == "NO" ? '<span class="text-danger">not</span>' : ""} divid by 3 & 4
    `
    event.preventDefault();
};


btn.addEventListener("click", function(){  
    if(myInput.value % 3 == 0 && myInput.value % 4 == 0) {
        flag = "YES"
        }
    else {
        flag = "NO"
    } 
    display();
})
