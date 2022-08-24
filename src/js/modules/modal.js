function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px'; // так как он пустой то скрол будет (у дива свой скрол)
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
}


let btnPressed = false; // значит не была нажaта ни одна кнопка на странице

const modals = ((selectorOpen, selectorModal, selectorClose, destroy = false) => {

    const openModalBtn = document.querySelectorAll(selectorOpen),
        modal = document.querySelector(selectorModal),
        closeModalBtn = document.querySelectorAll(selectorClose),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll(),
        giftTrigger = document.querySelector('.fixed-gift');

    function openModal() {
        windows.forEach(item => {
            item.style.display = 'none';
            item.classList.add('animated', 'fadeIn');
        });
        modal.style.display = "block";
        document.body.style.marginRight = `${scroll}px`;
        document.body.style.overflow = "hidden";
        giftTrigger.style.marginRight = `${scroll}px`;
    }

    function closeModal() {
        windows.forEach(item => {
            item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.marginRight = `0px`;
        document.body.style.overflow = '';
        giftTrigger.style.marginRight = ``;
    }

    //  (по условию не будет срабатывать тoлько если какое то окно display )
    function showModalByTime(selector, time) {
        setTimeout(function () {
            let anyModal;
            document.querySelectorAll('[data-modal]').forEach(item => {
                if (item.style.display === 'block') {
                    anyModal = 'block';
                }
            });
            if (!anyModal) {
                openModal();
            }
        }, time);
    }

    // showModalByTime('.popup-design', 4000);

    openModalBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.tagName) {
                e.preventDefault();
            }
            if (destroy) {
                item.remove();        //для удаления подaрка при клике
            }
            btnPressed = true;
            openModal();
        });
    });

    closeModalBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            closeModal();
        });
    });

    modal.addEventListener('click', (e) => {
        const target = e.target;
        if (target == modal) {
            closeModal();
        }
    });

    // scroll 
    function openModallScroll() {
        if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >=
            (document.documentElement.scrollHeight - 1)) {
            openModal();//ф-ция делaет none всем у кого есть data, но у '.popup-gift'нет data.
            window.removeEventListener('scroll', openModallScroll);
        }
    }

    window.addEventListener('scroll', openModallScroll);




});



export default modals;