// ! DOM SELECTORS ARE OF 5 TYPES, USED TO TARGET HTML ELEMENTS IN JAVASCRIPT

//! 1) document.getElementById() : Returns the first element within node's descendants whose ID is elementId else returns null.

// let h2Tag = document.getElementById("head2");
// console.log(h2Tag);

// console.log(h2Tag.textContent);
// console.log(h2Tag.innerHTML);

// //! 2) document.getElementsByClassName()
// let h3Tags = document.getElementsByClassName("head3");
// console.log(h3Tags); // HTMLCollection(3) [h3.head3, h3.head3, h3.head3]

// console.log(h3Tags[1].textContent);

//! if we want to check array is pure or not -> Array.isArray() returns boolean
// console.log(Array.isArray(h3Tags)); // false

//! convert impure array to pure array -> Array.from() returns pure array
// let pureArray = Array.from(h3Tags);
// console.log(pureArray);

// //! 3) document.getElementsByTagName()
// let tagsCollection = document.getElementsByTagName("h3");
// console.log(tagsCollection); // HTMLCollection(3) [h3.head3, h3.head3, h3.head3]

// //! 4) document.querySelector(" id , class , tagname ")

// let ele1 = document.querySelector("#head2");
// console.log(ele1);

// let ele2 = document.querySelector(".head3");
// console.log(ele2);

// let ele3 = document.querySelector("h3");
// // console.log(ele3);

// // priority : id > class > tagname
// let ele4 = document.querySelector("h3 ,#head2, .head3");
// // console.log(ele4);

//! 5) document.querySelectorAll()
// let ele5 = document.querySelectorAll(".head3");
// console.log(ele5); // NodeList[h3.head3, h3.head3, h3.head3]

// WHENEVER WE USE getElementsByClassName or tagName we get HTMLCollection
// WHENEVER WE USE querySelectorAll we get NodeList

//! SIMIRAILTY
// BOTH ARE IMPURE ARRAY

//! DIFFERENCE BETWEEN HTMLCollection and NodeList

// CANNOT USE ANY OF THE ARRAY METHODS IN HTMLCollection
// CAN USE forEach() method in NodeList

// HTML COLLECTION IS CALLED LIVE COLLECTION
// NODE LIST IS CALLED STATIC COLLECTION

//! EXAMPLE OF STATIC AND LIVE COLLECTION
// const collection = document.getElementsByTagName("div");
// const list = document.querySelectorAll("div");

// console.log("HTMLCollection -->", collection.length); // 3
// console.log("NodeList -->", list.length); // 3

// // creating HTML Element dynamically
// for (let i = 0; i < 5; i++) {
//   const divTag = document.createElement("div");
//   divTag.textContent = "div 4";
//   console.log(divTag); // <div>div 4</div>
//   document.body.appendChild(divTag);
// }

// console.log("HTMLCollection -->", collection.length); // 8 (LIVE)
// console.log("NodeList -->", list.length); // 3 (STATIC)

// //! DOM MANIPULATION
// const mainContainer = document.querySelector("#table-container");
// const tableTag = document.createElement("table");

// const trTag1 = document.createElement("tr");
// const trTag2 = document.createElement("tr");
// const trTag3 = document.createElement("tr");

// const thTag1 = document.createElement("th");
// const thTag2 = document.createElement("th");
// const thTag3 = document.createElement("th");

// const tdTag1 = document.createElement("td");
// const tdTag2 = document.createElement("td");
// const tdTag3 = document.createElement("td");
// const tdTag4 = document.createElement("td");
// const tdTag5 = document.createElement("td");
// const tdTag6 = document.createElement("td");

// //! adding attributes
// tableTag.border = "1";
// tableTag.cellSpacing = "0";
// tableTag.cellPadding = "5";

// //! adding textContent
// thTag1.textContent = "ID";
// thTag2.textContent = "FNAME";
// thTag3.textContent = "LNAME";

// tdTag1.textContent = "1";
// tdTag2.textContent = "John";
// tdTag3.textContent = "Doe";
// tdTag4.textContent = "2";
// tdTag5.textContent = "Jane";
// tdTag6.textContent = "Doe";

// //! append as a child
// trTag1.append(thTag1, thTag2, thTag3);
// trTag2.append(tdTag1, tdTag2, tdTag3);
// trTag3.append(tdTag4, tdTag5, tdTag6);

// tableTag.append(trTag1, trTag2, trTag3);

// mainContainer.append(tableTag);

//! EVENTS :  ACTIONS PERFORMED BY THE USER

//! MOUSE EVENTS
// onclick
function singleClick() {
  console.log("single clicked");
}

// ondblclick
function doubleClick() {
  console.log("Double CLick");
}

// onmouseenter
function cursorEnter() {
  console.log("cursor entered");
}

// onmouseleave
function cursorExit() {
  console.log("cursor left");
}

// onmousemove
function cursorMove() {
  console.log("cursor Moved");
}

//! KEYBOARD EVENTS
// onkeydown
function keyPressed() {
  console.log("key is Pressed");
}

// onkeyup
function keyReleased() {
  console.log("key is Released");
}

// onchange
function inputChanged() {
  console.log("input is changed");
}

//! FORM EVENTS
// onsubmit <-- always used in form tag
function handleForm1(e) {
  e.preventDefault(); // stops page reload

  //! WAY 1
  //   let formData = {
  //     email: e.target[0].value,
  //     password: e.target[1].value,
  //   };
  //   console.log(formData);

  //! WAY 2
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  let formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
}

//! WINDOW EVENTS
// onload{
function pageLoad() {
  console.log("Page is loaded");
}

// onscroll
function pageScroll() {
  console.log("Page scrolled");
}

// ! addEventListener( "event" ,  callbackFunc , useCapture )

const h1Tag = document.createElement("h1");
h1Tag.textContent = "Learn addEventListener";

h1Tag.addEventListener("click", () => {
  console.log("H1 clicked");
  h1Tag.style.backgroundColor = "red";
});

document.body.append(h1Tag);
