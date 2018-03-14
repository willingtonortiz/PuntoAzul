var Tab = /** @class */ (function () {
    function Tab(nombre) {
        var _this = this;
        this.iniciarTabs = function (titulos) {
            for (var i = 0; i < _this.contenidos.length; i++) {
                titulos[i].setAttribute("data-titulo", i + '');
                titulos[i].addEventListener("click", function (evento) {
                    if (parseInt(evento.target.getAttribute("data-titulo")) !== _this.actual) {
                        /* Titulos */
                        _this.tituloActual.classList.toggle("activo");
                        _this.tituloActual = evento.target;
                        _this.tituloActual.classList.toggle("activo");
                        /* Contenido */
                        _this.contenidos[_this.actual].style.display = "none";
                        _this.actual = parseInt(evento.target.getAttribute("data-titulo"));
                        _this.contenidos[_this.actual] = _this.contenidos[_this.actual];
                        _this.contenidos[_this.actual].style.display = "block";
                    }
                });
                _this.contenidos[i].style.display = "none";
            }
            _this.tituloActual = titulos[0];
            _this.tituloActual.classList.toggle("activo");
            _this.contenidos[_this.actual].style.display = "block";
        };
        var tabs = document.getElementById(nombre);
        var titulos = tabs.getElementsByClassName("titulo");
        this.contenidos = tabs.getElementsByClassName("contenido");
        this.actual = 0;
        this.iniciarTabs(titulos);
    }
    return Tab;
}());
