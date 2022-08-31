const burger = (selectorBurger, selectorMenu) => {

    const burger = document.querySelector(selectorBurger),
        menu = document.querySelector(selectorMenu);

    menu.style.display = 'none';

    burger.addEventListener('click', () => {
        if (menu.style.display == "none" && window.screen.availWidth < 993) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
    //  событие отслеживает изменения экрана 
    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menu.style.display = 'none';
        }
    });

}

export default burger;