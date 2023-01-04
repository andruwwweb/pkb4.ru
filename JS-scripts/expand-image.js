const openImage = document.getElementById('open__image');
const closeImage = document.getElementById('close__image');
const useImage = document.getElementById('usable__image');
const buttonRow = document.getElementById('button__row');
const rotateArrow1 = document.getElementById('inner__img1');
const rotateArrow2 = document.getElementById('inner__img2');
const rotateArrow3 = document.getElementById('inner__img3');
const rotateArrow4 = document.getElementById('inner__img4');

openImage.addEventListener('click', function(){
    // useImage.classList.toggle('expand');
    // buttonRow.classList.toggle('scale');
    rotateArrow1.classList.toggle('rotate');
    rotateArrow2.classList.toggle('rotate');
    rotateArrow3.classList.toggle('rotate');
    rotateArrow4.classList.toggle('rotate');
});
openImage.addEventListener('click', function(){
    useImage.classList.toggle('expand');
    buttonRow.classList.toggle('scale');
});