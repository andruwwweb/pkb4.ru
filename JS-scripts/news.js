const openNews = document.getElementById('openNews');
const allNews = document.getElementById('allNews');
const closeNews = document.getElementById('closeNews');

openNews.addEventListener('click', function() {
    allNews.classList.add('opened');
    openNews.classList.add('away');
});
closeNews.addEventListener('click', function ()  {
    allNews.classList.remove('opened');
    openNews.classList.remove('away');
});