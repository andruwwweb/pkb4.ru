const openImage = document.getElementById('open__image');
const useImage = document.getElementById('usable__image');
const buttonRow = document.getElementById('button__row');
const arrows = document.querySelectorAll('.inner__img');

openImage.addEventListener('click', function(){
    arrows.forEach((item) => {
        item.classList.toggle('rotate');
    })
    useImage.classList.toggle('expand');
    buttonRow.classList.toggle('scale');
});
