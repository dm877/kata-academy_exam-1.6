function typesSwiperInit() {
    new Swiper('.type-list', {
        direction: 'horizontal',
        clickable: true,
        spaceBetween: 20,
        slidesPerView: 1,
        slidesPerGroup: 1,
        
        width: 224,
        height: 160,

        pagination: {
          el: '.type-list__pagination',
        },
        observer: true,
    });
}

export {typesSwiperInit}