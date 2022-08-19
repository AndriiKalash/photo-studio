import modals from "./modules/modal";


document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals('.button-design', '.popup-design', '.popup-close');
    modals('.button-consultation', '.popup-consultation', '.popup-close');
    modals('.fixed-gift', '.popup-gift', '.popup-close');
});
