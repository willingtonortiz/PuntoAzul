window.addEventListener('scroll', e => {
    var slider = document.getElementsByClassName('jw-sliderContainer');
    var navegacion = document.getElementsByClassName("navegacion");
    var scroll = document.documentElement.scrollTop;
    if (e.pageY >= slider[0].scrollHeight || scroll>= slider[0].scrollHeight) {
        navegacion[0].classList.add('bac')
    } else {
        navegacion[0].classList.remove('bac');
    }

});

window.onload = function () {
    iniciarNavBar();
    DisplayCarta();
    esconderMenu();
};

var esconderMenu  = function(){
    var iLInk = document.getElementsByClassName('item-link');
    for(var i=0;i<iLInk.length; i++)
    {
        iLInk[i].addEventListener('click',e =>{
            document.querySelector('nav').style.maxHeight = "80px";
        })
    }
}


var DisplayCarta = function () {
    var tipos = document.querySelectorAll('.tipo');
    var platos = document.querySelectorAll('.contenedorPlatos');
    var platoActual = platos[0];
    platoActual.classList.add('show-platos');
    document.getElementById('locales').style.marginTop = (platos[0].scrollHeight - 40) + "px";
    for (var i = 0; i < tipos.length; i++) {
        tipos[i].setAttribute("data-btn", i + '');

        tipos[i].addEventListener('click', e => {
            var index = parseInt(e.target.getAttribute('data-btn'));
            platoActual.classList.toggle('show-platos');
            platoActual = platos[index];
            platoActual.classList.toggle('show-platos');
        })
    }
}

var iniciarNavBar = function () {
    var navegacion = document.querySelector("nav");
    navegacion.style.maxHeight = '80px';
    var elemento = document.querySelector(".contenedorMenu");
    elemento.addEventListener("click", function () {
        alternarAltura(navegacion, '80px');
    });
};

var alternarAltura = function (Item, altura) {
    if (Item.style.maxHeight === altura) {
        Item.style.maxHeight = Item.scrollHeight + 'px'
    } else {
        Item.style.maxHeight = altura;
    }
};
