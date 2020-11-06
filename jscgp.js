
var GameSet = 6;
var BoxColorEach = [];
var textrgbnum = [];
var selectEasy = document.querySelector("#easyb");
//var EasyBtn = document.querySelector("#easyb");
var selectHard = document.querySelector("#hardb");
//var HardBtn = document.querySelector("#hardb");
var selectNewColor = document.querySelector(".NewColor");
var colorRef =[];
var colorRefText;
var button1 = document.querySelector(".box1");
var button2 = document.querySelector(".box2");
var button3 = document.querySelector(".box3");
var button4 = document.querySelector(".box4");
var button5 = document.querySelector(".box5");
var button6 = document.querySelector(".box6");



//initialization to run code when firstly loading page
start_game(GameSet);

//function to generate random number between 0 -255 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//function to set number for each of red, green and blue
function getRGBnum (){
    var RGBnum = [];
    
    for (var i=0; i<3 ; i++){
        RGBnum[i]=getRandomInt(0,255);
    }
    return RGBnum;
}

selectNewColor.addEventListener("click", function(){
    BoxColorEach = [];
    colorRef =[];
    start_game(GameSet);
})

selectEasy.addEventListener("click", function(){
    GameSet = 3;
    BoxColorEach = [];
    colorRef =[];
    start_game(GameSet);    

    //hide box4-5-6 for easy choice
    for ( var k=4; k <= 6; k++){
        var selecthidden = ".box"+k;
        document.querySelector(selecthidden).style.display = "none";
    }
    selectEasy.classList.add("selected")
    selectHard.classList.remove("selected")
})

selectHard.addEventListener("click", function(){
    GameSet = 6;
    BoxColorEach = [];
    colorRef =[];
    for ( var k=1; k <= 6; k++){
        var selecthidden = ".box"+k;
        document.querySelector(selecthidden).style.display = "block";
    }
    selectEasy.classList.remove("selected")
    selectHard.classList.add("selected")
    start_game(GameSet);
});

function start_game(numset){
    // set default color for jumbotron
    document.querySelector(".jumbotron").style.backgroundColor = "RGB(39, 113, 173)";
    
    // set feedback to empty string
    document.querySelector(".evaluation").textContent = "";

    //ensure all box are shown according to easy/hard choice
    for (var x=1; x<=numset; x++){
        var selecthidden = ".box"+x;
        document.querySelector(selecthidden).style.display = "block";
    }

    // generate color for every box and update displayed color accordingly
    for ( var j=1; j <= numset; j++){
        
        z = getRGBnum();
        textrgbnum ="RGB"+"("+z[0]+", "+z[1]+", "+z[2]+")";
        BoxColorEach.push(textrgbnum);
        selectClass = ".box"+[j];
        document.querySelector(selectClass).style.backgroundColor = BoxColorEach[j-1];
    }
    
    // determine reference color and update text header value
    colorRef = Math.floor((Math.random() * numset) + 1);;
    colorRefText = BoxColorEach[colorRef-1];
    document.querySelector(".colorref").textContent = BoxColorEach[colorRef-1];
}

function SelectButton(boxnum){
    if (BoxColorEach[boxnum-1] === colorRefText) {
        document.querySelector(".evaluation").textContent = "CORRECT";
        document.querySelector(".jumbotron").style.backgroundColor = colorRefText;
        for (var n=1; n<=GameSet; n++){
            var showallbox = ".box"+n;
            document.querySelector(showallbox).style.display = "block";
            document.querySelector(showallbox).style.backgroundColor = colorRefText;
        } 
        
    }
    else if (BoxColorEach[boxnum-1] !== colorRefText){
        document.querySelector(".evaluation").textContent = "Try Again!";
        var hidebutton = ".box"+boxnum
        document.querySelector(hidebutton).style.display = "none";
    }
}


button1.addEventListener("click", function(){
    SelectButton(1);
});

button2.addEventListener("click", function(){
    SelectButton(2);
});

button3.addEventListener("click", function(){
    SelectButton(3);
});
 
button4.addEventListener("click", function(){
    SelectButton(4);
});

button5.addEventListener("click", function(){
    SelectButton(5);
});

button6.addEventListener("click", function(){
    SelectButton(6);
});

   


