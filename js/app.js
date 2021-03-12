var a1 = document.getElementById("a1");
var ship = document.querySelectorAll(".hajo");
var talalt = document.querySelectorAll(".talalt");
var melle = document.querySelectorAll(".melle");
let allas = 0;

a1.addEventListener("click", function(){
    if(allas === 0){
        ship[0].style.display = "block";
        allas = 1;
    } else if(allas === 1){
        ship[0].style.display = "none";
        talalt[0].style.display = "block";
        allas = 2;
    } else if(allas === 2){
        ship[0].style.display = "none";
        talalt[0].style.display = "none"; 
        melle[0].style.display = "block";
        allas = 3;
    } else if(allas === 3){
        ship[0].style.display = "none";
        talalt[0].style.display = "none"; 
        melle[0].style.display = "none";
        allas = 0;
    }
});