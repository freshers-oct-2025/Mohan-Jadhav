

function changetext() {
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Jee"

}

// addEventListener
let fpara = document.getElementById('fpara');

fpara.addEventListener('click', changetext);

//removeEventListener
fpara.removeEventListener('click', changetext);
/* ---------------------------------------------------------- */
function bgcolourchange() {
    fpara.style.background = 'red';
}

fpara.addEventListener('dblclick',bgcolourchange)
fpara.addEventListener('mouseover',bgcolourchange)
fpara.addEventListener('mouseout',bgcolourchange)
fpara.addEventListener('scroll',bgcolourchange) 