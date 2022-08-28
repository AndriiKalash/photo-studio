import { getResource } from '../services/requests'

const showStyles = (trigerSelector, wrapper) => {

    const btn = document.querySelector(trigerSelector);

    btn.addEventListener('click', function () {
        // getResource('http://localhost:3000/styles') c использованием сервера json-server
        getResource('assets/db.json')// напрямую из файла, тогда ниже из ответа указать надо .styles(название массива в db.json)
            .then(res => createCard(res.styles))
            .catch(error => console.log('error'))
            .finally(() => {
                this.remove();
            });

    });

    function createCard(responce) {
        responce.forEach(({ src, title, link }) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `
            document.querySelector(wrapper).appendChild(card);
        });
    }
}

export default showStyles;