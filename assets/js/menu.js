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
  
const navBar1 = document.querySelector("#navigation");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuMobile = document.querySelector(".menu-mobile");
const navBarSpan = document.querySelector(".logo a span");
const navBarElem = document.querySelector("nav ul li a");
// const navBarUserName = document.querySelector(".icon-nav");   
const mobileLinks = document.querySelectorAll(".menu-mobile li");

menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  closeBtn.style.color = 'white';
  menuMobile.classList.add('active');
  navBar1.style.backgroundColor = "#18BB9C";
  navBarElem.style.color = "#000";
  navBarSpan.style.color = "#000";
  // navBarUserName.style.color = "#000";
});

closeBtn.addEventListener("click", () => {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  menuMobile.classList.remove('active');
  if (scrollY > 0) {
    navBar1.style.backgroundColor = "#18BB9C";
    navBarElem.style.color = "#000";
    navBarSpan.style.color = "#000";
    // navBarUserName.style.color = "#000";
  } else {
    // Solo cambia el color de fondo si el ancho de la pantalla es menor a 970px
    if (window.innerWidth < 970) {
      navBar1.style.backgroundColor = "#18BB9C";
      navBarElem.style.color = "#000";
      navBarSpan.style.color = "#000";
      // navBarUserName.style.color = "#000";
    } else {
      navBar1.style.backgroundColor = "#18BB9C";
      navBarElem.style.color = "#000";
      navBarSpan.style.color = "#000";
      // navBarUserName.style.color = "#000";
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

mobileLinks.forEach(link => (link.addEventListener("click", () => {
  menuMobile.classList.remove('active');
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
})));


//* ------------- Logique pour que le fond du navBar change a partir d'un petit scroll d'ecran, et aussi la couleur de certains elements qui se trouvent dans la navBar, et a partir de 300px de scroll la navBar disparait en se montre a noubeau quand on scroll vers la haut ----------------

window.addEventListener("scroll", () => {
if (window.scrollY > 0 && window.scrollY < 300) {
 if (window.innerWidth >= 970) {
   navBar1.style.backgroundColor = "#18BB9C";
   navBarElem.style.color = "#000";
   navBarSpan.style.color = "#000";
  //  navBarUserName.style.color = "#000";
 } else {
   navBar1.style.backgroundColor = "#18BB9C";
   navBarElem.style.color = "#000";
   navBarSpan.style.color = "#000";
  //  navBarUserName.style.color = "#000";
 }
} else if (window.scrollY > 300) {
 navBar1.style.display = "none";
} else {
 navBar1.style.backgroundColor = "transparent";
 navBarElem.style.color = "#18BB9C";
 navBarSpan.style.color = "#18BB9C";
//  navBarUserName.style.color = "#000";
}
});

let prevScrollY = window.scrollY;

window.addEventListener("scroll", () => {
const currentScrollY = window.scrollY;

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




   
