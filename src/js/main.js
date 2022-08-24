import forms from "./modules/forms";
import modals from "./modules/modal";
import slider from "./modules/slider";



document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals('.button-design', '.popup-design', '.popup-close');
    modals('.button-consultation', '.popup-consultation', '.popup-close');
    modals('.fixed-gift', '.popup-gift', '.popup-close', true);
    slider('.main-slider-item', 'vertical');
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    forms();

});
