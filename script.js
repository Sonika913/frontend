const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navlinks');

hamburger.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
});

const text = "Hi, I'm Miss. S|";
const hii = document.getElementById('hii');
let index = 0;

function type() {
    if(index < text.length){
        hii.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150);
    }
}
type();

const projects = [
    {
     image: "image/flower.jpg",
     title: "Animated Navbar",
     description: "A responsive navigation bar with smooth animations and toogle functionality. ",
     src: " https://sonika913.github.io/bmi-calculator/",
    },
    {
     image: "image/fl.jpg ",
     title: "Landing Page ",
     description: "A clean and simple landing page using HTML, CSS and basic JS.",
    src: " https://sonika913.github.io/bmi-calculator/",
    },
    {
     image: "image/pexels-aliye-2151376458-31673403.jpg",
     title: "CSS",
     description: "CSS describes how HTML elements are to be displayed on screen, paper, or in other media CSS saves a lot of work.",
     src: " https://sonika913.github.io/bmi-calculator/",
    },
];

const container = document.getElementById("project-container");
   
    projects.forEach(project => {
        const card = document.createElement("div");
        card.classNAme = "card";
        card.innerHTML = `
          <img src="${project.image}" alt="${project.title}" \>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.src}">view project</a>
        `;
        container.appendChild(card);
    });