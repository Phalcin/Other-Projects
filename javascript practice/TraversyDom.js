// // Traversy media Dom

// let val;

// val = document;
// val = document.all;
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.domain;
// val = document.characterSet;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;

// val = document.images;

// val = document.scripts;
// val = document.scripts[0].getAttribute("src");

// // Turn node list into an Array

// // let scripts = document.scripts;
// // let scriptsArr = Array.from(scripts);
// // scriptsArr.forEach((script) => {
// //   console.log(script.getAttribute("src"));
// // });

// // console.log(val);

// // DOM SELECTORS
// //document.getElementById()

// // Get things from the element
// // console.log(document.getElementById("task-title").id);

// const taskTitle = document.getElementById("task-title");

// // Change styling
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";
// // taskTitle.style.display = "none";

// // Change content
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My tasks";

// // Add HTML to code

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

let lis = document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0]);
lis[0].style.color = "red";
lis[3].textContent = "Hello";

lis = Array.from(lis);
lis.reverse();

lis.forEach((li, index) => {
  console.log(li.className);
  li.textContent = `${index} : Hello`;
});

console.log(lis);
