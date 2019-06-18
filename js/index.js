// Your code goes here


const navHover = document.querySelector('nav');
navHover.addEventListener('mouseover', event => {
    event.target.style.color = "purple";
});

navHover.addEventListener('mouseout', event => {
    event.target.style.color = "";
});

const navBorder = document.querySelector('header');
navBorder.addEventListener('dblclick', event => {
    event.target.style.border = "5px dashed red";
});

navBorder.addEventListener('click', event => {
    event.target.style.border = "";
});

const purpleTxt = document.querySelector('p');
purpleTxt.addEventListener('contextmenu', (event) => {
    event.target.style.backgroundColor = 'purple';
});

const orangeTxt = document.querySelector('h2');
orangeTxt.addEventListener('dblclick', event => {
   event.target.style.color = "orange";
});

const footerP = document.querySelector('footer p');
footerP.addEventListener('copy', event => {
    event.clipboardData.setData('text/plain',"Secret words!");
    event.preventDefault();
});

footerP.addEventListener('cut', event => {
    event.clipboardData.setData('text/plain', "Still secret!");
    event.preventDefault();
});

// someday we'll have an input section
const inputTxt = document.querySelector('input');
inputTxt.addEventListener('select', event => {
    event.target.style.fontStyle = "bold";
    event.preventDefault();
});

inputTxt.addEventListener('focus', event => {
    event.target.style.backgroundColor = "pink";
});








