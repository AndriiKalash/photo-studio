const accordion = (selectorTriger, selectorBlocks) => {

    const trigers = document.querySelectorAll(selectorTriger),
        blocks = document.querySelectorAll(selectorBlocks);

    trigers.forEach(triger => {
        triger.addEventListener('click', function () {
            if (!this.classList.contains('active')) {
                trigers.forEach(triger => {
                    triger.classList.remove('active');
                    triger.nextElementSibling.classList.remove('block-active');
                    triger.nextElementSibling.style.maxHeight = '0px';
                });
                this.classList.add('active');
                this.nextElementSibling.classList.add('block-active');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';

            } else {
                this.classList.remove('active');
                this.nextElementSibling.classList.remove('block-active');
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // trigers.forEach(triger => {
    //     triger.addEventListener('click', () => {
    //         if (!triger.classList.contains('active')) {
    //             trigers.forEach(triger => {
    //                 triger.classList.remove('active');
    //                 // triger.nextElementSibling.style.display = 'none' (задал в стилях)
    //             });
    //             triger.classList.add('active');
    //             // triger.nextElementSibling.style.display = "block";
    //         }
    //     });
    // });

}


export default accordion;