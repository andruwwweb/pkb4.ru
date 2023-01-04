const openModal = document.getElementById('open__modal');
const closeModal = document.getElementById('close__modal');
const modalWindow = document.getElementById('modal');
//*******************************************************//
const openModalHistory = document.getElementById('open__modal-history');
const closeModalHistory = document.getElementById('close__modal-history');
const modalWindowHistory = document.getElementById('modal-history');
//**********************************************************************//
const openModalAbout = document.getElementById('open__modal-about');
const closeModalAbout = document.getElementById('close__modal-about');
const modalWindowAbout = document.getElementById('modal-about');
//******************************************************************//

openModal.addEventListener('click', function(e){
    e.preventDefault();
    modalWindowAbout.classList.remove('active');
    modalWindowHistory.classList.remove('active');
    modalWindow.classList.toggle('active');
});
closeModal.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    modalWindow.classList.remove('active');
});
//********************************************************//

openModalHistory.addEventListener('click', function(e){
    e.preventDefault();
    modalWindowAbout.classList.remove('active');
    modalWindow.classList.remove('active');
    modalWindowHistory.classList.toggle('active');
});
closeModalHistory.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    modalWindowHistory.classList.remove('active');
});
//********************************************************//

openModalAbout.addEventListener('click', function(e){
    e.preventDefault();
    modalWindowHistory.classList.remove('active');
    modalWindow.classList.remove('active');
    modalWindowAbout.classList.toggle('active');
});
closeModalAbout.addEventListener('mouseleave', () => {
    modalWindowAbout.classList.remove('active');
});

//****************************************************************************//


// Меню для мобильной версии
const menu = document.querySelector('#burger');
const openMenu = document.querySelector('#burger-menu');
const closeBurger = document.querySelector('#closeBurger');

burger.addEventListener('click', () => {
    openMenu.classList.add('visible');
});
closeBurger.addEventListener('click', () => {
    openMenu.classList.remove('visible');
});

const openCollections = document.querySelector('#collections');
const collectionsMenu = document.querySelector('#coll-inn');
const openHistory = document.querySelector('#history');
const historyMenu = document.querySelector('#hist-inn');
const openAbout = document.querySelector('#aboutus');
const aboutMenu = document.querySelector('#about-inn');

openCollections.addEventListener('click', () => {
    collectionsMenu.classList.toggle('visible');
    historyMenu.classList.remove('visible');
    aboutMenu.classList.remove('visible');
});
openHistory.addEventListener('click', () => {
    historyMenu.classList.toggle('visible');
    collectionsMenu.classList.remove('visible');
    aboutMenu.classList.remove('visible');
});
openAbout.addEventListener('click', () => {
    aboutMenu.classList.toggle('visible');
    collectionsMenu.classList.remove('visible');
    historyMenu.classList.remove('visible');
});


const headerSearch = document.querySelector('.header-form');
const showSearch = document.querySelector('.header-search-show-string');
const hideSearch = document.querySelector('.close-search');
const headerItem = document.querySelector('.header__item');
const headerLang = document.querySelector('.header-lang');

showSearch.addEventListener('click', () => {
    headerSearch.classList.add('show');
    headerItem.classList.add('none');
    headerLang.classList.add('none');
});
hideSearch.addEventListener('click', () => {
    headerSearch.classList.remove('show');
    headerItem.classList.remove('none');
    headerLang.classList.remove('none');
});



const openForm = document.getElementById('footer-button-mobile');
const footerForm = document.getElementById('footer-modal');
const closeForm = document.getElementById('close__footer-modal');

openForm.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('hello')
    footerForm.classList.add('increased');
});
closeForm.addEventListener('click', (e) => {
    e.preventDefault();
    footerForm.classList.remove('increased');
});