const forms = () => {

    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    const message = {
        loading: "Загрузка...",
        success: "Спасибо мы с вами свяжемся",
        failuere: "Что-то пошло не так...",
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'

    };

    //в зависимости от формы отправляю данные на разные сервера
    const path = {
        designer: 'assets/server.php',// для формы с классом popup-design
        question: 'assets/question.php'//popup-consultation
    }

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };


    const clearInputs = () => {
        inputs.forEach(element => {
            element.value = '';
        });
    }

    form.forEach(element => {
        element.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMasage = document.createElement('div');
            statusMasage.classList.add("status");
            // картинка загрузки помещаем в родитель самой формы
            element.parentNode.appendChild(statusMasage);

            //скрываю форму(чтоб осталоaсь тоько каринка оповещения)
            element.classList.add('animated', 'fadeOutUp');// класы из animate.css для прозрачности формы 
            setTimeout(() => { //удаляю форму
                element.style.display = 'none';
            }, 4000);
            //добавляю картинку загрузки 
            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMasage.appendChild(statusImg);

            // добавляю текст к картинке
            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMasage.appendChild(textMessage);

            const formData = new FormData(element);//собрал все данные
            let api;
            element.closest('.popup-design') ? api = path.designer : api = path.question;

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failuere;
                })
                .finally(() => {
                    clearInputs();
                    setInterval(() => {
                        statusMasage.remove();
                    }, 5000);
                })


        });
    });
};


export default forms;