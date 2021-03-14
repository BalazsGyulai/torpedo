var start = document.getElementById("start");
var ready = document.getElementById("ready");
var readyTwo = document.getElementById("TwoReady");
var addPlayer = document.getElementById("addPlayer");
let szam = 0;
var shipId = 0;
var createId = 0;
var playernameNumber = 0;
var tablaNumber = 1;
var PlayerNumber = 0;
var tableRow = 1;
var tableRowSzamok = 1;
var tableTdSzamok = 2;
var whereAddAlap = 0;
var menu = document.getElementById("sideMenu");
var menuBtn = document.getElementById("menuButton");
var closeBtn = document.getElementById("close");
var TotalPlayerNumber = document.getElementById("TotalPlayerNumver");
var TotalPlayerNumberHtml = document.getElementById("PlayerNumberHtml");
var PlayerNumberTotal = 0;
var NewGameBtn = document.getElementById("newGame");
var dark = document.getElementById("dark");
var SzinHajo = document.getElementById("hajoszin");
var ColorHajo = SzinHajo.getElementsByClassName("colorHajo");

if(window.history.replaceState){
    window.history.replaceState(null, null, window.location.href);
}

for (i=0;i<ColorHajo.length;i++){
    ColorHajo[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var talaltszin = document.getElementById("talaltszin");
var ColorTalalt = talaltszin.getElementsByClassName("colorTalalt");

for(x=0; x<ColorTalalt.length; x++){
    ColorTalalt[x].addEventListener("click", function(){
        var most = document.getElementsByClassName("activeTalalt");
        most[0].className = most[0].className.replace(" activeTalalt", "");
        this.className += " activeTalalt";
    });
}

var melleszin = document.getElementById("melleszin");
var ColorMelle = melleszin.getElementsByClassName("colormelle");

for(x=0; x<ColorMelle.length; x++){
    ColorMelle[x].addEventListener("click", function(){
        var most = document.getElementsByClassName("activeMelle");
        most[0].className = most[0].className.replace(" activeMelle", "");
        this.className += " activeMelle";
    });
}



var changeShipColor = document.getElementsByClassName("colorHajo");

changeShipColor[0].addEventListener("click", function(){
    var shipNumber = document.getElementsByClassName("hajo");
    
    for(i=0; i<shipNumber.length; i++){
        shipNumber[i].style.background = "#ef476f";
    }
});

changeShipColor[1].addEventListener("click", function(){
    var shipNumber = document.getElementsByClassName("hajo");
    
    for(i=0; i<shipNumber.length; i++){
        shipNumber[i].style.background = "#ffd166";
    }
});

changeShipColor[2].addEventListener("click", function(){
    var shipNumber = document.getElementsByClassName("hajo");
    
    for(i=0; i<shipNumber.length; i++){
        shipNumber[i].style.background = "#06d6a0";
    }
});

changeShipColor[3].addEventListener("click", function(){
    var shipNumber = document.getElementsByClassName("hajo");
    
    for(i=0; i<shipNumber.length; i++){
        shipNumber[i].style.background = "#118ab2";
    }
});

changeShipColor[4].addEventListener("click", function(){
    var shipNumber = document.getElementsByClassName("hajo");
    
    for(i=0; i<shipNumber.length; i++){
        shipNumber[i].style.background = "#073b4c";
    }
});


var ChangeTalaltColor = document.getElementsByClassName("colorTalalt");

ChangeTalaltColor[0].addEventListener("click", function(){
    var ChangeLineOneColor = document.getElementsByClassName("lineOne");
    var ChangeLineTwoColor = document.getElementsByClassName("lineTwo");

    for(x=0; x<ChangeLineOneColor.length; x++){
        ChangeLineOneColor[x].style.background = "#ef476f";
        ChangeLineTwoColor[x].style.background = "#ef476f";
    }
});

ChangeTalaltColor[1].addEventListener("click", function(){
    var ChangeLineOneColor = document.getElementsByClassName("lineOne");
    var ChangeLineTwoColor = document.getElementsByClassName("lineTwo");

    for(x=0; x<ChangeLineOneColor.length; x++){
        ChangeLineOneColor[x].style.background = "#ffd166";
        ChangeLineTwoColor[x].style.background = "#ffd166";
    }
});

ChangeTalaltColor[2].addEventListener("click", function(){
    var ChangeLineOneColor = document.getElementsByClassName("lineOne");
    var ChangeLineTwoColor = document.getElementsByClassName("lineTwo");

    for(x=0; x<ChangeLineOneColor.length; x++){
        ChangeLineOneColor[x].style.background = "#06d6a0";
        ChangeLineTwoColor[x].style.background = "#06d6a0";
    }
});

ChangeTalaltColor[3].addEventListener("click", function(){
    var ChangeLineOneColor = document.getElementsByClassName("lineOne");
    var ChangeLineTwoColor = document.getElementsByClassName("lineTwo");

    for(x=0; x<ChangeLineOneColor.length; x++){
        ChangeLineOneColor[x].style.background = "#118ab2";
        ChangeLineTwoColor[x].style.background = "#118ab2";
    }
});

ChangeTalaltColor[4].addEventListener("click", function(){
    var ChangeLineOneColor = document.getElementsByClassName("lineOne");
    var ChangeLineTwoColor = document.getElementsByClassName("lineTwo");

    for(x=0; x<ChangeLineOneColor.length; x++){
        ChangeLineOneColor[x].style.background = "#073b4c";
        ChangeLineTwoColor[x].style.background = "#073b4c";
    }
});

var ChangeMelleColor = document.getElementsByClassName("colormelle");

ChangeMelleColor[0].addEventListener("click", function(){
    var ChangeMellePointColor = document.getElementsByClassName("point");

    for(y=0; y<ChangeMellePointColor.length; y++){
        ChangeMellePointColor[y].style.background = "#ef476f";
    }
})

ChangeMelleColor[1].addEventListener("click", function(){
    var ChangeMellePointColor = document.getElementsByClassName("point");

    for(y=0; y<ChangeMellePointColor.length; y++){
        ChangeMellePointColor[y].style.background = "#ffd166";
    }
})

ChangeMelleColor[2].addEventListener("click", function(){
    var ChangeMellePointColor = document.getElementsByClassName("point");

    for(y=0; y<ChangeMellePointColor.length; y++){
        ChangeMellePointColor[y].style.background = "#06d6a0";
    }
})

ChangeMelleColor[3].addEventListener("click", function(){
    var ChangeMellePointColor = document.getElementsByClassName("point");

    for(y=0; y<ChangeMellePointColor.length; y++){
        ChangeMellePointColor[y].style.background = "#118ab2";
    }
})

ChangeMelleColor[4].addEventListener("click", function(){
    var ChangeMellePointColor = document.getElementsByClassName("point");

    for(y=0; y<ChangeMellePointColor.length; y++){
        ChangeMellePointColor[y].style.background = "#073b4c";
    }
})



menuBtn.addEventListener("click", function(){
    window.onscroll = function(){window.scrollTo(0,0);};
        menu.style.left = "75%";
        dark.style.width = "100%";
});

closeBtn.addEventListener("click", function(){
    window.onscroll = function(){};
        menu.style.left = "-100%";
        dark.style.width = "0";
});

dark.addEventListener("click", function(){
    window.onscroll = function(){};
    menu.style.left = "-100%";
    dark.style.width = "0";
});

    start.addEventListener("click", function(){
     

           if(screen.width > 695){
               document.getElementById("hajoszin").style.display = "flex";
           } else{
               document.getElementById("hajoszin").style.display = "block";     
           }
       
             addPlayer.style.display = "none";
             TotalPlayerNumberHtml.style.display = "none";
             start.style.display = "none";
             ready.style.display = "block";

             createFunction();

    });

    ready.addEventListener("click", function(){
        var nameNumber = 0;
        
            for(i=0; i<PlayerNumber; i++){
        
                document.getElementById("playername_"+nameNumber).style.display = "block";
                document.getElementById("create_name_"+nameNumber).style.display = "none";
                
                document.getElementById("playername_"+nameNumber).innerHTML = document.getElementById("create_name_"+nameNumber).value
            }
    
            nameNumber += 1;
        

        if(screen.width > 695){
            document.getElementById("talaltszin").style.display = "flex";
            document.getElementById("melleszin").style.display = "flex";
        } else{
            document.getElementById("talaltszin").style.display = "block";
            document.getElementById("melleszin").style.display = "block";
        }
    
        myReadyFunction();
    });

    addPlayer.addEventListener("click", function(){  
    
        PlayerNumberTotal++;
    
        TotalPlayerNumber.innerHTML = PlayerNumberTotal; 

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

    tableRowSzamok -= 11;

    for(i=0;i<11;i++){
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
        addTh.appendChild(betuk[i]);
        document.getElementById("TrId_"+tableRowSzamok).appendChild(addTh);

    }

    tableRowSzamok += 1;

    for(i=0;i<10;i++){
        var addThNumber = document.createElement("th");
        var szamok = [
            document.createTextNode("1."),
            document.createTextNode("2."),
            document.createTextNode("3."),
            document.createTextNode("4."),
            document.createTextNode("5."),
            document.createTextNode("6."),
            document.createTextNode("7."),
            document.createTextNode("8."),
            document.createTextNode("9."),
            document.createTextNode("10.")
        ];
        
        addThNumber.appendChild(szamok[i]);
        document.getElementById("TrId_"+tableRowSzamok).appendChild(addThNumber);
        tableRowSzamok += 1;
    }

    tableRowSzamok -= 10;

for(x=0;x<10;x++){
    for(i=0;i<10;i++){
        var addTd = document.createElement("td");

        document.getElementById("TrId_"+tableRowSzamok).appendChild(addTd);
    }

    tableRowSzamok +=1;
}

    tableRowSzamok += 11;


    
    tablaNumber += 1;
    PlayerNumber += 1;

    addIdFunction();
    
}

function addIdFunction(){
    var darab = document.querySelectorAll("td");
    
    for(let hely = 0; hely<darab.length; hely++){
        darab[hely].setAttribute("id", hely);
        
    }

    for(x=0;x<100;x++){
        var addAlap = document.createElement("div");
        document.getElementById(whereAddAlap).appendChild(addAlap);
        addAlap.setAttribute("class", "alap");

        var addShip = document.createElement("div");
        document.getElementById(whereAddAlap).appendChild(addShip);
        addShip.setAttribute("class", "hajo");

        var addTalalt = document.createElement("div");
        document.getElementById(whereAddAlap).appendChild(addTalalt);
        addTalalt.setAttribute("class", "talalt");

        var addMelle = document.createElement("div");
        document.getElementById(whereAddAlap).appendChild(addMelle);
        addMelle.setAttribute("class", "melle");

        whereAddAlap += 1;
    }

    for(i=0; i<darab.length; i++){
        var addTalaltLineOne = document.createElement("div");
        document.getElementsByClassName("talalt")[i].appendChild(addTalaltLineOne);
        addTalaltLineOne.setAttribute("class", "lineOne");

        var addTalaltLineTwo = document.createElement("div");
        document.getElementsByClassName("talalt")[i].appendChild(addTalaltLineTwo);
        addTalaltLineTwo.setAttribute("class", "lineTwo");

        var addMellePoint = document.createElement("div");
        document.getElementsByClassName("melle")[i].appendChild(addMellePoint);
        addMellePoint.setAttribute("class", "point");
    }
    

}

function createFunction(){

    var board = document.getElementsByClassName("tabla");
    var BoardId = 0;
    
    for (i = 0; i < board.length; i++) {
        var PlayerBackgroundColors = ["#0db39e", "#16db93", "#83e377", "#b9e769", "#efea5a", "#f1c453", "#f29e4c"];
        
        
        board[i].style.background = PlayerBackgroundColors[BoardId];

        if(BoardId < 6){
            BoardId += 1;
        } else{
            BoardId = 0;
        }

    }

    var tdNumber = document.querySelectorAll("td");
    var alap = document.querySelectorAll(".alap");
    var ship = document.querySelectorAll(".hajo");
 
   for(let hely = 0; hely<tdNumber.length; hely++){

        alap[hely].setAttribute("id", "alapId_" + shipId);
        ship[hely].setAttribute("id", "shipId_" + shipId);
        
        alap[hely].setAttribute("onclick", "getElementById('alapId_"+[hely]+"').style.display = 'none'; getElementById('shipId_"+[hely]+"').style.display = 'block'");

        ship[hely].setAttribute("onclick", "getElementById('alapId_"+[hely]+"').style.display = 'block'; getElementById('shipId_"+[hely]+"').style.display = 'none'");

        shipId += 1;
    }
}

function myReadyFunction(){


    NewGameBtn.style.display = "block";

    ready.style.display = "none";

    var tdNumber = document.querySelectorAll("td");
    var alap = document.getElementsByClassName("alap");
    var ship = document.querySelectorAll(".hajo");
    var talalt = document.querySelectorAll(".talalt");
    var melle = document.querySelectorAll(".melle");


    for(let hely = 0; hely<tdNumber.length; hely++){

        alap[hely].removeAttribute("onclick");
        ship[hely].removeAttribute("onclick");
        alap[hely].style.display = "block";

        talalt[hely].setAttribute("id", "talaltId_" + createId);
        melle[hely].setAttribute("id", "melleId_" + createId);

        alap[hely].setAttribute("onclick", "getElementById('alapId_"+[hely]+"').style.display = 'none'; getElementById('talaltId_"+[hely]+"').style.display = 'block';");

        talalt[hely].setAttribute("onclick", "getElementById('talaltId_"+[hely]+"').style.display = 'none'; getElementById('melleId_"+[hely]+"').style.display = 'block'");

        melle[hely].setAttribute("onclick", "getElementById('melleId_"+[hely]+"').style.display = 'none'; getElementById('alapId_"+[hely]+"').style.display = 'block'");

        createId += 1;  
    }
}

 NewGameBtn.addEventListener("click", function(){
    NewGameBtn.style.display = "none";

    readyTwo.style.display = "block";

    document.getElementById("talaltszin").style.display = "none";
    document.getElementById("melleszin").style.display = "none";

    var tdNumber = document.querySelectorAll("td");
    var alap = document.querySelectorAll(".alap");
    var ship = document.querySelectorAll(".hajo");
    var talalt = document.querySelectorAll(".talalt");
    var melle = document.querySelectorAll(".melle");

    for(i=0; i<tdNumber.length; i++){
        alap[i].style.display = "block";
        ship[i].style.display = "none";
        talalt[i].style.display = "none";
        melle[i].style.display = "none";
    }

    for(i=0; i<tdNumber.length; i++){

        alap[i].removeAttribute("onclick");
        talalt[i].removeAttribute("onclick");
        melle[i].removeAttribute("onclick");

        
        alap[i].setAttribute("onclick", "getElementById('alapId_"+[i]+"').style.display = 'none'; getElementById('shipId_"+[i]+"').style.display = 'block'");
        
        ship[i].setAttribute("onclick", "getElementById('alapId_"+[i]+"').style.display = 'block'; getElementById('shipId_"+[i]+"').style.display = 'none'");

    }
});

document.getElementById("kilepes").addEventListener("click", function(){
    location.href = "../index.html";
});

readyTwo.addEventListener("click", function(){
    NewGameBtn.style.display = "block";

    readyTwo.style.display = "none";

    var tdNumber = document.querySelectorAll("td");
    var alap = document.getElementsByClassName("alap");
    var ship = document.querySelectorAll(".hajo");
    var talalt = document.querySelectorAll(".talalt");
    var melle = document.querySelectorAll(".melle");


    for(let hely = 0; hely<tdNumber.length; hely++){

        alap[hely].removeAttribute("onclick");
        ship[hely].removeAttribute("onclick");
        alap[hely].style.display = "block";

        alap[hely].setAttribute("onclick", "getElementById('alapId_"+[hely]+"').style.display = 'none'; getElementById('talaltId_"+[hely]+"').style.display = 'block';");

        talalt[hely].setAttribute("onclick", "getElementById('talaltId_"+[hely]+"').style.display = 'none'; getElementById('melleId_"+[hely]+"').style.display = 'block'");

        melle[hely].setAttribute("onclick", "getElementById('melleId_"+[hely]+"').style.display = 'none'; getElementById('alapId_"+[hely]+"').style.display = 'block'");
    }
})