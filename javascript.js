let myName; //Declare a variable
let vName = "Sagar"; //Initializing a variable

//Naming Conventions of Variables

//CamelCase
let firstName = "Sagar";
//PascalCase
let LastName = "Ingle";
//SnakeCase
let middle_name = " Bhimrao ";

//Using Constant (const keyword)
const price = 99;

//Course Name (String)
var courseName = "Java DS/Algio Course";

// Card Number (Number)
var cardNumber = "123456789";

//Payment Status (Boolean)
var isPaid = true;

/* Declaring Variable
var modeOfPayment;

Taking Input from User
modeOfPayment = prompt("Mode of Payment");

Output to user
alert(
  firstName + " sucessfully bought " + courseName + " using " + modeOfPayment
);
 */
//Switc Case:
/* var devices = prompt("Kya on krna hai");
switch (devices) {
  case "Fan":
    console.log("Fan is turned on");
    break;
  case "TV":
    console.log("TV is turned on");
    break;
  case "Charger":
    console.log("Charger is turn on");
    break;
  case "Tubelight":
    console.log("Tubelight is turn on");
    break;
  default:
    console.log("No Action");
}
console.log("Or kya on krna hai");
 */
//if else if:
/* var time = prompt("Hey whats the time : ");
if (time > 5 && time < 12) {
  alert("Good Morning");
} else if (time > 12 && time < 17) {
  alert("GOOD Afternoon");
} else if (time > 17 && time < 21) {
  alert("Good Evening");
} */

// 5 Types of LOOPS in Javascript :

// 1) for loop:

for (let i = 0; i < 10; i++) {
  console.log("Namaste world");
}

for (let i = 5; i < 51; i = i + 5) {
  console.log(i);
}

//Reverse for loop:
for (let i = 50; i > 4; i = i - 5) {
  console.log(i);
}

//Odd number:

for (let i = 0; i < 10; i++) {
  if (i % 2 != 0) console.log(i);
}

//While loop
let i = 10;
while (i > 0) {
  console.log("Sagar Ingle");
  i--;
}

//do while loop:

let j = 0;
do {
  console.log("Sagar Ingle");
  j++;
} while (j < 10);

//For...In
//Objects

let animal = { name: "Zebra", leg: 4 };
for (let key in animal) {
  console.log(key, animal[key]);
}

//Array:

let subject = ["math", " english", " hindi", " Bio"];
subject[2] = "chemistry"; // updating index
console.log(subject[2]);
subject.unshift("work");
console.log(subject);

//Function:

function cookMaggi(maggi, pani, tapeli) {
  console.log(
    "Your maggie will be ready in " +
      maggi * 2 +
      " minutes " +
      " and Ingredients used are:- " +
      maggi +
      " Maggi " +
      pani +
      " cups of water" +
      " using " +
      tapeli +
      " pan "
  );
}
cookMaggi(4, 8, 1);

//String:

// function outputMsg(hello, welcome, numberString) {
//   console.log(hello + welcome + "Your Score is " + numberString);
// }
// outputMsg(" hello ", " welcome ", 556);

//OR

// function outputMsg(hello, welcome, numberString) {
//   console.log(`${hello + welcome} Your Score is ${numberString}`);
// }
// outputMsg(" Hello ", " Welcome ", 123);

// var favShow = "Game of Thrones";
// console.log(favShow.length);

// console.log(favShow[0]);

// console.log(favShow[favShow.length - 3]);

// console.log(favShow.indexOf("n"));

// console.log(favShow.slice(5, 9));

// console.log(favShow.toUpperCase());

const list = document.querySelector(".output ul");
list.innerHTML = "";
let cities = ["mumBai", "DELhi", "JaIPur", "gOa"];

for (let i = 0; i < cities.length; i++) {
  let lowerCaseCity = cities[i].toLowerCase();
  let firstAlphabet = lowerCaseCity.slice(0, 1);
  lowerCaseCity = lowerCaseCity.replace(
    firstAlphabet,
    firstAlphabet.toUpperCase()
  );
  let listItem = document.createElement("li");
  listItem.textContent = lowerCaseCity;
  list.appendChild(listItem);
}

// const cities = ["mumBai", "DELhi", "JaIPur", "gOa"];
// const list = document.querySelector(".output ul");
// list.innerHTML = "";

// cities.forEach((city) => {
//   const capitalizedCity =
//     city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
//   const listItem = document.createElement("li");
//   listItem.textContent = capitalizedCity;
//   list.appendChild(listItem);
// });

//String Concatination
var sagar = "Sagar";
var ingle = "Ingle";
console.log(sagar + ingle);
console.log(sagar + " " + ingle);
console.log(sagar.concat(ingle));

var string = "String";
var number = 64;
var boolean = true;

console.log(string + number + boolean);

//With template literals(backticks) ``, you can do string interpolation using ${variable} inside template literals:

var place = `World`;
var greet = `Hello ${place}`;

console.log(greet);

// var originalString = "string";
// var reversedString = reverseString(originalString);

// Reverse String

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("ingle sagar"));

//OR
var originalString = "Hello, World!";
var reversedString = reverseString(originalString);
function reverseString(inputString) {
  return inputString.split("").reverse().join("");
}
console.log(reversedString);

//Custom reverse() function

function reverse(string) {
  var strRev = "";
  for (var i = string.length - 1; i >= 0; i--) {
    strRev += string[i];
  }
  return strRev;
}
console.log(reverse("zebra"));
