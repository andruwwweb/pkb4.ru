const slider = document.querySelector('#mainslider');
const sliderItems = Array.from(slider.children);
const buttonNext = document.querySelector('#next');
const buttonPrev = document.querySelector('#prev');


sliderItems.forEach ((slide, index) => {
    console.log(slide);

    if (index !== 0) {
        slide.classList.add('hidden');
    }
    // Добавляем индексы
    slide.dataset.index = index;

    // Добавляем data атрибут активному слайду
    sliderItems[0].setAttribute('data-active', '');

    // Слушаем клик по слайдам
    slide.addEventListener('click', () => {

        // Скрываем текущий слайд
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');

        // Рассчитываем индекс следующего слайда
        const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

        // Находим следующий элемент
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        // Показываем следующий слайд
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
    })
});

buttonNext.onclick = () => {
    // Скроем текущий слайд
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Показываем следующий слайд
    const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}

buttonPrev.onclick = () => {
    // Скроем текущий слайд
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Показываем следующий слайд
    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}