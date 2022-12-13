let colors = ['Green','Yellow','Red','Orange','Blue','Violet','Indigo','Silver','Brown','Gold']
let selected = [];
let gameInput = " ";
let gamerGuess = 0;
let doneGussing = false;

// this function generate randum value from the color listed in the colors array 
function generateRandomColor () {
    selected = colors[Math.floor(Math.random()*colors.length)]
    while (doneGussing !=true){
        gameInput = prompt('Guess a Color from Listed below: \n' + colors )

        gamerGuess +=1;
        doneGussing = guessComparation ();
    }
    if (doneGussing){
        //let displayer = document.getElementsByTagName("body");
        //displayer.style.backgroundcolor === selected;
        alert("Congratutlations You won the game!")
    }
}
// this function compare the gamer input and the randomly generated color
function guessComparation (){

    if (colors.indexOf(gameInput) > -1){

    if (gamerGuess > 3){
        console.log("sorry your given trial is up")
     }
    else if (gameInput.length > selected.length){
            alert ("Incorect Guess!\n" + " please try again! \n" + "Hint: My color words are shorter than your guess")
            return false;
        }
    else if (gameInput.length < selected.length){
            alert ("Incorect Guess! \n" + "please try again! \n" + "Hint: My color words are longer than your guess word number")
            return false;
        }
    else if (gameInput = selected){
            return true;
        }

    }
    else {
        alert("I don't recognize this color! check the list again! ")
        return false;
    }

}
addEventListener("load",generateRandomColor());

