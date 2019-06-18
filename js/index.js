// Your code goes here

// mouseover, mouseout
const navHover = document.querySelector('nav');
navHover.addEventListener('mouseover', event => {
    event.target.style.color = "purple";});
navHover.addEventListener('mouseout', event => {
    event.target.style.color = "";
});

// right click
const purpleTxt = document.querySelector('p');
purpleTxt.addEventListener('contextmenu', (event) => {
    event.target.style.backgroundColor = 'purple';
});

// double click
const orangeTxt = document.querySelector('h2');
orangeTxt.addEventListener('dblclick', event => {
   event.target.style.color = "orange";
});

// select
const footerP = document.querySelector('footer p');
footerP.addEventListener('select', event => {
    event.target.style.fontStyle = "bold";
    event.preventDefault();
});
footerP.addEventListener('copy', event => {
    event.clipboardData.setData('text/plain',"Secret words!");
    event.preventDefault();
});










