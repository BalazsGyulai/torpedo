var darab = document.querySelectorAll("td");
var alap = document.querySelectorAll(".alap");
var ship = document.querySelectorAll(".hajo");
var talalt = document.querySelectorAll(".talalt");
var melle = document.querySelectorAll(".melle");
var CreatePlayerName = document.getElementById("create_name_1");
var PlayerName = document.getElementById("playername_0");
var start = document.getElementById("start");
var addPlayer = document.getElementById("addPlayer");
var szam = 0;
var shipId = 0;
var createId = 0;
var playernameNumber = 0;
var tablaNumber = 1;
var PlayerNumber = 1;
var tableRow = 1;
var tableRowSzamok = 1;
var tableTdSzamok = 2;

for(let hely = 0; hely<darab.length; hely++){
       darab[hely].setAttribute("id", szam);
       szam += 1;
       alap[hely].setAttribute("id", "alapId_" + shipId);
       ship[hely].setAttribute("id", "shipId_" + shipId);

       
       alap[hely].setAttribute("onclick", "getElementById('alapId_"+shipId+"').style.display = 'none';getElementById('shipId_"+shipId+"').style.display = 'block';");

       ship[hely].setAttribute("onclick", "getElementById('shipId_"+shipId+"').style.display = 'none'; getElementById('alapId_"+shipId+"').style.display = 'block';");

       shipId += 1;
    }

    start.addEventListener("click", function(){
        PlayerName.innerHTML = CreatePlayerName.value;
        CreatePlayerName.style.display = "none";
        start.style.display = "none";
    
        createFunction();
    });

    addPlayer.addEventListener("click", function(){
        addPlayerFunction();
    });

function addPlayerFunction(){
    var addBoard = document.createElement("div");
    

    document.getElementById("jatek").appendChild(addBoard);
    addBoard.setAttribute("class", "tabla");
    addBoard.setAttribute("id", "tablaId_" + tablaNumber);
    
    var addPara = document.createElement("p");
    document.getElementById("tablaId_" + tablaNumber).appendChild(addPara);
    addPara.setAttribute("id", "playername_" + PlayerNumber);

    var addinput = document.createElement("input");
    document.getElementById("tablaId_" + tablaNumber).appendChild(addinput);
    addinput.setAttribute("type", "text");
    addinput.setAttribute("size", "15");
    addinput.setAttribute("id", "create_name_"+PlayerNumber);
    addinput.setAttribute("placeholder", "Név");

    var addTable = document.createElement("table");
    document.getElementById("tablaId_"+tablaNumber).appendChild(addTable);
    addTable.setAttribute("id", "NewTable_"+tablaNumber);
    
    for(i=0; i<11; i++){
        
        var addTr = document.createElement("tr");
        document.getElementById("NewTable_"+tablaNumber).appendChild(addTr);
        addTr.setAttribute("id", "TrId_"+tableRowSzamok);
        tableRowSzamok += 1;
    }

/*     for(x=0; x<11;x++){
        var addTh = document.createElement("th");
        var betuk = [
            document.createTextNode(" "),
            document.createTextNode("A"),
            document.createTextNode("B"),
            document.createTextNode("C"),
            document.createTextNode("D"),
            document.createTextNode("E"),
            document.createTextNode("F"),
            document.createTextNode("G"),
            document.createTextNode("H"),
            document.createTextNode("I"),
            document.createTextNode("J")
        ];


        addTh.appendChild(betuk[x]);
        document.getElementById("TrId_"+tableRowSzamok).appendChild(addTh); 
    }*/

    tablaNumber += 1;
    PlayerNumber += 1;

}



function createFunction(){
 
   for(let hely = 0; hely<darab.length; hely++){

        ship[hely].removeAttribute("onclick");
        alap[hely].removeAttribute("onclick");

        talalt[hely].setAttribute("id", "talaltId_" + createId);
        melle[hely].setAttribute("id", "melleId_" + createId);

        alap[hely].setAttribute("onclick", "getElementById('alapId_"+createId+"').style.display = 'none'; getElementById('talaltId_"+createId+"').style.display = 'block';");

        ship[hely].setAttribute("onclick", "getElementById('talaltId_"+createId+"').style.display = 'block';");

        talalt[hely].setAttribute("onclick", "getElementById('talaltId_"+createId+"').style.display = 'none'; getElementById('melleId_"+createId+"').style.display = 'block';");

       melle[hely].setAttribute("onclick", "getElementById('melleId_"+createId+"').style.display = 'none'; getElementById('alapId_"+createId+"').style.display = 'block';");

        createId += 1; 
    }
}