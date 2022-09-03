function pricesSwiperInit() {
    new Swiper('.price-list', {
        direction: 'horizontal',
        clickable: true,
        spaceBetween: 20,
        slidesPerView: 1,
        slidesPerGroup: 1,
        
        width: 260,
        height: 200,

        pagination: {
          el: '.price-list__pagination',
        },
        observer: true,
    });
}

export {pricesSwiperInit}