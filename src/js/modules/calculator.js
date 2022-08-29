import { getResource } from '../services/requests'

const calculator = () => {

    const calcForm = document.querySelector('.calc_form'),
        allSelects = calcForm.querySelectorAll('select'),
        size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        finalPriceBlock = document.querySelector('.calc-price');


    let sizePrice, materialPrice, optionsPrice;

    allSelects.forEach(select => {
        select.addEventListener('change', (e) => {

            getResource('assets/db.json')
                .then(res => {
                    valueSize(e, res.calcForm);
                    valueMaterial(e, res.calcForm);
                    valueOptions(e, res.calcForm);
                    calcResalt();
                })
                .catch(error => console.log('error'))
                .finally(() => {
                });
        });
    });

    promocode.addEventListener('input', calcResalt);

    function valueSize(e, responce) {
        if (e.target && e.target.matches('#size')) {
            switch (size.value) {
                case '40x50':
                    sizePrice = responce[0]["40x50"];
                    break;
                case '50x70':
                    sizePrice = responce[0]["50x70"];
                    break;
                case '70x70':
                    sizePrice = responce[0]["70x70"];
                    break;
                default: sizePrice = false;
                    break
            };
        }
    }

    function valueMaterial(e, responce) {
        if (e.target && e.target.matches('#material')) {
            switch (material.value) {
                case 'Холст из волокна':
                    materialPrice = responce[1]["Холст из волокна"];
                    break;
                case 'Льняной холст':
                    materialPrice = responce[1]["Льняной холст"];
                    break;
                case 'Холст из натурального хлопка':
                    materialPrice = responce[1]["Холст из натурального хлопка"];
                    break;
                default: materialPrice = false;
                    break
            };
        }
    }

    function valueOptions(e, responce) {
        if (e.target && e.target.matches('#options')) {
            switch (options.value) {
                case 'Покрытие арт-гелем':
                    optionsPrice = responce[2]["Покрытие арт-гелем"];
                    break;
                case 'Экспресс-изготовление':
                    optionsPrice = responce[2]["Экспресс-изготовление"];
                    break;
                case 'Доставка готовых работ':
                    optionsPrice = responce[2]["Доставка готовых работ"];
                    break;
                default: optionsPrice = false;
                    break
            };
        }
    }

    function calcResalt() {

        let resalt = sizePrice + materialPrice;

        if (!sizePrice || !materialPrice) {
            finalPriceBlock.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        } else {
            if (!optionsPrice) {
                if (promocode.value === 'IWANTPOPART ') {
                    finalPriceBlock.textContent = resalt - (resalt / 100 * 30);
                } else {
                    finalPriceBlock.textContent = resalt;
                }
            } else {
                if (promocode.value === 'IWANTPOPART ') {
                    finalPriceBlock.textContent = (resalt + optionsPrice) - ((resalt + optionsPrice) / 100 * 30);
                } else {
                    finalPriceBlock.textContent = resalt + optionsPrice;
                }
            }
        }
    }
};

export default calculator;

