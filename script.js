let colors = ['blue','green']
let selected = [];
let gameInput = " ";
let gamerGuess = 0;
let doneGussing = false;

function generateRandomColor () {
    selected = colors[Math.floor(Math.random()*colors.length)]
    while (doneGussing !=true){
        gameInput = prompt('I am holding a color from these listed below: \n' + colors + '\n Guess the color I am holding!')
         /*if(typeof gameInput !="string"){
            console.log("please use English characters only.")
          }*/
        gamerGuess +=1;
        doneGussing = guessComparation ();
    }
    if (doneGussing){
       let displayer = document.getElementsByClassName("container");
        displayer.style.backgroundcolor = selected;
        alert("Congratutlations You won the game!")
    }
}
function guessComparation (){
    //if (gameInput > colors.length){
 if (gamerGuess > 3){
        console.log("sorry your given trial is up")
     }
 else if (gameInput.length > selected.length){
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

    //}
    else {
        alert("I don't recognize this color! check the list again! ")
        return false;
    }

}
addEventListener("load",generateRandomColor());

