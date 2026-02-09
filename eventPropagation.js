// ! addEventListener( "event" ,  callbackFunc , useCapture = 0/1 )

// 0 -> BUBBLING
// 1 -> CAPTURING

const section = document.querySelector("section");
const article = document.querySelector("article");
const div = document.querySelector("div");

section.addEventListener("click", (e) => {
    e.stopPropagation()
  console.log("Section");
  section.style.backgroundColor = "orange";
},0);

article.addEventListener("click", (e) => {
    e.stopPropagation()
  console.log("Article");
  article.style.backgroundColor = "yellow";
},0);

div.addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("Div");
  div.style.backgroundColor = "red";
},0);

div.addEventListener("click", (e) => {
    e.stopImmediatePropagation()
  console.log("Hello DIV");
},0);
