function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px'; // так как он пустой то скрол будет 
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
}


const modals = ((selectorOpen, selectorModal, selectorClose) => {

    const openModalBtn = document.querySelectorAll(selectorOpen),
        modal = document.querySelector(selectorModal),
        closeModalBtn = document.querySelectorAll(selectorClose),
        scroll = calcScroll();

    function openModal() {
        modal.style.display = "block";
        document.body.style.marginRight = `${scroll}px`;
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.marginRight = `0px`;
        document.body.style.overflow = '';
    }

    openModalBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.tagName !== ('BUTTON')) {
                item.remove();
            }
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


});

export default modals;