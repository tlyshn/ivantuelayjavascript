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
document.write("<hr>");

// Advanced

//1

var a = 7;

var b = 14;

var c = 21;

var d = 36;

var e = 42;

var summ = a + b + c + d + e;
console.log(summ);

//challange 2
document.write("Challange 2" + "<br>");

var separateline =
  "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
var repstring = " ";
var replacestriing = separateline.replace(/\$/g, repstring);
document.write(replacestriing);
document.write("<hr>");

let iMax = 5;
let jMax = 3;
let myItems = [];
let count = 1;
for (let i = 0; i < iMax; i++) {
  myItems[i] = [];
  for (let j = 0; j < jMax; j++) {
    myItems[i][j] = count;
    count++;
  }
}
console.log("myItems " + myItems);
console.log("myItems[3][2] " + myItems[3][2]);
