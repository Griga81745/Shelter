const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 80,
    slideToClickedSlide:false,
    mousewheel: false,
    loop: false,
    slidesPerView: 3,

    // Navigation arrows
    navigation: {
        nextEl: '.slider_row-right',
        prevEl: '.slider_row-left',
    },
});
