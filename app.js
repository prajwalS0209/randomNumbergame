let userInput = parseInt(prompt("Enter The maximum value"));//this is to know the users max Number
let attempts = 1;

while (!userInput){
    userInput = parseInt(prompt("Enter The valid input")); 
}
//Verifying the User input is valid

let targetNum = (Math.floor(Math.random() * userInput) +1)
// the above code generates the random number

let guess = parseInt(prompt("Enter your guess"))

do {
    if ( guess = targetNum){
        alert("you guessed it right, check the console for the score")     
    }
    else if(guess < targetNum){
            guess = parseInt(prompt("Your guess is low"))
    }
    else{
        guess = parseInt(prompt("Your guess is high"))
    }
    attempts ++;
    }
 while (guess !== targetNum);
console.log(` CONGRATS!! Heres your Score--${attempts}`)
    



