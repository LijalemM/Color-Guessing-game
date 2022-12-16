let colorArray =[0,1,2,3,4,5];

//These three variables generate the random RGB number values
let red = Math.floor((Math.random()) * 256);
let green = Math.floor((Math.random()) * 256);
let blue = Math.floor((Math.random()) * 256);
document.getElementById("colors_In_RGB").innerHTML = " Guess which box Matchs with This RGB Combination (" + red  + "," + green + "," + blue + ")";


let reference = Math.floor((Math.random()) * 6);
document.getElementById(reference).style.backgroundColor = " (" + red  + "," + green + "," + blue + ")";
colorArray.splice(reference ,0);


let redA = Math.floor((Math.random()) * 256);
let greenA = Math.floor((Math.random()) * 256);
let blueA = Math.floor((Math.random()) * 256);
document.getElementById(colorArray[0]).style.backgroundColor = " RGB(" + redA  + "," + greenA + "," + blueA + ")";

let redB = Math.floor((Math.random()) * 256);
let greenB = Math.floor((Math.random()) * 256);
let blueB = Math.floor((Math.random()) * 256);
document.getElementById(colorArray[1]).style.backgroundColor = " RGB(" + redB  + "," + greenB + "," + blueB + ")";

let redC = Math.floor((Math.random()) * 256);
let greenC = Math.floor((Math.random()) * 256);
let blueC = Math.floor((Math.random()) * 256);
document.getElementById(colorArray[2]).style.backgroundColor = " RGB(" + redC  + "," + greenC + "," + blueC + ")";

let redD = Math.floor((Math.random()) * 256);
let greenD = Math.floor((Math.random()) * 256);
let blueD = Math.floor((Math.random()) * 256);
document.getElementById(colorArray[3]).style.backgroundColor = " RGB(" + redD  + "," + greenD + "," + blueD + ")";

let redE = Math.floor((Math.random()) * 256);
let greenE = Math.floor((Math.random()) * 256);
let blueE = Math.floor((Math.random()) * 256);
document.getElementById(colorArray[4]).style.backgroundColor = " rgb(" + redE  + "," + greenE + "," + blueE + ")";

let redF = Math.floor((Math.random()) * 256);
let greenF = Math.floor((Math.random()) * 256);
let blueF = Math.floor((Math.random()) * 256);
document.getElementById(colorArray[5]).style.backgroundColor = " rgb(" + redF  + "," + greenF + "," + blueF + ")";

function guess (){
    if(document.activeElement.id==reference){
        document.getElementById("colors_In_RGB").innerHTML ="That is the Correct Match!!" + "\n Congrats! You WON!!";
        document.getElementById("colors_In_RGB").style.color = "Yellow";
    }
    else {
        document.getElementById("colors_In_RGB").innerHTML = "Sorry Your Wrong! Reset and Try again!!";
        document.getElementById("colors_In_RGB").style.color = "White";
    }
    document.getElementsByClassName("button")[0].removeAttribute("onclick");
    document.getElementsByClassName("button")[1].removeAttribute("onclick");
    document.getElementsByClassName("button")[2].removeAttribute("onclick");
    document.getElementsByClassName("button")[3].removeAttribute("onclick");
    document.getElementsByClassName("button")[4].removeAttribute("onclick");
    document.getElementsByClassName("button")[5].removeAttribute("onclick");
}

function Reset(){
    window.location.reload();
}