var darab = document.querySelectorAll("td");
var ship = document.querySelectorAll(".hajo");
var talalt = document.querySelectorAll(".talalt");
var melle = document.querySelectorAll(".melle");
let allas = [0, 0, 0, 0];
var szam = 0;

for(let hely = 0; hely<darab.length; hely++){
       darab[hely].setAttribute("id", szam);
       szam += 1;
}

/*
darab[0].addEventListener("click", function(){
    if(allas[0] === 0){
        ship[0].style.display = "block";
        allas[0] = 1;
    } else if(allas[0] === 1){
        ship[0].style.display = "none";
        talalt[0].style.display = "block";
        allas[0] = 2;
    } else if(allas[0] === 2){
        ship[0].style.display = "none";
        talalt[0].style.display = "none"; 
        melle[0].style.display = "block";
        allas[0] = 3;
    } else if(allas[0] === 3){
        ship[0].style.display = "none";
        talalt[0].style.display = "none"; 
        melle[0].style.display = "none";
        allas[0] = 0;
    }
});

darab[1].addEventListener("click", function(){
    if(allas[1] === 0){
        ship[1].style.display = "block";
        allas[1] = 1;
    } else if(allas[1] === 1){
        ship[1].style.display = "none";
        talalt[1].style.display = "block";
        allas[1] = 2;
    } else if(allas[1] === 2){
        ship[1].style.display = "none";
        talalt[1].style.display = "none"; 
        melle[1].style.display = "block";
        allas[1] = 3;
    } else if(allas[1] === 3){
        ship[1].style.display = "none";
        talalt[1].style.display = "none"; 
        melle[1].style.display = "none";
        allas[1] = 0;
    }
});

*/