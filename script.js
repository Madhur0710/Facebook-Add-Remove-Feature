var btn = document.querySelector("button");
var istatus = document.querySelector("h5");

var count = 0;
btn.addEventListener("click", function(){
    if(count==0){
        istatus.innerText = "Friends!";
        istatus.style.color = "green";
        btn.innerText = "Remove";
        count = 1;
 }
 else{
    istatus.innerText = "Stranger";
    istatus.style.color = "red";
    btn.innerText = "Add Friend";
    count = 0;
 }
});