window.addEventListener('scroll',e=>{
    var slider = document.getElementsByClassName('slider');
    var navegacion = document.getElementsByClassName("navegacion");
    if(e.pageY >=slider[0].scrollHeight){
        navegacion[0].classList.add('bac')
    }
    else{
        navegacion[0].classList.remove('bac');
    }
  
})
window.onload = function () {
    inicializarDatos();
};
var inicializarDatos = function () {
    iniciarNavBar();
    iniciarTabs();
    DisplayCarta();
};

var DisplayCarta = function()
{

    var platos = document.getElementsByClassName('platos');
    var menu = document.getElementsByClassName('menu-item');
    platos[0].classList.add('show-platos');
    document.getElementById('locales').style.marginTop = (platos[0].scrollHeight-40) +"px";
    for(var i=0; i<menu.length; i++)
    {
        menu[i].addEventListener('click',e=>{
            var index = e.target.getAttribute('data-btn');
            var pindex= parseInt(index);

            console.log(pindex);
            for(var j=0; j<menu.length; j++)
            {
                if(j === (pindex-1)){
                    platos[j].classList.add('show-platos');
                    document.getElementById('locales').style.marginTop = (platos[j].scrollHeight-40) +"px";

                }
                else{
                    platos[j].classList.remove('show-platos');
                }
            }
        })
    }
        
}


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
    console.log(Item.scrollHeight);
    if (Item.style.maxHeight === altura) {
        Item.style.maxHeight = Item.scrollHeight + 'px'
        console.log(Item.scrollHeight);
    }
    else {
        Item.style.maxHeight = altura;
    }
};
