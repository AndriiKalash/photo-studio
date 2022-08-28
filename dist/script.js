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
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_showStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/showStyles */ "./src/js/modules/showStyles.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");






document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('.button-design', '.popup-design', '.popup-close');
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('.button-consultation', '.popup-consultation', '.popup-close');
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('.fixed-gift', '.popup-gift', '.popup-close', true);
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])('.main-slider-item', 'vertical');
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_2__["default"])('[name="phone"]');
  Object(_modules_showStyles__WEBPACK_IMPORTED_MODULE_4__["default"])('.button-styles', '#styles .row');
  Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const calculator = () => {
  const calcForm = document.querySelector('.calc_form'),
        allSelects = calcForm.querySelectorAll('select'),
        size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        finalPriceBlock = document.querySelector('.calc-price');
  let sizePrice, materialPrice, optionsPrice;
  allSelects.forEach(select => {
    select.addEventListener('change', e => {
      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResource"])('assets/db.json').then(res => {
        valueSize(e, res.calcForm);
        valueMaterial(e, res.calcForm);
        valueOptions(e, res.calcForm);
        calcResalt();
      }).catch(error => console.log('error')).finally(() => {});
    });
  });
  promocode.addEventListener('input', calcResalt);

  function valueSize(e, responce) {
    if (e.target && e.target.matches('#size')) {
      switch (size.value) {
        case '40x50':
          sizePrice = responce[0]["40x50"];
          console.log(sizePrice);
          break;

        case '50x70':
          sizePrice = responce[0]["50x70"];
          console.log(sizePrice);
          break;

        case '70x70':
          sizePrice = responce[0]["70x70"];
          console.log(sizePrice);
          break;
      }

      ;
    }
  }

  function valueMaterial(e, responce) {
    if (e.target && e.target.matches('#material')) {
      switch (material.value) {
        case 'Холст из волокна':
          materialPrice = responce[1]["Холст из волокна"];
          console.log(materialPrice);
          break;

        case 'Льняной холст':
          materialPrice = responce[1]["Льняной холст"];
          console.log(materialPrice);
          break;

        case 'Холст из натурального хлопка':
          materialPrice = responce[1]["Холст из натурального хлопка"];
          console.log(materialPrice);
          break;
      }

      ;
    }
  }

  function valueOptions(e, responce) {
    if (e.target && e.target.matches('#options')) {
      switch (options.value) {
        case 'Покрытие арт-гелем':
          optionsPrice = responce[2]["Покрытие арт-гелем"];
          console.log(optionsPrice);
          break;

        case 'Экспресс-изготовление':
          optionsPrice = responce[2]["Экспресс-изготовление"];
          console.log(optionsPrice);
          break;

        case 'Доставка готовых работ':
          optionsPrice = responce[2]["Доставка готовых работ"];
          break;
      }

      ;
    }
  }

  function calcResalt() {
    let resalt = sizePrice + materialPrice;

    if (!sizePrice || !materialPrice) {
      finalPriceBlock.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
    } else {
      if (!optionsPrice) {
        if (promocode.value === 'IWANTPOPART ') {
          finalPriceBlock.textContent = resalt - resalt / 100 * 30;
        } else {
          finalPriceBlock.textContent = resalt;
        }
      } else {
        if (promocode.value === 'IWANTPOPART ') {
          finalPriceBlock.textContent = resalt + optionsPrice - (resalt + optionsPrice) / 100 * 30;
        } else {
          finalPriceBlock.textContent = resalt + optionsPrice;
        }
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const forms = () => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]'),
        finalPriceBlock = document.querySelector('.calc-price');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  }; //в зависимости от формы отправляю данные на разные сервера

  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  }; //function import from services/request.js

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = "Файл не выбран";
    });
  };

  upload.forEach(item => {
    item.addEventListener('input', () => {
      // console.log(item.files[0]);
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 6 ? dots = "..." : dots = '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status'); // div для картинки загрузки помещаем в родитель самой формы

      item.parentNode.appendChild(statusMessage); //скрываю форму(чтоб осталоaсь тоько каринка оповещения)

      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400); // картинка

      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg); //текст под картинкой

      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item); //собрал все данные

      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question; // console.log(api);

      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        finalPriceBlock.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = '+3 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

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
  } //  (по условию не будет срабатывать тoлько если какое то окно display )


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
        item.remove(); //для удаления подaрка при клике
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
      openModal(); //ф-ция делaет none всем у кого есть data, но у '.popup-gift'нет data.

      window.removeEventListener('scroll', openModallScroll);
    }
  }

  window.addEventListener('scroll', openModallScroll);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/showStyles.js":
/*!**************************************!*\
  !*** ./src/js/modules/showStyles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const showStyles = (trigerSelector, wrapper) => {
  const btn = document.querySelector(trigerSelector);
  btn.addEventListener('click', function () {
    // getResource('http://localhost:3000/styles') c использованием сервера json-server
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResource"])('assets/db.json') // напрямую из файла, тогда ниже из ответа указать надо .styles(название массива в db.json)
    .then(res => createCard(res.styles)).catch(error => console.log('error')).finally(() => {
      this.remove();
    });
  });

  function createCard(responce) {
    responce.forEach(_ref => {
      let {
        src,
        title,
        link
      } = _ref;
      let card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showStyles);

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

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
};

const getResource = async url => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }

  return await res.json();
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map