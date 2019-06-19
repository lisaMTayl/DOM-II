// Your code goes here
const navEffects = document.querySelector('nav');
navEffects.addEventListener('mouseover', event => {
    event.target.style.color = "purple";
});

navEffects.addEventListener('mouseout', event => {
    event.target.style.color = "";
});

// navEffects.addEventListener('click', event => {
//     event.preventDefault();
// });

const navBorder = document.querySelector('header');
navBorder.addEventListener('dblclick', event => {
    event.target.style.border = "5px dashed red";
});
navBorder.addEventListener('click', event => {
    event.target.style.border = "";
});

const bodyTag = document.querySelector('body');
bodyTag.addEventListener('dblclick', event => {
    event.target.style.backgroundColor = "yellow";
});
bodyTag.addEventListener('click', event => {
    event.target.style.backgroundColor = "";
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





