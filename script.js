let colors = ['Green','Yellow','Red','Orange','Blue','Violet','Indigo','Silver','Brown','Gold',"Black", "Lime"]
let randomSelected = [];
let gamerInput = " ";
let gamerGuess = 0;
let guessingDone = false;

//* this code is from stackoverFlow and class examples 
 function listColor  ()
{
    for(let key in colors)
    {
        let obj = colors[key];
        let string = obj + "\n";
        document.getElementById("displayText").innerHTML += string;
    }
}
window.onload = function (){
    document.getElementById("ListArray").onclick = listColor;
    }

function RandomColorgenerator (){
    randomSelected = colors[Math.floor(math.random() * colors.length)]
    while(guessingDone !=true){
        gamerInput = " "
        document.getElementById("inputText").value = gamerInput

        gamerGuess +=1;
        guessingDone = guessComparation ();
    }
    if (guessingDone) {
        alert("congrats You won the game" + "with " + gamerGuess + "guess!")
    }
}

function guessComparation (){
    if (colors.indexOf(gamerInput) > -1){
        if (gamerInput.length > randomSelected.length){
            alert ("Incorect Guess!\n" + " please try again! \n" + "Hint: My color words are shorter than your guess")
            return false;
        }
        else if (gamerInput.length < randomSelected.length){
            alert ("Incorect Guess! \n" + "please try again! \n" + "Hint: My color words are higher than your guess word number")
            return false;
        }
        else if (gamerInput = randomSelected){
            return true;
        }
        else 
        {
            alert("I don't recognize this color! check the list again! ")
            return false;
        }
    
    }
}
addEventListener("load",RandomColorgenerator());