window.onload = function () {
    inicializarDatos();
};
var inicializarDatos = function () {
    iniciarNavBar();
    iniciarTabs();
};
var iniciarNavBar = function () {
    var navegacion = document.querySelector("nav");
    navegacion.style.maxHeight = '80px';
    var elemento = document.querySelector(".contenedorMenu");
    elemento.addEventListener("click", function () { alternarAltura(navegacion, '80px'); });
};
var iniciarTabs = function () {
    var tabs = document.querySelectorAll(".tab");
    var contenidos = document.querySelectorAll(".tabContenido");
    var tabActual = tabs[0];
    var contenidoActual = contenidos[0];
    for (var i = 0; i < contenidos.length; i++) {
        contenidos[i].style.display = "none";
        tabs[i].addEventListener("click", function (evento) {
            if (tabActual !== evento.target) {
                tabActual.classList.toggle("tabSelect");
                tabActual = evento.target;
                tabActual.classList.toggle("tabSelect");
                var nombre = "contenido" + tabActual.getAttribute("data-tab");
                contenidoActual.style.display = "none";
                contenidoActual = document.getElementById(nombre);
                contenidoActual.style.display = "block";
            }
        });
    }
    tabActual.classList.toggle("tabSelect");
    contenidoActual.style.display = "block";
};
var alternarAltura = function (Item, altura) {
    if (Item.style.maxHeight === altura) {
        Item.style.maxHeight = Item.scrollHeight + 'px';
    }
    else {
        Item.style.maxHeight = altura;
    }
};
