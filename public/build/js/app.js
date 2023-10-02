(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./assets/js/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu2 */ "./assets/js/menu2.js");
/* harmony import */ var _menu2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tour */ "./assets/js/tour.js");
/* harmony import */ var _tour__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tour__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./assets/js/menu.js":
/*!***************************!*\
  !*** ./assets/js/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
// const animation = document.querySelectorAll('.animation');

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('scroll-animations')
//         }
//             else {
//                 entry.target.classList.remove('scroll-animation')
//             }

//     })
// },
// { threshold: 0.5
// });

// for (let i = 0; i < animation.length; i++) {
//     const elements = animation[i];

//      observer.observe(elements);
//    }

var navBar1 = document.querySelector("#navigation");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");
var menuMobile = document.querySelector(".menu-mobile");
var navBarSpan = document.querySelector(".logo a span");
var navBarElem = document.querySelector("nav ul li a");
var navBarUserName = document.querySelector("#user__name");
var mobileLinks = document.querySelectorAll(".menu-mobile li");
menuBtn.addEventListener("click", function () {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  closeBtn.style.color = 'white';
  menuMobile.classList.add('active');
  navBar1.style.backgroundColor = "#18BB9C";
  navBarElem.style.color = "#000";
  navBarSpan.style.color = "#000";
  navBarUserName.style.color = "#000";
});
closeBtn.addEventListener("click", function () {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  menuMobile.classList.remove('active');
  if (scrollY > 0) {
    navBar1.style.backgroundColor = "#18BB9C";
    navBarElem.style.color = "#000";
    navBarSpan.style.color = "#000";
    navBarUserName.style.color = "#000";
  } else {
    // Solo cambia el color de fondo si el ancho de la pantalla es menor a 970px
    if (window.innerWidth < 970) {
      navBar1.style.backgroundColor = "#18BB9C";
      navBarElem.style.color = "#000";
      navBarSpan.style.color = "#000";
      navBarUserName.style.color = "#000";
    } else {
      navBar1.style.backgroundColor = "#18BB9C";
      navBarElem.style.color = "#000";
      navBarSpan.style.color = "#000";
      navBarUserName.style.color = "#000";
    }
  }
});
function handleResize() {
  if (window.innerWidth >= 970) {
    // Si el ancho de la pantalla es mayor o igual a 970px
    menuBtn.style.display = "none";
    closeBtn.style.display = "none";
    navBarElem.style.color = "#18BB9C";
    navBarSpan.style.color = "#18BB9C";
    navBar1.style.backgroundColor = "transparent";
  } else {
    // Si el ancho de la pantalla es menor de 970px
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    navBar1.style.backgroundColor = "#18BB9C";
    navBarElem.style.color = "#000";
    navBarSpan.style.color = "#000";
  }
}

// Ejecutar handleResize al cargar la página
handleResize();

// Ejecutar handleResize cada vez que se cambie el tamaño de la pantalla
window.addEventListener("resize", handleResize);
mobileLinks.forEach(function (link) {
  return link.addEventListener("click", function () {
    menuMobile.classList.remove('active');
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
  });
});

//* ------------- Logique pour que le fond du navBar change a partir d'un petit scroll d'ecran, et aussi la couleur de certains elements qui se trouvent dans la navBar, et a partir de 300px de scroll la navBar disparait en se montre a noubeau quand on scroll vers la haut ----------------

window.addEventListener("scroll", function () {
  if (window.scrollY > 0 && window.scrollY < 300) {
    if (window.innerWidth >= 970) {
      navBar1.style.backgroundColor = "#18BB9C";
      navBarElem.style.color = "#000";
      navBarSpan.style.color = "#000";
      navBarUserName.style.color = "#000";
    } else {
      navBar1.style.backgroundColor = "#18BB9C";
      navBarElem.style.color = "#000";
      navBarSpan.style.color = "#000";
      navBarUserName.style.color = "#000";
    }
  } else if (window.scrollY > 300) {
    navBar1.style.display = "none";
  } else {
    navBar1.style.backgroundColor = "transparent";
    navBarElem.style.color = "#18BB9C";
    navBarSpan.style.color = "#18BB9C";
    navBarUserName.style.color = "#000";
  }
});
var prevScrollY = window.scrollY;
window.addEventListener("scroll", function () {
  var currentScrollY = window.scrollY;
  if (currentScrollY < prevScrollY) {
    navBar1.style.display = "flex";
  }
  prevScrollY = currentScrollY;
});

// Ejecutamos la función al cargar la página
window.dispatchEvent(new Event("scroll"));

//* ------------ Traitement des avatars -----------------

// const select = document.querySelector("#select");
// const options = document.querySelector("#options");
// const selectedImage = document.getElementById('selectedImage');
// const avatarInput = document.querySelector('input[name="registration_form[avatar]"]');

// select.addEventListener("click", () => {
//   select.classList.toggle("active");
//   options.classList.toggle("active");
//   options.scrollIntoView({ behavior: 'smooth', block: 'start' });
// });

/***/ }),

