// Your code goes here

// mouseover, mouseout
const navHover = document.querySelector('nav');
navHover.addEventListener('mouseover', event => {
    event.target.style.color = "purple";});
navHover.addEventListener('mouseout', event => {
    event.target.style.color = "";
});

// double click
const purpleTxt = document.querySelector('h2');
purpleTxt.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'purple';
});






