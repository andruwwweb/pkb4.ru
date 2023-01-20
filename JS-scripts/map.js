//создаем переменные "Карта" и "Метка"
ymaps.ready(init);
let myMap, 
myPlacemark;

//Инициализируем нашу карту, задав ей координаты, устанавливаем масштаб карты
function init(){ 
  myMap = new ymaps.Map("map", {
    center: [55.793019, 37.698780],
    zoom: 16,
  });
  
  //Пишем свойства для нашей метки
  myPlacemark = new ymaps.Placemark([55.793019, 37.698780], {
    hintContent: 'Музей Преображенской больницы',
    balloonContent: './css/images/maplogo.jpg',
  }, {
          // Опции.
          // Необходимо указать данный тип макета. Показываем что это изображение.
          iconLayout: 'default#image',
          // Своё изображение иконки метки. Указываем путь до картинки
          iconImageHref: './css/images/maplogo.jpg',
          // Размеры метки. 
          iconImageSize: [120, 40],
          // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
          iconImageOffset: [0, 0]
        });            
  //Добавляем метку на карту + убираем скролл мышкой 
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('RouteButton');
}