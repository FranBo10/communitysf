(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/tour"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/tour.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdG91ci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDO0FBQzNELElBQU1DLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDO0FBQzNELElBQU1FLGlCQUFpQixHQUFHSCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztBQUV2RUwsV0FBVyxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsS0FBSyxFQUFFO0VBQ3JEQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBRXRCLElBQUlKLGlCQUFpQixDQUFDSyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO0lBQy9ETixpQkFBaUIsQ0FBQ0ssU0FBUyxDQUFDRSxNQUFNLENBQUMscUJBQXFCLENBQUM7SUFDekRYLFdBQVcsQ0FBQ1ksV0FBVyxHQUFHLDBCQUEwQjtJQUNwRFQsV0FBVyxDQUFDTSxTQUFTLENBQUNJLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDckMsQ0FBQyxNQUFNO0lBQ0xULGlCQUFpQixDQUFDSyxTQUFTLENBQUNJLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztJQUN0RGIsV0FBVyxDQUFDWSxXQUFXLEdBQUcscUJBQXFCO0lBQy9DVCxXQUFXLENBQUNXLE9BQU8sR0FBRyxPQUFPO0VBQy9CO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RvdXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IG1vc3RyYXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vc3RyYXItbGluaycpO1xyXG5jb25zdCBvY3VsdGFyTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvY3VsdGFyLWxpbmsnKTtcclxuY29uc3QgZGVzY3JpcGNpb25IaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcGNpb24taGlkZGVuJyk7XHJcblxyXG5tb3N0cmFyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGlmIChkZXNjcmlwY2lvbkhpZGRlbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rlc2NyaXBjaW9uLXZpc2libGUnKSkge1xyXG4gICAgZGVzY3JpcGNpb25IaWRkZW4uY2xhc3NMaXN0LnJlbW92ZSgnZGVzY3JpcGNpb24tdmlzaWJsZScpO1xyXG4gICAgbW9zdHJhckxpbmsudGV4dENvbnRlbnQgPSAnVmVyIGRlc2NyaXBjacOzbiBjb21wbGV0YSc7XHJcbiAgICBvY3VsdGFyTGluay5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGVzY3JpcGNpb25IaWRkZW4uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcGNpb24tdmlzaWJsZScpO1xyXG4gICAgbW9zdHJhckxpbmsudGV4dENvbnRlbnQgPSAnT2N1bHRhciBkZXNjcmlwY2nDs24nO1xyXG4gICAgb2N1bHRhckxpbmsuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6WyJtb3N0cmFyTGluayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvY3VsdGFyTGluayIsImRlc2NyaXBjaW9uSGlkZGVuIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsImFkZCIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9