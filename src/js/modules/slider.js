const slider = (selectorSlide, dir, prev, next) => {
    const slides = document.querySelectorAll(selectorSlide);
    let slideIndex = 1,
        paused = false;

    function showSlide() {
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(item => {
            item.classList.add("animated");
            item.style.display = "none";
        });

        slides[slideIndex - 1].style.display = 'block';
    }

    function changeSlide(n) {
        showSlide(slideIndex += n);
    }

    showSlide();

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            changeSlide(-1);
            slides[slideIndex - 1].classList.remove('slideInLeft');
            slides[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            changeSlide(1);
            slides[slideIndex - 1].classList.remove('slideInRight');
            slides[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch (error) { };

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(function () {
                changeSlide(1);
                slides[slideIndex - 1].classList.add('slideInUp');
            }, 3000);
        } else {
            paused = setInterval(function () {
                changeSlide(1);
                slides[slideIndex - 1].classList.remove('slideInRight');
                slides[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }
    activateAnimation();

    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    slides[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });





}

export default slider;