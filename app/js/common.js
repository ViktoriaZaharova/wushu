$("body").on("click", ".btn-scroll-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
        $('.mobile-menu').fadeOut();
    }
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.btn-scroll-top').fadeIn();
    } else {
        $('.btn-scroll-top').fadeOut();
    }
});


$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});


$('.tabs-click').click(function () {
    $('.tabs-click, .tabs-click-content').not(this).removeClass('active');
    $(this).addClass('active').next().addClass('active');
});

// accordeon
$('.panel_heading .block_title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
});


$('.btn-burger').click(function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
});

$('.reviews-wrapper').slick({
    slidesToShow: 5,
    variableWidth: true,
    dots: true,
    appendArrows: '.reviews-wrapper__nav',
    appendDots: '.reviews-wrapper__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.video-wrapper').slick({
    slidesToShow: 5,
    variableWidth: true,
    dots: true,
    infinite: true,
    appendArrows: '.video-wrapper__nav',
    appendDots: '.video-wrapper__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.awards-wrapper').slick({
    slidesToShow: 5,
    variableWidth: true,
    dots: true,
    infinite: true,
    appendArrows: '.awards-wrapper__nav',
    appendDots: '.awards-wrapper__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.gallery-slider1').slick({
    slidesToShow: 4,
    variableWidth: true,
    dots: true,
    infinite: true,
    appendArrows: '.gallery-slider1__nav',
    appendDots: '.gallery-slider1__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.gallery-slider2').slick({
    slidesToShow: 4,
    variableWidth: true,
    dots: true,
    infinite: true,
    appendArrows: '.gallery-slider2__nav',
    appendDots: '.gallery-slider2__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.gallery-slider3').slick({
    slidesToShow: 4,
    variableWidth: true,
    dots: true,
    infinite: true,
    appendArrows: '.gallery-slider3__nav',
    appendDots: '.gallery-slider3__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.about-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    dots: true,
    infinite: true,
    appendArrows: '.about-slider__nav',
    appendDots: '.about-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
})

$("[name='phone']").mask("+7 (999) 999-99-99");


// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay, .btn-close-modal');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$(".form").submit(function () {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");

        $('.modal__div').css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        });

        $('#thanks__modal').css('display', 'flex')
            .animate({
                opacity: 1,
                top: '50%'
            }, 200);


        $(".form").trigger("reset");
    });
    return false;
});

// Инициализация карты
ymaps.ready(init);

function init() {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [55.057245, 82.920461],
        zoom: 14
    });

    // Создание своей метки
    var myPlacemark1 = new ymaps.Placemark(
        // Координаты метки
        [55.057245, 82.920461], {
            // Свойства метки
            hintContent: 'Молодёжный центр \n' +
                '«Содружество»\n' +
                'ул. Кропоткина 119/3', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/loc.svg',  // картинка иконки
            iconImageSize: [30, 30],                                      // размеры картинки
            iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark2 = new ymaps.Placemark(
        // Координаты метки
        [55.048422, 82.963458], {
            // Свойства метки
            hintContent: 'Школа № 82\n' +
                'ул. Гоголя 195', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/loc.svg',  // картинка иконки
            iconImageSize: [30, 30],                                      // размеры картинки
            iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark3 = new ymaps.Placemark(
        // Координаты метки
        [55.049488, 82.918780], {
            // Свойства метки
            hintContent: 'СК «Sport Kasta»\n' +
                'улица Мичурина 37', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/loc.svg',  // картинка иконки
            iconImageSize: [30, 30],                                      // размеры картинки
            iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark4 = new ymaps.Placemark(
        // Координаты метки
        [55.059044, 82.936168], {
            // Свойства метки
            hintContent: 'Ул Кропоткина 273\n' +
                'офис 303', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/loc.svg',  // картинка иконки
            iconImageSize: [30, 30],                                      // размеры картинки
            iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}