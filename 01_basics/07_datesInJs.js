const myDate = new Date()

// console.log(myDate); // current date (2023-10-11T03:31:47.116Z)
 
// console.log(typeof myDate); //object

// console.log(myDate.toLocaleString()); // 10/11/2023, 3:31:47 AM

// here we had specified our choice of date below

const randomDate = new Date(2024,0,31) // here 0 represnts january as month count is start from 0 in js
// console.log(randomDate); // 2024-01-31T00:00:00.000Z
// console.log(randomDate.toDateString());  // Wed Jan 31 2024
// console.log(randomDate.toISOString());  // 2024-01-31T00:00:00.000Z
// console.log(randomDate.toJSON()); // 2024-01-31T00:00:00.000Z
// console.log(randomDate.toLocaleDateString());  // 1/31/2024
// console.log(randomDate.toLocaleString()); // 1/31/2024, 12:00:00 AM
// console.log(randomDate.toTimeString()); // 00:00:00 GMT+0000 (Coordinated Universal Time)
// console.log(randomDate.toLocaleTimeString());  // 12:00:00 AM

const myTimeStamp = Date.now()
// console.log(myTimeStamp); // we get date in miliseconds
// console.log(Math.floor(myTimeStamp/1000)); // converted in seconds


const newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());


newDate.toLocaleString("default",{
    day : "2-digit" ,
    weekday :"long"

})

