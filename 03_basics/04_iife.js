// Immediately Invoked function Expressions

//Sometimes there is a problem of pollution in global scope so to avoid that we used IIFE\


// function dataBase () {
//     console.log("DB connected");
// }

// dataBase()


// normal to ==> IIFE function
// named IIFe
(function dataBase () {
    console.log("DB connected");
}) ();


// unnamed IIfe
(  (name) =>{
    console.log(`DB two Connected ${name}`);
})("Arbaj")

const addTwo = (( (n1,n2) =>{
    return console.log(n1+n2);
})) (2,5)

// NOTE ==> To define two consequent IIFE it important give semicolon (;) at the end...

