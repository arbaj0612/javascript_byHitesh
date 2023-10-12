const laptopBrands = ["Hp", "Lenovo","Redmi", "Apple"]
const mobileBrands = ["OnePlus", "Samsung", "Oppo", "Moto"]

laptopBrands.push("MSI") // push method always pushes an element into existing array
// console.log(laptopBrands);

// laptopBrands.push(mobileBrands) // it will push whole array as element in existing array
// console.log(laptopBrands);

const allBrands = laptopBrands.concat(mobileBrands)
// console.log(allBrands); // concat method will put all elements in a new array

// By using Spread Operator

const all_merged = [...laptopBrands, ...mobileBrands]
// console.log(all_merged);

const complexArry = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10] ]]

const makeSimpleArray = complexArry.flat(1)  // here we have given 1 as depth (we can also put Infinity as depth)
// console.log(makeSimpleArray);


console.log(Array.isArray("Arbaj")); // returns boolean value
console.log(Array.from("Arbaj")); // [ 'A', 'r', 'b', 'a', 'j' ]
console.log(Array.from({name:"Arbaj"})); //interesting here we get [ 'A', 'r', 'b', 'a', 'j' ] and as well as a empty array

