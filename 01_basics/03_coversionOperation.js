let score  = 35

  // console.log(typeof score); //datatype number
  // console.log(typeof (score));  

let value = Number(score)
  // console.log(value);

let badScore = "35ab"
 // console.log(typeof badScore); // datatype string

let converInNum = Number(badScore)
  // console.log(converInNum);     // output = NaN
  // console.log(typeof converInNum); // datatype number


let newScore = "35"
 // console.log(typeof newScore); // datatype string

let valueInNumber = Number(newScore)
 // console.log(typeof valueInNumber); // datatype number

let myScore = null
 // console.log(typeof myScore); // datatype object

let getScore = Number(myScore)
 // console.log(getScore); // output= 0
 // console.log(typeof getScore); // datatype number

let yourScore = undefined
 // console.log(typeof yourScore); // datatype undefined

let getYourScore = Number(yourScore)
 // console.log(getYourScore);  // NaN i.e not a number
 // console.log(typeof getYourScore); // datatype number


let finalScore = true
 // console.log(typeof finalScore); // datatype boolean

let getFinalScore = Number(finalScore)
 // console.log(getFinalScore); // output = 1
 // console.log(typeof getFinalScore); // datatype number


// "35" ==> 35
// "35ab" ==> NaN
// true ==> 1 ; false ==> 0


let isLoggedIn = "arbaj"

let booleanIsLogged = Boolean(isLoggedIn)
 // console.log(booleanIsLogged); // true
 // console.log(typeof booleanIsLogged); //boolean 

// 1 ==> true ; 0 ==> false
// "" ==> false
// "arbaj" ==> true


let someNumber = 35
let convertInString = String(someNumber)

 // console.log(convertInString); // 35
 // console.log(typeof convertInString);  // string



 // ************************** OPERATIONS *********************************

let newvalue = 4 
let negNewValue = -newvalue
 // console.log(negNewValue);

   
  // console.log(2+2);
  // console.log(2-2);
  // console.log(2*2);
  // console.log(2**3);
  // console.log(2/2);
  // console.log(2%3);


  let str = "Hello" 
  let str1 = " Arbaj"
  let str2 = str + str1
   // console.log(str2);

 // console.log("1" + 2);
 // console.log("1" + "2");
 // console.log("1" +  +"2");
 // console.log(1 + 2 + "2");
 // console.log("1" + 2 + 2);
 // console.log(+"1" + 2 + 2); 

  // console.log(+true); 
  // console.log(+false);
  // console.log(+"");


  let gameCounter = 100
  let newCounter = gameCounter++
   // console.log(gameCounter);
   // console.log(newCounter);