import Swiper, { Navigation, Pagination } from 'swiper';

const burger = document.querySelector('.js-burger');
const menu = document.querySelector('.js-menu');
const body = document.querySelector('body');

export const burgerButton = () => {
    let menuOpen = false;

    if(burger) {
        burger.addEventListener('click', (event) => {
            event.preventDefault();

            if(!menuOpen) {
                burger.classList.add('header__burger_active');
                menu.classList.add('header__center_active');
                body.classList.add('body_lock');
                menuOpen = true;
            } else {
                burger.classList.remove('header__burger_active');
                menu.classList.remove('header__center_active');
                body.classList.remove('body_lock');
                menuOpen = false;
            }
        })
    }
}

export const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    effect: "flip",
    grabCursor: true,  
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 1000,
        stopOnLastSlide: true,
    }
});