/***/ "./assets/js/menu2.js":
/*!****************************!*\
  !*** ./assets/js/menu2.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var header = document.querySelector("#navigation-2");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");
var menuMobile = document.querySelector(".menu-mobile");
var navBarSpan = document.querySelector(".logo a span");
var navBarElem = document.querySelector("nav ul li a");
// const navBarUserName = document.querySelector(".icon-nav-1 a");
var mobileLinks = document.querySelectorAll(".menu-mobile li");
menuBtn.addEventListener("click", function () {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  closeBtn.style.color = "white";
  menuMobile.classList.add("active");
  header.style.backgroundColor = "#18BB9C";
  navBarElem.style.color = "#000";
  navBarSpan.style.color = "#000";
  // navBarUserName.style.color = "#000";
});

closeBtn.addEventListener("click", function () {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  menuMobile.classList.remove("active");
  if (scrollY > 0) {
    header.style.backgroundColor = "#18BB9C";
    navBarElem.style.color = "#000";
    navBarSpan.style.color = "#000";
    // navBarUserName.style.color = "#000";
  } else {
    // Solo cambia el color de fondo si el ancho de la pantalla es menor a 970px
    if (window.innerWidth < 970) {
      header.style.backgroundColor = "#18BB9C";
      navBarElem.style.color = "#000";
      navBarSpan.style.color = "#000";
      // navBarUserName.style.color = "#000";
    } else {
      header.style.backgroundColor = "transparent";
      navBarElem.style.color = "#18BB9C";
      navBarSpan.style.color = "#18BB9C";
      // navBarUserName.style.color = "#18BB9C";
    }
  }
});

function handleResize() {
  if (window.innerWidth >= 970) {
    // Si el ancho de la pantalla es mayor o igual a 970px
    menuBtn.style.display = "none";
    closeBtn.style.display = "none";
    navBarElem.style.color = "#000";
    navBarSpan.style.color = "#000";
    header.style.backgroundColor = "#18BB9C";
  } else {
    // Si el ancho de la pantalla es menor de 970px
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    header.style.backgroundColor = "#18BB9C";
    navBarElem.style.color = "#000";
    navBarSpan.style.color = "#000";
  }
}

// Ejecutar handleResize al cargar la página
handleResize();

// Ejecutar handleResize cada vez que se cambie el tamaño de la pantalla
window.addEventListener("resize", handleResize);
mobileLinks.forEach(function (link) {
  return link.addEventListener("click", function () {
    menuMobile.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
  });
});
var select = document.querySelector("#select");
var options = document.querySelector("#options");
var selectedImage = document.getElementById("selectedImage");
select.addEventListener("click", function () {
  select.classList.toggle("active");
  options.classList.toggle("active");
  options.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
function changeImage(event, imagePath) {
  event.preventDefault();
  selectedImage.src = imagePath;
  options.classList.toggle("active");
  select.classList.toggle("active");
}
function selectAvatar(imagePath) {
  var selectedImage = document.getElementById("selectedImage");
  selectedImage.src = imagePath;

  // Establecer el valor del campo "avatar" en el formulario
  var avatarInput = document.querySelector('input[name="registration_form[avatar]"]');
  avatarInput.value = imagePath;
  options.classList.toggle("active");
  select.classList.toggle("active");
  console.log(avatarInput.value);
}

/***/ }),

