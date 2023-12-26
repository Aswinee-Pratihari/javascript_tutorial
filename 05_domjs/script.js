const title = document.getElementById("title");

console.log(title.getAttribute("id"));
title.setAttribute("class", "test");
console.log(title);
title.style.backgroundColor = "green";
title.style.padding = "20px";
title.style.borderRadius = "30px";

//getting content
console.log(title.innerHTML); // gives content with html tags
/*O/P:- 

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        dicta. <span style="display: none">Test Text</span> */

console.log(title.innerText); //content that will be shown in browser
/*O/P:- 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dicta.  */

console.log(title.textContent); //all content
/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        dicta. Test Text */

const heading = document.querySelector("h1"); // just the first child with the tag

const headings = document.querySelectorAll("h1"); // A nodelist of all elements with h1 tag
// console.log(headings);

const list = document.querySelector("ul");
const turnGreen = list.querySelector("li");
turnGreen.style.backgroundColor = "green";
turnGreen.style.padding = "10px";

const listItems = list.querySelectorAll("li");
console.log(listItems);
listItems[1].innerHTML = "<h1>Hello world</h1>";

const subHeading = document.querySelectorAll("h2");
subHeading.forEach((list) => {
  list.style.color = "pink";
});

const listClass = document.getElementsByClassName("list");
const listArray = Array.from(listClass);
console.log(listArray);
listArray.forEach((list) => {
  list.style.color = "red";
});
