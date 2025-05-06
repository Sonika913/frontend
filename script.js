const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navlinks');

hamburger.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
});

const text = "Hi, I'm miss. S";
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