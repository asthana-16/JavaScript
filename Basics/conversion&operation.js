// let score = "33";

// console.log(typeof score);

// let valueOfNumber = Number(score) //always make sure use captial first letter for conversion
// console.log(typeof valueOfNumber);

//for null it will give 0
//if string in not converted in number it will give NaN

//Conversion to Numbers
// "33" => 33
// "33abc" => NaN but type is Number
// null => 0
//undefined => NaN
//true/false => 1/0

// let isLoggedIn = 1;

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // true

// let isLoggedIn = ""; //empty String

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);//false

// let isLoggedIn = "abhinav"; //String

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);//true

//conversion to boolean 
// 1 => true , 0 => flase
// "" => flase
// "abhinav" => true

let someNumber = 33 // string conversion

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof (stringNumber))

let someNumber = true // string conversion

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof (stringNumber))
