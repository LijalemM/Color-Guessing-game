let colors = ['blue','green','yellow','red','gold','purple']
let selected = [];
let gameInput = [];
let gamerGuess = 0;
let doneGussing = false;

function generateRandomColor () {
    selected = colors [Math.random()*colors.length]
    while (doneGussing !=true){
        gameInput = prompt('I am holding a color pan from these displayed: \n' + colors + '\n Guess the color pan I am holding!')
        gamerGuess +=1;
        doneGussing = guessComparation ();
    }
    if (doneGussing){
        displayer = document.getElementsByClassName("container"[0]);
        displayer.style.backgroundcolor = selected;
        alert("Congratutlations You won the game!")
    }
}
function guessComparation (){
    if (gameInput > colors[-1]){

        if (gameInput.length > selected.length){
            alert ("Incorect Guess!\n" + " please try again! \n" + "Hint: My color words are shorter than your guess")
            return false;
        }
        else if (gameInput.length < selected.length){
            alert ("Incorect Guess! \n" + "please try again! \n" + "Hint: My color words are higher than your guess word number")
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


