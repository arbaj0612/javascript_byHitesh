//filter map and reduce

// const coding = ["js", "html", "css", "react"]

// const getVal = coding.forEach( (item)=> {
//     // console.log(item);
//     return item // undefined
// })

// console.log(getVal); // undefined

// NOTE ==> forEach does not return any values

const myNums = [1, 2, 3, 4, 6, 7, 8, 9]

// const getNums = myNums.filter( (item)=> {
//     return item < 6
// })

// const getNums = myNums.filter( (item)=> item < 6 ) // without return keyword

// console.log(getNums);


// const newNums = []

// myNums.forEach ( (num)=> {
//     if (num < 7) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let getData = books.filter( (bk)=> bk.genre === "Fiction")
//   console.log(getData);

// let getData = books.filter( (bk)=> {return bk.publish >= 1995})

// console.log(getData);

// let getData = books.filter( (bk) => {
//     return bk.genre === "Science" && bk.edition >= 2000
// })

// console.log(getData);