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
                    console.log(sizePrice);
                    break;
                case '50x70':
                    sizePrice = responce[0]["50x70"];
                    console.log(sizePrice);
                    break;
                case '70x70':
                    sizePrice = responce[0]["70x70"];
                    console.log(sizePrice);
                    break;
            };
        }
    }

    function valueMaterial(e, responce) {
        if (e.target && e.target.matches('#material')) {
            switch (material.value) {
                case 'Холст из волокна':
                    materialPrice = responce[1]["Холст из волокна"];
                    console.log(materialPrice);
                    break;
                case 'Льняной холст':
                    materialPrice = responce[1]["Льняной холст"];
                    console.log(materialPrice);
                    break;
                case 'Холст из натурального хлопка':
                    materialPrice = responce[1]["Холст из натурального хлопка"];
                    console.log(materialPrice);
                    break;
            };
        }
    }

    function valueOptions(e, responce) {
        if (e.target && e.target.matches('#options')) {
            switch (options.value) {
                case 'Покрытие арт-гелем':
                    optionsPrice = responce[2]["Покрытие арт-гелем"];
                    console.log(optionsPrice);
                    break;
                case 'Экспресс-изготовление':
                    optionsPrice = responce[2]["Экспресс-изготовление"];
                    console.log(optionsPrice);
                    break;
                case 'Доставка готовых работ':
                    optionsPrice = responce[2]["Доставка готовых работ"];
                    break;
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

