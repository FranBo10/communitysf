const header = document.querySelector("#navigation-2");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuMobile = document.querySelector(".menu-mobile");
const navBarSpan = document.querySelector(".logo a span");
const navBarElem = document.querySelector("nav ul li a");
// const navBarUserName = document.querySelector(".icon-nav-1 a");
const mobileLinks = document.querySelectorAll(".menu-mobile li");

menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  closeBtn.style.color = "white";
  menuMobile.classList.add("active");
  header.style.backgroundColor = "#18BB9C";
  navBarElem.style.color = "#000";
  navBarSpan.style.color = "#000";
  // navBarUserName.style.color = "#000";
});

closeBtn.addEventListener("click", () => {
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

mobileLinks.forEach((link) =>
  link.addEventListener("click", () => {
    menuMobile.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
  })
);

const select = document.querySelector("#select");
const options = document.querySelector("#options");
const selectedImage = document.getElementById("selectedImage");

select.addEventListener("click", () => {
  select.classList.toggle("active");
  options.classList.toggle("active");
  options.scrollIntoView({ behavior: "smooth", block: "start" });
});

function changeImage(event, imagePath) {
  event.preventDefault();
  selectedImage.src = imagePath;
  options.classList.toggle("active");
  select.classList.toggle("active");
}

function selectAvatar(imagePath) {
  const selectedImage = document.getElementById("selectedImage");
  selectedImage.src = imagePath;

  // Establecer el valor del campo "avatar" en el formulario
  const avatarInput = document.querySelector(
    'input[name="registration_form[avatar]"]'
  );
  avatarInput.value = imagePath;

  options.classList.toggle("active");
  select.classList.toggle("active");
  console.log(avatarInput.value);
}