/***/ "./assets/js/tour.js":
/*!***************************!*\
  !*** ./assets/js/tour.js ***!
  \***************************/
/***/ (() => {

var mostrarLink = document.getElementById('mostrar-link');
var ocultarLink = document.getElementById('ocultar-link');
var descripcionHidden = document.querySelector('.descripcion-hidden');
mostrarLink.addEventListener('click', function (event) {
  event.preventDefault();
  if (descripcionHidden.classList.contains('descripcion-visible')) {
    descripcionHidden.classList.remove('descripcion-visible');
    mostrarLink.textContent = 'Ver descripción completa';
    ocultarLink.classList.add('hidden');
  } else {
    descripcionHidden.classList.add('descripcion-visible');
    mostrarLink.textContent = 'Ocultar descripción';
    ocultarLink.display = 'block';
  }
});

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-7bb33f"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly8vLi9hc3NldHMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWVudTIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RvdXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYXBwLnNjc3M/NWY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xuaW1wb3J0ICcuL21lbnUnO1xuaW1wb3J0ICcuL21lbnUyJztcbmltcG9ydCAnLi90b3VyJzsiLCIvLyBjb25zdCBhbmltYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0aW9uJyk7XHJcblxyXG4vLyBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4vLyAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4vLyAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4vLyAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWFuaW1hdGlvbnMnKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWFuaW1hdGlvbicpXHJcbi8vICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgIH0pXHJcbi8vIH0sXHJcbi8vIHsgdGhyZXNob2xkOiAwLjVcclxuLy8gfSk7XHJcblxyXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IGFuaW1hdGlvbi5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgY29uc3QgZWxlbWVudHMgPSBhbmltYXRpb25baV07XHJcbiBcclxuLy8gICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnRzKTtcclxuLy8gICAgfVxyXG4gIFxyXG5jb25zdCBuYXZCYXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZpZ2F0aW9uXCIpO1xyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcclxuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ0blwiKTtcclxuY29uc3QgbWVudU1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1tb2JpbGVcIik7XHJcbmNvbnN0IG5hdkJhclNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ28gYSBzcGFuXCIpO1xyXG5jb25zdCBuYXZCYXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdiB1bCBsaSBhXCIpO1xyXG5jb25zdCBuYXZCYXJVc2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcl9fbmFtZVwiKTsgICBcclxuY29uc3QgbW9iaWxlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtbW9iaWxlIGxpXCIpO1xyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgY2xvc2VCdG4uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gIG1lbnVNb2JpbGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgbmF2QmFyMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxOEJCOUNcIjtcclxuICBuYXZCYXJFbGVtLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbiAgbmF2QmFyU3Bhbi5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gIG5hdkJhclVzZXJOYW1lLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbn0pO1xyXG5cclxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIG1lbnVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgaWYgKHNjcm9sbFkgPiAwKSB7XHJcbiAgICBuYXZCYXIxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzE4QkI5Q1wiO1xyXG4gICAgbmF2QmFyRWxlbS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gICAgbmF2QmFyU3Bhbi5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gICAgbmF2QmFyVXNlck5hbWUuc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gU29sbyBjYW1iaWEgZWwgY29sb3IgZGUgZm9uZG8gc2kgZWwgYW5jaG8gZGUgbGEgcGFudGFsbGEgZXMgbWVub3IgYSA5NzBweFxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTcwKSB7XHJcbiAgICAgIG5hdkJhcjEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMThCQjlDXCI7XHJcbiAgICAgIG5hdkJhckVsZW0uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgICAgbmF2QmFyU3Bhbi5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gICAgICBuYXZCYXJVc2VyTmFtZS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmF2QmFyMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxOEJCOUNcIjtcclxuICAgICAgbmF2QmFyRWxlbS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gICAgICBuYXZCYXJTcGFuLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbiAgICAgIG5hdkJhclVzZXJOYW1lLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTcwKSB7XHJcbiAgICAvLyBTaSBlbCBhbmNobyBkZSBsYSBwYW50YWxsYSBlcyBtYXlvciBvIGlndWFsIGEgOTcwcHhcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbmF2QmFyRWxlbS5zdHlsZS5jb2xvciA9IFwiIzE4QkI5Q1wiO1xyXG4gICAgbmF2QmFyU3Bhbi5zdHlsZS5jb2xvciA9IFwiIzE4QkI5Q1wiO1xyXG4gICAgbmF2QmFyMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFNpIGVsIGFuY2hvIGRlIGxhIHBhbnRhbGxhIGVzIG1lbm9yIGRlIDk3MHB4XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBuYXZCYXIxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzE4QkI5Q1wiO1xyXG4gICAgbmF2QmFyRWxlbS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gICAgbmF2QmFyU3Bhbi5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRWplY3V0YXIgaGFuZGxlUmVzaXplIGFsIGNhcmdhciBsYSBww6FnaW5hXHJcbmhhbmRsZVJlc2l6ZSgpO1xyXG5cclxuLy8gRWplY3V0YXIgaGFuZGxlUmVzaXplIGNhZGEgdmV6IHF1ZSBzZSBjYW1iaWUgZWwgdGFtYcOxbyBkZSBsYSBwYW50YWxsYVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxubW9iaWxlTGlua3MuZm9yRWFjaChsaW5rID0+IChsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59KSkpO1xyXG5cclxuXHJcbi8vKiAtLS0tLS0tLS0tLS0tIExvZ2lxdWUgcG91ciBxdWUgbGUgZm9uZCBkdSBuYXZCYXIgY2hhbmdlIGEgcGFydGlyIGQndW4gcGV0aXQgc2Nyb2xsIGQnZWNyYW4sIGV0IGF1c3NpIGxhIGNvdWxldXIgZGUgY2VydGFpbnMgZWxlbWVudHMgcXVpIHNlIHRyb3V2ZW50IGRhbnMgbGEgbmF2QmFyLCBldCBhIHBhcnRpciBkZSAzMDBweCBkZSBzY3JvbGwgbGEgbmF2QmFyIGRpc3BhcmFpdCBlbiBzZSBtb250cmUgYSBub3ViZWF1IHF1YW5kIG9uIHNjcm9sbCB2ZXJzIGxhIGhhdXQgLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5pZiAod2luZG93LnNjcm9sbFkgPiAwICYmIHdpbmRvdy5zY3JvbGxZIDwgMzAwKSB7XHJcbiBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTcwKSB7XHJcbiAgIG5hdkJhcjEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMThCQjlDXCI7XHJcbiAgIG5hdkJhckVsZW0uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgbmF2QmFyU3Bhbi5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gICBuYXZCYXJVc2VyTmFtZS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gfSBlbHNlIHtcclxuICAgbmF2QmFyMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxOEJCOUNcIjtcclxuICAgbmF2QmFyRWxlbS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gICBuYXZCYXJTcGFuLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbiAgIG5hdkJhclVzZXJOYW1lLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbiB9XHJcbn0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgPiAzMDApIHtcclxuIG5hdkJhcjEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59IGVsc2Uge1xyXG4gbmF2QmFyMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiBuYXZCYXJFbGVtLnN0eWxlLmNvbG9yID0gXCIjMThCQjlDXCI7XHJcbiBuYXZCYXJTcGFuLnN0eWxlLmNvbG9yID0gXCIjMThCQjlDXCI7XHJcbiBuYXZCYXJVc2VyTmFtZS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG59XHJcbn0pO1xyXG5cclxubGV0IHByZXZTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbmNvbnN0IGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG5pZiAoY3VycmVudFNjcm9sbFkgPCBwcmV2U2Nyb2xsWSkge1xyXG4gbmF2QmFyMS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7ICAgXHJcbn1cclxuXHJcbnByZXZTY3JvbGxZID0gY3VycmVudFNjcm9sbFk7XHJcbn0pO1xyXG5cclxuLy8gRWplY3V0YW1vcyBsYSBmdW5jacOzbiBhbCBjYXJnYXIgbGEgcMOhZ2luYVxyXG53aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzY3JvbGxcIikpO1xyXG5cclxuLy8qIC0tLS0tLS0tLS0tLSBUcmFpdGVtZW50IGRlcyBhdmF0YXJzIC0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdFwiKTtcclxuLy8gY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3B0aW9uc1wiKTtcclxuLy8gY29uc3Qgc2VsZWN0ZWRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZEltYWdlJyk7XHJcbi8vIGNvbnN0IGF2YXRhcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInJlZ2lzdHJhdGlvbl9mb3JtW2F2YXRhcl1cIl0nKTtcclxuXHJcbi8vIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4vLyAgIHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4vLyAgIG9wdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuLy8gICBvcHRpb25zLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcclxuLy8gfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICBcclxuIiwiY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZpZ2F0aW9uLTJcIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpO1xyXG5jb25zdCBtZW51TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW1vYmlsZVwiKTtcclxuY29uc3QgbmF2QmFyU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nbyBhIHNwYW5cIik7XHJcbmNvbnN0IG5hdkJhckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2IHVsIGxpIGFcIik7XHJcbi8vIGNvbnN0IG5hdkJhclVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uLW5hdi0xIGFcIik7XHJcbmNvbnN0IG1vYmlsZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LW1vYmlsZSBsaVwiKTtcclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gIG1lbnVNb2JpbGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMThCQjlDXCI7XHJcbiAgbmF2QmFyRWxlbS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gIG5hdkJhclNwYW4uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAvLyBuYXZCYXJVc2VyTmFtZS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG59KTtcclxuXHJcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBtZW51TW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgaWYgKHNjcm9sbFkgPiAwKSB7XHJcbiAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMThCQjlDXCI7XHJcbiAgICBuYXZCYXJFbGVtLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbiAgICBuYXZCYXJTcGFuLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbiAgICAvLyBuYXZCYXJVc2VyTmFtZS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBTb2xvIGNhbWJpYSBlbCBjb2xvciBkZSBmb25kbyBzaSBlbCBhbmNobyBkZSBsYSBwYW50YWxsYSBlcyBtZW5vciBhIDk3MHB4XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5NzApIHtcclxuICAgICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzE4QkI5Q1wiO1xyXG4gICAgICBuYXZCYXJFbGVtLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbiAgICAgIG5hdkJhclNwYW4uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgICAgLy8gbmF2QmFyVXNlck5hbWUuc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgIG5hdkJhckVsZW0uc3R5bGUuY29sb3IgPSBcIiMxOEJCOUNcIjtcclxuICAgICAgbmF2QmFyU3Bhbi5zdHlsZS5jb2xvciA9IFwiIzE4QkI5Q1wiO1xyXG4gICAgICAvLyBuYXZCYXJVc2VyTmFtZS5zdHlsZS5jb2xvciA9IFwiIzE4QkI5Q1wiO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk3MCkge1xyXG4gICAgLy8gU2kgZWwgYW5jaG8gZGUgbGEgcGFudGFsbGEgZXMgbWF5b3IgbyBpZ3VhbCBhIDk3MHB4XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG5hdkJhckVsZW0uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgIG5hdkJhclNwYW4uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxOEJCOUNcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gU2kgZWwgYW5jaG8gZGUgbGEgcGFudGFsbGEgZXMgbWVub3IgZGUgOTcwcHhcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxOEJCOUNcIjtcclxuICAgIG5hdkJhckVsZW0uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgIG5hdkJhclNwYW4uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICB9XHJcbn1cclxuXHJcbi8vIEVqZWN1dGFyIGhhbmRsZVJlc2l6ZSBhbCBjYXJnYXIgbGEgcMOhZ2luYVxyXG5oYW5kbGVSZXNpemUoKTtcclxuXHJcbi8vIEVqZWN1dGFyIGhhbmRsZVJlc2l6ZSBjYWRhIHZleiBxdWUgc2UgY2FtYmllIGVsIHRhbWHDsW8gZGUgbGEgcGFudGFsbGFcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbm1vYmlsZUxpbmtzLmZvckVhY2goKGxpbmspID0+XHJcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdFwiKTtcclxuY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3B0aW9uc1wiKTtcclxuY29uc3Qgc2VsZWN0ZWRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0ZWRJbWFnZVwiKTtcclxuXHJcbnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gIG9wdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICBvcHRpb25zLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlSW1hZ2UoZXZlbnQsIGltYWdlUGF0aCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgc2VsZWN0ZWRJbWFnZS5zcmMgPSBpbWFnZVBhdGg7XHJcbiAgb3B0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gIHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RBdmF0YXIoaW1hZ2VQYXRoKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0ZWRJbWFnZVwiKTtcclxuICBzZWxlY3RlZEltYWdlLnNyYyA9IGltYWdlUGF0aDtcclxuXHJcbiAgLy8gRXN0YWJsZWNlciBlbCB2YWxvciBkZWwgY2FtcG8gXCJhdmF0YXJcIiBlbiBlbCBmb3JtdWxhcmlvXHJcbiAgY29uc3QgYXZhdGFySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgJ2lucHV0W25hbWU9XCJyZWdpc3RyYXRpb25fZm9ybVthdmF0YXJdXCJdJ1xyXG4gICk7XHJcbiAgYXZhdGFySW5wdXQudmFsdWUgPSBpbWFnZVBhdGg7XHJcblxyXG4gIG9wdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICBzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICBjb25zb2xlLmxvZyhhdmF0YXJJbnB1dC52YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuY29uc3QgbW9zdHJhckxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9zdHJhci1saW5rJyk7XHJcbmNvbnN0IG9jdWx0YXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29jdWx0YXItbGluaycpO1xyXG5jb25zdCBkZXNjcmlwY2lvbkhpZGRlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwY2lvbi1oaWRkZW4nKTtcclxuXHJcbm1vc3RyYXJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgaWYgKGRlc2NyaXBjaW9uSGlkZGVuLmNsYXNzTGlzdC5jb250YWlucygnZGVzY3JpcGNpb24tdmlzaWJsZScpKSB7XHJcbiAgICBkZXNjcmlwY2lvbkhpZGRlbi5jbGFzc0xpc3QucmVtb3ZlKCdkZXNjcmlwY2lvbi12aXNpYmxlJyk7XHJcbiAgICBtb3N0cmFyTGluay50ZXh0Q29udGVudCA9ICdWZXIgZGVzY3JpcGNpw7NuIGNvbXBsZXRhJztcclxuICAgIG9jdWx0YXJMaW5rLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZXNjcmlwY2lvbkhpZGRlbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwY2lvbi12aXNpYmxlJyk7XHJcbiAgICBtb3N0cmFyTGluay50ZXh0Q29udGVudCA9ICdPY3VsdGFyIGRlc2NyaXBjacOzbic7XHJcbiAgICBvY3VsdGFyTGluay5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcbn0pO1xyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIm5hdkJhcjEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51QnRuIiwiY2xvc2VCdG4iLCJtZW51TW9iaWxlIiwibmF2QmFyU3BhbiIsIm5hdkJhckVsZW0iLCJuYXZCYXJVc2VyTmFtZSIsIm1vYmlsZUxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJjb2xvciIsImNsYXNzTGlzdCIsImFkZCIsImJhY2tncm91bmRDb2xvciIsInJlbW92ZSIsInNjcm9sbFkiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGFuZGxlUmVzaXplIiwiZm9yRWFjaCIsImxpbmsiLCJwcmV2U2Nyb2xsWSIsImN1cnJlbnRTY3JvbGxZIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiaGVhZGVyIiwic2VsZWN0Iiwib3B0aW9ucyIsInNlbGVjdGVkSW1hZ2UiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImNoYW5nZUltYWdlIiwiZXZlbnQiLCJpbWFnZVBhdGgiLCJwcmV2ZW50RGVmYXVsdCIsInNyYyIsInNlbGVjdEF2YXRhciIsImF2YXRhcklucHV0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibW9zdHJhckxpbmsiLCJvY3VsdGFyTGluayIsImRlc2NyaXBjaW9uSGlkZGVuIiwiY29udGFpbnMiLCJ0ZXh0Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=