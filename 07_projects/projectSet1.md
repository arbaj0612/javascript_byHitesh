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