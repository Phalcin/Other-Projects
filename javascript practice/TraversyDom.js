// // Traversy media Dom

let val;

val = document;
val = document.all;
val = document.all.length;
val = document.head;
val = document.body;
val = document.domain;
val = document.characterSet;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;

val = document.images;

val = document.scripts;
val = document.scripts[0].getAttribute("src");

// // TURN NODE LIST INTO AN ARRAY

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);
scriptsArr.forEach((script) => {
  // console.log(script.getAttribute("src"));
});

// // console.log(val);

// // DOM SELECTORS
// //document.getElementById()

// // GET THINGS FROM THE ELEMENT
// // console.log(document.getElementById("task-title").id);

// const taskTitle = document.getElementById("task-title");

// // CHANGE STYLING
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";
// // taskTitle.style.display = "none";

// // CHANGE CONTENT
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My tasks";

// // ADD HTML TO CODE

// taskTitle.innerHTML = '<span style="color:red"> Task List </span>';

// // Document.querySelector

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h5"));

// document.querySelector("li").style.color = "red";
// document.querySelector("ul li").style.color = "blue";
// document.querySelector("li:last-child").style.color = "red";

// document.querySelector("li:nth-child(3)").style.color = "yellow";

// // document.getElementsByClassName

// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "Hello";

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");
// console.log(listItems);

// let lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = "red";
// lis[3].textContent = "Hello";

// lis = Array.from(lis);
// lis.reverse();

// lis.forEach((li, index) => {
//   console.log(li.className);
//   li.textContent = `${index} : Hello`;
// });

// console.log(lis);

// document.querySelectorAll

// const items = document.querySelectorAll("ul.collection li.collection-item");

// items.forEach((item, index) => {
//   item.textContent = `${index} : Hello`;
// });

// const liOdd = document.querySelectorAll("li:nth-child(odd)");
// const liEven = document.querySelectorAll("li:nth-child(even)");

// // liOdd.forEach((li, index) => {
// //   li.style.background = "#ccc";
// // });

// for (let i = 0; i <i liOdd.length; i++) {
//   liOdd[i].style.background = "#ccc";
// }

// let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1].nodeName;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
val = list.children[1].textContent = "Hello";
// CHILDREN OF CHILDREN
val = list.children[3].children[0].id = "test-link";
val = list.children[3].children[0];

// FIRST CHILD
val = list.firstChild;
val = list.firstElementChild;

// LAST CHILD
val = list.lastChild;
val = list.lastElementChild;

// COUNT CHILD ELEMENTS
val = list.childElementCount;

// GET PARENT NODE
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// GET NEXT SIBLING
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// GET PREV SIBLING
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// CREATING ELEMENTS
const li = document.createElement("li");

// ADD CLASS
li.className = "collection-item";

// ADD ID
li.id = "new-item";

// ADD ATTRIBUTE
li.setAttribute("title", "New Item");

// CREATE TEXT NODE AND APPEND
li.appendChild(document.createTextNode("Hello world"));

// CREATE NEW LINK ELEMENT
const link = document.createElement("a");
// Add classes
link.className = "delete-item secondary-content";
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// Append into li
li.appendChild(link);

// APPEND LI AS CHILD TO UL
document.querySelector("ul.collection").appendChild(li);

// console.log(li);

// const newH1 = document.createElement("h1");
// newH1.textContent = "Well this is my own creation";
// newH1.className = "my-h1";
// newH1.id = "my-h1-id";
// document.body.appendChild(newH1);
// newH1.style.color = "red";

// console.log(newH1);

// REPLACE ELEMENT

// CREATE ELEMENT
const newHeading = document.createElement("h2");
// Add id
newHeading.id = "task-title";
// New text node
newHeading.appendChild(document.createTextNode("Task List"));

// GET THE OLD HEADING
const oldHeading = document.getElementById("task-title");
// Parent
const cardAction = document.querySelector(".card-action");

// REPLACE
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll("li");
const list2 = document.querySelector("ul");

// REMOVE LIST ITEM
lis[0].remove();
