var team = ["Martin", "Thomas", "Peter", "Niki"];
console.log(team[2]);

//1
console.log("Hello from the Console");
document.write("Hello from the Browser");
document.write("<hr>");

//2
console.log("Hi my name is Martin");
document.write("Hi my name is Martin");
document.write("<hr>");

//3
var age = 25;
document.write("and I am " + age + " years old");
document.write("<hr>");

//4
var team = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
console.log(team[3]);

/* Intermediiate*/

//1
var alphabetiically = [
  "Tesla",
  "Audi",
  "Renault",
  "Volvo",
  "Mazda",
  "Fiat",
  "Ferrari",
];

document.write(alphabetiically.sort());
document.write("<hr>");

//2 Fruits
document.write("First array" + "<br>");
var fruits = ["apple", "banana", "kiwi", "orange"];
document.write(fruits[0] + " ");
document.write(fruits[1] + " ");
document.write(fruits[2] + " ");
document.write("<hr>");

document.write("Second array" + "<br>");
document.write(fruits[0] + " ");
document.write(fruits[1] + " ");
document.write(fruits[2] + " ");
document.write(fruits[3] + " ");

//3
var separateline = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var repstring = "\n";
var replacestriing = separateline.replace(/\//g, repstring);
console.log(replacestriing);

// Advanced

//1

var a = 7;

var b = 14;

var c = 21;

var d = 36;

var e = 42;

var summ = a + b + c + d + e;
console.log(summ);
