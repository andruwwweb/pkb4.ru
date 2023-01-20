const openImage = document.getElementById('open__image');
const closeImage = document.getElementById('close__image');
const useImage = document.getElementById('usable__image');
const buttonRow = document.getElementById('button__row');
let arrows = document.querySelectorAll('.inner__img');

openImage.addEventListener('click', function(){

    arrows[0].classList.toggle('rotate');
    arrows[1].classList.toggle('rotate');
    arrows[2].classList.toggle('rotate');
    arrows[3].classList.toggle('rotate');
    useImage.classList.toggle('expand');
    buttonRow.classList.toggle('scale');
});
