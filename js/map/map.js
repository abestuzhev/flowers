



ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map_inf', {
            center: [60.0219,30.3751],
            zoom: 9
        }),

        complex = new ymaps.Placemark([60.1768,30.1026], {
            balloonContent: 'ЖК Цветы'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/infrastructure/marker-complex.png',
            iconImageSize: [49, 60],
            iconImageOffset: [-15, -27],
        }),

        store = new ymaps.Placemark([60.1468,30.0826], {
            balloonContent: 'Больница'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/infrastructure/icon-1.png',
            iconImageSize: [41, 41],
            iconImageOffset: [-15, -27],
        }),

        sport = new ymaps.Placemark([60.1488,30.0846], {
            balloonContent: 'Детский сад'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/infrastructure/icon-2.png',
            iconImageSize: [41, 41],
            iconImageOffset: [-26, -46]
        }),

        hospital = new ymaps.Placemark([60.1498,30.0856], {
            balloonContent: 'Аптека'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/infrastructure/icon-4.png',
            iconImageSize: [41, 41],
            iconImageOffset: [-35, -63]
        });

    myMap.geoObjects.add(store)
        .add(sport)
        .add(complex)
        .add(hospital);
}
