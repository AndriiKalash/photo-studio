/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");



document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  alert('hello');
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('.button-design', '.popup-design', '.popup-close');
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('.button-consultation', '.popup-consultation', '.popup-close');
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('.fixed-gift', '.popup-gift', '.popup-close', true);
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])('.main-slider-item', 'vertical');
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const forms = () => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]');
  const message = {
    loading: "????????????????...",
    success: "?????????????? ???? ?? ???????? ????????????????",
    failuere: "??????-???? ?????????? ???? ??????...",
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  }; //?? ?????????????????????? ???? ?????????? ?????????????????? ???????????? ???? ???????????? ??????????????

  const path = {
    designer: 'assets/server.php',
    // ?????? ?????????? ?? ?????????????? popup-design
    question: 'assets/question.php' //popup-consultation

  };

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
    upload.forEach(element => {
      element.previousElementSibling.text = "???????? ???? ????????????";
    });
  };

  upload.forEach(element => {
    element.addEventListener('input', () => {
      console.log(element.files[0]);
      let dots;
      const arr = element.files[0].name.split('.');
      arr[0].length > 6 ? dots = "..." : dots = ".";
      const name = arr[0].substring(0, 6) + dots + arr[1];
      element.previousElementSibling.textContent = name;
    });
  });
  form.forEach(element => {
    element.addEventListener('submit', e => {
      e.preventDefault();
      let statusMasage = document.createElement('div');
      statusMasage.classList.add("status"); // div ?? ?????????????????? ???????????????? ???????????????? ?? ???????????????? ?????????? ??????????

      element.parentNode.appendChild(statusMasage); //?????????????? ??????????(???????? ????????????a???? ?????????? ?????????????? ????????????????????)

      element.classList.add('animated', 'fadeOutUp'); // ?????????? ???? animate.css ?????? ???????????????????????? ?????????? 

      setTimeout(() => {
        //???????????? ??????????
        element.style.display = 'none';
      }, 4000); //???????????????? ???????????????? ???????????????? 

      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMasage.appendChild(statusImg); // ???????????????? ?????????? ?? ????????????????

      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMasage.appendChild(textMessage);
      const formData = new FormData(element); //???????????? ?????? ????????????

      let api;
      element.closest('.popup-design') || element.classList.contains('calc_form') ? api = path.designer : api = path.question;
      postData(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failuere;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMasage.remove();
          element.style.display = 'block';
          element.classList.add('fadeOutUp');
          element.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calcScroll() {
  let div = document.createElement('div');
  div.style.width = '50px'; // ?????? ?????? ???? ???????????? ???? ?????????? ?????????? (?? ???????? ???????? ??????????)

  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

let btnPressed = false; // ???????????? ???? ???????? ??????a???? ???? ???????? ???????????? ???? ????????????????

const modals = function (selectorOpen, selectorModal, selectorClose) {
  let destroy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
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
  } //  (???? ?????????????? ???? ?????????? ?????????????????????? ??o???????? ???????? ?????????? ???? ???????? display )


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
  } // showModalByTime('.popup-design', 4000);


  openModalBtn.forEach(item => {
    item.addEventListener('click', e => {
      if (e.tagName) {
        e.preventDefault();
      }

      if (destroy) {
        item.remove(); //?????? ???????????????? ??????a?????? ?????? ??????????
      }

      btnPressed = true;
      openModal();
    });
  });
  closeModalBtn.forEach(item => {
    item.addEventListener('click', e => {
      closeModal();
    });
  });
  modal.addEventListener('click', e => {
    const target = e.target;

    if (target == modal) {
      closeModal();
    }
  }); // scroll 

  function openModallScroll() {
    if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal(); //??-?????? ??????a???? none ???????? ?? ???????? ???????? data, ???? ?? '.popup-gift'?????? data.

      window.removeEventListener('scroll', openModallScroll);
    }
  }

  window.addEventListener('scroll', openModallScroll);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  } catch (error) {}

  ;

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
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map