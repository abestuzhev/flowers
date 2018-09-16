



ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('infrastructure2', {
            center: [55.95, 32.44],
            zoom: 2
        }),

        store = new ymaps.Placemark([55.85, 60.64], {
            balloonContent: 'Маленькая иконка'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/icon-1.png',
            iconImageSize: [41, 41],
            iconImageOffset: [-15, -27],
        }),

        sport = new ymaps.Placemark([55.85, 32.64], {
            balloonContent: 'Средняя иконка'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[34,0], [62, 46]],
            iconImageHref: 'images/sprite.png',
            iconImageSize: [26, 46],
            iconImageOffset: [-26, -46]
        }),

        hospital = new ymaps.Placemark([55.85, 1.0], {
            balloonContent: 'Большая иконка'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'images/sprite.png',
            iconImageSize: [35, 63],
            iconImageOffset: [-35, -63]
        });

    myMap.geoObjects.add(store)
        .add(sport)
        .add(hospital);
}
