
const filterImg = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');

    menu.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.tagName == "LI") {

            markAll.forEach(mark => {
                mark.style.display = 'none';
                mark.classList.remove('animated', 'fadeIn');
            });

            no.style.display = "none";
            no.classList.remove('animated', 'fadeIn');

            let activeBtnClass = target.classList.value;

            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');

            markAll.forEach(mark => {
                if (mark.classList.contains(activeBtnClass)) {//так как у таба и картинок есть одинаковый класс 
                    mark.style.display = 'block';
                    mark.classList.add('animated', 'fadeIn');

                } else if (activeBtnClass == 'grandmother' || activeBtnClass == 'granddad') {
                    no.style.display = 'block';
                    no.classList.add('fadeIn');
                }
            });

        }
    });
};

export default filterImg;