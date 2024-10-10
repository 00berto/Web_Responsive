/*
Prueba Final Curso Domestika
'Introducción al Desarrollo Web Responsive con HTML y CSS'

Creacion de una pagina Web responsive para una cafeteria 'Cafè Oslo'
*/

/* menu deslegable */

document.addEventListener("DOMContentLoaded", function () {
  var enlaceMenu = document.getElementById("enlace-menu");
  var menu = document.getElementById("menu");

  enlaceMenu.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("activo");
  });

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !enlaceMenu.contains(e.target)) {
      menu.classList.remove("activo");
    }
  });
});
