// Your code goes here

const navHover = document.querySelector('nav');
navHover.addEventListener('mouseover', event => {
    event.target.style.color = "purple";});
navHover.addEventListener('mouseout', event => {
    event.target.style.color = "";
});


