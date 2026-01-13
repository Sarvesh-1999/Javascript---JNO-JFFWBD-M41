//! TYPES OF PRINTING STATEMENTS

// console.log("External JS")

// document.writeln("<i>Hello</i>")
// document.writeln("<b>Hello</b>")
// document.writeln("Hello")
// document.writeln("Hello")
// document.writeln("Hello")

// document.write("World")
// document.write("World")
// document.write("World")
// document.write("World")
// document.write("World")

//! TOKENS : smallest unit of any programming lang
/*
THERE ARE 4 TYPES OF TOKENS

1) Keywords: reserved words which has specific meaning 
 - Example :- var, let, const, for, if ,etc...

2) Identifiers : name given to a class, methods, variables are known as identifier

3) Literals / Values : a value stored in a variable is known as literals

4) Operators : to perform operation between two or more operands

EXAMPLE :  var name = "John Doe"
*/

/*
! WE HAVE 2 TYPES OF DATATYPES
1) PRIMITIVE  -> IMMUTABLE

- In primitive there are 7 types:

1) number
2) string
3) boolean
4) undefined
5) null
6) bigInt
7) symbol


2) NON-PRIMITIVE -> MUTABLE

- There are 3 types

1) array
2) object
3) function
*/

//! MUTABLE AND IMMUTABLE EXAMPLE

// var str = "HELLO";
// str[0] = "X";
// console.log(str); // immutable, cannot change

// var arr = [10, 20, 30, 40, 50];
// arr[0] = 100;
// console.log(arr); // mutable, can change

//! PRIMITIVE DATA TYPES EXAMPLES

var n1 = 10.987;
console.log(n1); // 10.987
console.log(typeof n1); // number

var n2 = "Hello";
var n3 = "World";
console.log(n2, n3); // Hello World
console.log(typeof n3); // string

// `` using backticks we can write multi-line strings and we can use string interpolation using ${}
var n4 = `Hey There !!! 
Lets go to javascript ${n3} `;
console.log(n4);
console.log(typeof n4);

var n5 = true;
console.log(n5); // true
console.log(typeof n5); // boolean

console.log(typeof typeof n5); // string

var n6 = undefined;
console.log(n6); // undefined
console.log(typeof n6); // undefined

var n7 = null;
console.log(n7); // null
console.log(typeof n7); // object

var n8 = 9n;
console.log(n8); // 9n
console.log(typeof n8); // bigint

var n9 = Symbol("hello");
var n10 = Symbol("hello");

console.log(n9); // Symbol(hello)
console.log(n10); // Symbol(hello)

console.log(n9 == n10); // false
console.log(n9 === n10); // false

//! STRICTLY AND LOOSLY COMPARISION
var n11 = 10;
var n12 = "10";
console.log(n11 == n12); // true
console.log(n11 === n12); // false

//! VAR , LET AND CONST DIFFERENCE

var a;
console.log(a); // ud
a = 10;
console.log(a); // 10
var b = 20
console.log(b); // 20
var b;
console.log(b); // 20
b = 30
console.log(b); // 30
var a = 40
console.log(a); // 40






let c;
console.log(c); // ud
c = 100
console.log(c); // 100
let d = 200
console.log(d); // 200
// let c ;//! Cannot redeclare
d = 300
console.log(d); // 300
// let d = 400 //! Cannot redeclare and reinitialize


//! declare and initialize at same time
const e = 1000
console.log(e); // 1000




