const mostrarLink = document.getElementById('mostrar-link');
const ocultarLink = document.getElementById('ocultar-link');
const descripcionHidden = document.querySelector('.descripcion-hidden');

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

reduceLink.addEventListener('click', function (event) {
  event.preventDefault();
  descripcionHidden.classList.remove('descripcion-visible');
  mostrarLink.textContent = 'Ver descripción completa';
  ocultarLink.style.display = 'none';
});

