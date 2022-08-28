import calculator from "./modules/calculator";
import forms from "./modules/forms";
import mask from "./modules/mask";
import modals from "./modules/modal";
import showStyles from "./modules/showStyles";
import slider from "./modules/slider";



document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals('.button-design', '.popup-design', '.popup-close');
    modals('.button-consultation', '.popup-consultation', '.popup-close');
    modals('.fixed-gift', '.popup-gift', '.popup-close', true);
    slider('.main-slider-item', 'vertical');
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    forms();
    mask('[name="phone"]');
    showStyles('.button-styles', '#styles .row');
    calculator();



});
