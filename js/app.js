var darab = document.querySelectorAll("td");
var alap = document.querySelectorAll(".alap");
var ship = document.querySelectorAll(".hajo");
var talalt = document.querySelectorAll(".talalt");
var melle = document.querySelectorAll(".melle");
var szam = 0;
var shipId = 0;

for(let hely = 0; hely<darab.length; hely++){
       darab[hely].setAttribute("id", szam);
       szam += 1;
       alap[hely].setAttribute("id", "alapId_" + shipId);
       ship[hely].setAttribute("id", "shipId_" + shipId);
       talalt[hely].setAttribute("id", "talaltId_" + shipId);
       melle[hely].setAttribute("id", "melleId_" + shipId);
       
       alap[hely].setAttribute("onclick", "getElementById('alapId_"+shipId+"').style.display = 'none';getElementById('shipId_"+shipId+"').style.display = 'block';");

       ship[hely].setAttribute("onclick", "getElementById('shipId_"+shipId+"').style.display = 'none'; getElementById('talaltId_"+shipId+"').style.display = 'block';");

       talalt[hely].setAttribute("onclick", "getElementById('talaltId_"+shipId+"').style.display = 'none'; getElementById('melleId_"+shipId+"').style.display = 'block';");

       melle[hely].setAttribute("onclick", "getElementById('melleId_"+shipId+"').style.display = 'none'; getElementById('alapId_"+shipId+"').style.display = 'block';");

       shipId += 1;
    }