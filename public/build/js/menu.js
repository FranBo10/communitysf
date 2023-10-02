(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/menu"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-7bb33f"], () => (__webpack_exec__("./assets/js/menu.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBR0wsTUFBTSxDQUFDRCxPQUFPO0FBRWhDQyxNQUFNLENBQUNULGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0VBQ3hDLElBQU1lLGNBQWMsR0FBR04sTUFBTSxDQUFDRCxPQUFPO0VBRXJDLElBQUlPLGNBQWMsR0FBR0QsV0FBVyxFQUFFO0lBQ2pDekIsT0FBTyxDQUFDWSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQy9CO0VBRUFZLFdBQVcsR0FBR0MsY0FBYztBQUM1QixDQUFDLENBQUM7O0FBRUY7QUFDQU4sTUFBTSxDQUFDTyxhQUFhLENBQUMsSUFBSUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgYW5pbWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGlvbicpO1xyXG5cclxuLy8gY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuLy8gICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuLy8gICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuLy8gICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1hbmltYXRpb25zJylcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1hbmltYXRpb24nKVxyXG4vLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbi8vICAgICB9KVxyXG4vLyB9LFxyXG4vLyB7IHRocmVzaG9sZDogMC41XHJcbi8vIH0pO1xyXG5cclxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBhbmltYXRpb24ubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgIGNvbnN0IGVsZW1lbnRzID0gYW5pbWF0aW9uW2ldO1xyXG4gXHJcbi8vICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50cyk7XHJcbi8vICAgIH1cclxuICBcclxuY29uc3QgbmF2QmFyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvblwiKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idG5cIik7XHJcbmNvbnN0IG1lbnVNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbW9iaWxlXCIpO1xyXG5jb25zdCBuYXZCYXJTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvIGEgc3BhblwiKTtcclxuY29uc3QgbmF2QmFyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgdWwgbGkgYVwiKTtcclxuY29uc3QgbmF2QmFyVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJfX25hbWVcIik7ICAgXHJcbmNvbnN0IG1vYmlsZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LW1vYmlsZSBsaVwiKTtcclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICBtZW51TW9iaWxlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIG5hdkJhcjEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMThCQjlDXCI7XHJcbiAgbmF2QmFyRWxlbS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gIG5hdkJhclNwYW4uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICBuYXZCYXJVc2VyTmFtZS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG59KTtcclxuXHJcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBtZW51TW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIGlmIChzY3JvbGxZID4gMCkge1xyXG4gICAgbmF2QmFyMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxOEJCOUNcIjtcclxuICAgIG5hdkJhckVsZW0uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgIG5hdkJhclNwYW4uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgIG5hdkJhclVzZXJOYW1lLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFNvbG8gY2FtYmlhIGVsIGNvbG9yIGRlIGZvbmRvIHNpIGVsIGFuY2hvIGRlIGxhIHBhbnRhbGxhIGVzIG1lbm9yIGEgOTcwcHhcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk3MCkge1xyXG4gICAgICBuYXZCYXIxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzE4QkI5Q1wiO1xyXG4gICAgICBuYXZCYXJFbGVtLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbiAgICAgIG5hdkJhclNwYW4uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgICAgbmF2QmFyVXNlck5hbWUuc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdkJhcjEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMThCQjlDXCI7XHJcbiAgICAgIG5hdkJhckVsZW0uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgICAgbmF2QmFyU3Bhbi5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gICAgICBuYXZCYXJVc2VyTmFtZS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk3MCkge1xyXG4gICAgLy8gU2kgZWwgYW5jaG8gZGUgbGEgcGFudGFsbGEgZXMgbWF5b3IgbyBpZ3VhbCBhIDk3MHB4XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG5hdkJhckVsZW0uc3R5bGUuY29sb3IgPSBcIiMxOEJCOUNcIjtcclxuICAgIG5hdkJhclNwYW4uc3R5bGUuY29sb3IgPSBcIiMxOEJCOUNcIjtcclxuICAgIG5hdkJhcjEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBTaSBlbCBhbmNobyBkZSBsYSBwYW50YWxsYSBlcyBtZW5vciBkZSA5NzBweFxyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbmF2QmFyMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxOEJCOUNcIjtcclxuICAgIG5hdkJhckVsZW0uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgIG5hdkJhclNwYW4uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICB9XHJcbn1cclxuXHJcbi8vIEVqZWN1dGFyIGhhbmRsZVJlc2l6ZSBhbCBjYXJnYXIgbGEgcMOhZ2luYVxyXG5oYW5kbGVSZXNpemUoKTtcclxuXHJcbi8vIEVqZWN1dGFyIGhhbmRsZVJlc2l6ZSBjYWRhIHZleiBxdWUgc2UgY2FtYmllIGVsIHRhbWHDsW8gZGUgbGEgcGFudGFsbGFcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbm1vYmlsZUxpbmtzLmZvckVhY2gobGluayA9PiAobGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1lbnVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufSkpKTtcclxuXHJcblxyXG4vLyogLS0tLS0tLS0tLS0tLSBMb2dpcXVlIHBvdXIgcXVlIGxlIGZvbmQgZHUgbmF2QmFyIGNoYW5nZSBhIHBhcnRpciBkJ3VuIHBldGl0IHNjcm9sbCBkJ2VjcmFuLCBldCBhdXNzaSBsYSBjb3VsZXVyIGRlIGNlcnRhaW5zIGVsZW1lbnRzIHF1aSBzZSB0cm91dmVudCBkYW5zIGxhIG5hdkJhciwgZXQgYSBwYXJ0aXIgZGUgMzAwcHggZGUgc2Nyb2xsIGxhIG5hdkJhciBkaXNwYXJhaXQgZW4gc2UgbW9udHJlIGEgbm91YmVhdSBxdWFuZCBvbiBzY3JvbGwgdmVycyBsYSBoYXV0IC0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuaWYgKHdpbmRvdy5zY3JvbGxZID4gMCAmJiB3aW5kb3cuc2Nyb2xsWSA8IDMwMCkge1xyXG4gaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk3MCkge1xyXG4gICBuYXZCYXIxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzE4QkI5Q1wiO1xyXG4gICBuYXZCYXJFbGVtLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbiAgIG5hdkJhclNwYW4uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgbmF2QmFyVXNlck5hbWUuc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuIH0gZWxzZSB7XHJcbiAgIG5hdkJhcjEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMThCQjlDXCI7XHJcbiAgIG5hdkJhckVsZW0uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxuICAgbmF2QmFyU3Bhbi5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gICBuYXZCYXJVc2VyTmFtZS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xyXG4gfVxyXG59IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZID4gMzAwKSB7XHJcbiBuYXZCYXIxLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufSBlbHNlIHtcclxuIG5hdkJhcjEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gbmF2QmFyRWxlbS5zdHlsZS5jb2xvciA9IFwiIzE4QkI5Q1wiO1xyXG4gbmF2QmFyU3Bhbi5zdHlsZS5jb2xvciA9IFwiIzE4QkI5Q1wiO1xyXG4gbmF2QmFyVXNlck5hbWUuc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcclxufVxyXG59KTtcclxuXHJcbmxldCBwcmV2U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5jb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuaWYgKGN1cnJlbnRTY3JvbGxZIDwgcHJldlNjcm9sbFkpIHtcclxuIG5hdkJhcjEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyAgIFxyXG59XHJcblxyXG5wcmV2U2Nyb2xsWSA9IGN1cnJlbnRTY3JvbGxZO1xyXG59KTtcclxuXHJcbi8vIEVqZWN1dGFtb3MgbGEgZnVuY2nDs24gYWwgY2FyZ2FyIGxhIHDDoWdpbmFcclxud2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2Nyb2xsXCIpKTtcclxuXHJcbi8vKiAtLS0tLS0tLS0tLS0gVHJhaXRlbWVudCBkZXMgYXZhdGFycyAtLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RcIik7XHJcbi8vIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wdGlvbnNcIik7XHJcbi8vIGNvbnN0IHNlbGVjdGVkSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWRJbWFnZScpO1xyXG4vLyBjb25zdCBhdmF0YXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJyZWdpc3RyYXRpb25fZm9ybVthdmF0YXJdXCJdJyk7XHJcblxyXG4vLyBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICBzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuLy8gICBvcHRpb25zLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbi8vICAgb3B0aW9ucy5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCcgfSk7XHJcbi8vIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgXHJcbiJdLCJuYW1lcyI6WyJuYXZCYXIxIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudUJ0biIsImNsb3NlQnRuIiwibWVudU1vYmlsZSIsIm5hdkJhclNwYW4iLCJuYXZCYXJFbGVtIiwibmF2QmFyVXNlck5hbWUiLCJtb2JpbGVMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiY29sb3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZW1vdmUiLCJzY3JvbGxZIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhhbmRsZVJlc2l6ZSIsImZvckVhY2giLCJsaW5rIiwicHJldlNjcm9sbFkiLCJjdXJyZW50U2Nyb2xsWSIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=