const changeImg = (bloks) => {

    const imgwrapper = document.querySelectorAll(bloks)

    function fullImg(block) {
        let img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + '-1.png'
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = "none";
        });
    }

    function emptyImg(block) {
        let img = block.querySelector('img');
        img.src = img.src.slice(0, - 6) + '.png'
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = "";
        });
    }

    imgwrapper.forEach(block => {
        block.addEventListener('mouseover', () => {
            fullImg(block);
        });
        block.addEventListener('mouseout', () => {
            emptyImg(block);
        });
    });








}

export default changeImg;