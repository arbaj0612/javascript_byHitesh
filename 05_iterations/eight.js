const myNums = [1, 2, 3]

// const newNums = myNums.reduce( function (acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0 )

// console.log(newNums);

// const newNums = myNums.reduce( (acc, currVal) => acc + currVal , 0)

// console.log(newNums);


const shoppingCart = [
    {
        course: "js",
        price: 2000
    },
    {
        course: "py",
        price: 1200
    },
    {
        course: "ds",
        price: 3000
    },
    {
        course: "web3",
        price: 3500
    },

]

const totalAmount = shoppingCart.reduce( (acc, item)=> acc + item.price, 0)

console.log(totalAmount);