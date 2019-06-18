// Your code goes here

// mouseover, mouseout
const navHover = document.querySelector('nav');
navHover.addEventListener('mouseover', event => {
    event.target.style.color = "purple";});
navHover.addEventListener('mouseout', event => {
    event.target.style.color = "";
});

// keydown
const pressKey = document.querySelector('logo-heading');
pressKey.addEventListener('keypress', event => {
   
});


