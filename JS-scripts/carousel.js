$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:100,
        nav:true,
        items:3,
        navText: [
            '<img src="./css/images/prev-arrow.svg" alt="Назад">',
            '<img src="./css/images/next-arrow.svg" alt="Вперед">'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1440: {
                items: 3
            }

        },
        
    });
  });
