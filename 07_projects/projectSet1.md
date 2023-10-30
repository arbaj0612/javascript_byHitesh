#  Projects related to DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

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