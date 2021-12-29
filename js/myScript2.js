function sendHi(x) {
  alert(x + "My name is " + document.getElementById("hiName").value);
  document.getElementById("date").innerHTML = Date();
}

console.log("yes Im alive");

let elem = document.getElementById("date");
console.log(elem);
// document.getElementById("date").style.color = "red";
elem.style.color = "red";
elem.style.border = "1px solid white";

let a = 10;
let b = 15;
const c = a + b;
console.log(a);
console.log(b);
console.log(c);
console.log("a + b = " + c);
console.log(a + "+" + b + "=" + c);

a /= 2;
var kbt = [10, 15, 20, "image", "laptop"];
console.log(kbt);
console.log(kbt[5]);

let coffee = {
  flavor: "sweet",
  size: "large",
  price: 2.5,
  getDiscount: function () {
    console.log("discount 20%");
  },
};

console.log(coffee);
console.log(coffee.size);
coffee.size = "small";
console.log(coffee.size);
coffee.getDiscount();

let myString = "hello name";
console.log(myString.length);
console.log(elem.innerHTML.length);
console.log(myString.replace("name", "Athary"));
let newString = myString.replace("name", "Athary");
console.log(myString);
console.log(newString);

var x = 10;
var y = x.toString();
console.log(x + 10);
console.log(y + 10);
const pi = 3.14159265359;
console.log(pi.toPrecision(4));

let kbt2 = [10, 8, 5, 3, 1, 2];
console.log(kbt2);
kbt2.sort();
console.log(kbt2);
kbt2.reverse();
console.log(kbt2);
console.log(Math.abs(-9));
console.log(Math.PI);

kbt2.push("D");
console.log(kbt2);

var x = "10",
  y = "10",
  z = 5,
  w = 6;
if (x == y && z < w) {
  console.log("Working");
}
// (for, while, do-while, forEach)
// 1- condition
// 2- intialize counter
// 3- increment (change counter)
var arr = "";

for (var i = 0; i <= 10; i++) {
  // console.log("Hi " + i);
  arr += i + " ";
  // console.log("Hi " + arr);
}
console.log(arr);
let kbt3 = [];
console.log(kbt3);

for (var i = 0; i < kbt2.length; i++) {
  kbt3.push(kbt2[i]);
}
console.log(kbt3);

let kbt4 = [...kbt2];

console.log(kbt4);
