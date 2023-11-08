#  Projects related to DOM

## Project Link

[Click here](https://stackblitz.com/edit/js-color-changer04-wiymzt)


## Solution Code

## Project 1

```javascript
console.log("Arbaj")
const buttons = document.querySelectorAll(".button")
console.log(buttons)

const body = document.querySelector("body")

buttons.forEach(function (btn) {
  btn.addEventListener("click" , function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === "red"){
      body.style.backgroundColor = "red"
    }
    if(e.target.id === "green"){
      body.style.backgroundColor = "green"
    }
    if(e.target.id === "black"){
      body.style.backgroundColor = "black"
    }
    if(e.target.id === "cyan"){
      body.style.backgroundColor = "cyan"
    }
  })
})


```

## Project 2 Solution Code

## Project Link

[Click here](https://stackblitz.com/edit/calc-urbmi-2w6tqp)

```javascript


import './style.css';

 const form = document.querySelector("form")

 form.addEventListener("submit" , function (e) {
   e.preventDefault()
   const height = parseInt(document.querySelector("#height").value)
   const weight = parseInt(document.querySelector("#weight").value)
   const results = document.querySelector("#results")
   const conclusion = document.querySelector(".conclusion")
   const bmi = (weight / ((height*height) / 10000)).toFixed(2)


   if (height === "" || height < 0 || isNaN(height)) {
     results.innerHTML = `Please Enter valid height ${height}`
   } else if (weight === "" || weight < 0 || isNaN(weight)) {
     results.innerHTML = `Please Enter valid weight ${weight}`
   } else{
     results.innerHTML = `<span>${bmi}</span`
   } 

   if (bmi < 18.6){
      conclusion.innerHTML = "you are underWeight"
   }  else if (bmi <= 24.9){
      conclusion.innerHTML = "You are in normal range"
   }  else if(bmi > 24.9) {
     conclusion.innerHTML = "Overweight"
   }
   
   

 })


```

## Project 3 Solution Code

[Click here](https://stackblitz.com/edit/js-digiclock)

```javascript
// Import stylesheets
import './style.css';

// Write Javascript code!
const clock = document.getElementById("clock")

// console.log(clock)

 setInterval(function () {
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
} , 1000)


```


## Project 4 solution Code 

[Click here](https://stackblitz.com/edit/js-guess-random-num-fdcw73)


```javascript
// Import stylesheets
import './style.css';

// Write Javascript code!

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#sub")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector("#guessSlot")
const remaining = document.querySelector("#guesses")
const lowOrHigh = document.querySelector("#lowOrHigh")
const startOver = document.querySelector(".lastResult")


 const p = document.createElement("p")

let previousGuess = []

let numGuess = 1

let playGame = true


if (playGame) {
  submit.addEventListener("click" , function (e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess (guess) {
  if ( isNaN(guess) ) {
    alert("Please Enter a valid number")
  } else if (guess < 1){
    alert("Please Enter a number greater than 1")
  } else if (guess > 100) {
    alert("Please Enter a number less than 100")
  } else {
    previousGuess.push(guess)
    if (numGuess === 10) {
      displayGuess(guess)
      displayMessg(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else{
      displayGuess(guess)
      checkGuess(guess)
    }

  }
}
function checkGuess (guess) {
  if (guess === randomNumber) {
    displayMessg(`You guessed it Right!`)
    endGame()
  } else if ( guess > randomNumber) {
    displayMessg(`Number is too big`)
  } else if ( guess < randomNumber) {
    displayMessg(`Number is too low`)
  }
}


function displayGuess (guess) {
  userInput.value = ""
  guessSlot.innerHTML += `${guess} , `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
 
}
function displayMessg (messg) {
  lowOrHigh.innerHTML = `<h3>${messg}</h3>`
}


function endGame () {
  userInput.value = ""
  userInput.setAttribute("disabled" , "")
  p.classList.add("button")
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  p.style.border = "5px solid" ;
  p.style.padding = "px"
  p.style.backgroundColor = "blanchedalmond"
  p.style.height = "50px"
  p.style.padding = "6px"
  p.style.textAlign = "center"
  startOver.appendChild(p)
  playGame = false
  newGame()
}
function newGame () {
  const newGameButton =  document.querySelector("#newGame")
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numGuess = 1 ;
    guessSlot.innerHTML = "" ;
    remaining.innerHTML = `${11 - numGuess}` ;
    userInput.removeAttribute("disabled")
    startOver.removeChild(p) ;
    playGame = true ;
 })
  
}

```


## Project 6 Solution Code

[click here](https://stackblitz.com/edit/rand0m-bgcolor-75hggv)

```javascript

  const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}; 

// console.log(randomColor());

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    function chnageBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
    intervalId = setInterval(chnageBgColor, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```