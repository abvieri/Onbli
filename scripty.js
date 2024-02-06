// Conheça á Onbli Animação

window.addEventListener('load', verificacao);
var sobre_document = document.getElementsByClassName("sobre-document");
var marca_pagina = document.getElementsByClassName("marca-pagina");
let sobre = Array.from(sobre_document);
let pagina = Array.from(marca_pagina);

function verificacao() {
    sobre.forEach(e => {
        if (e.classList[3] === "active") {
            e.getElementsByClassName('texto-pagina')[0].style.display = "flex";
            e.getElementsByClassName('marca-pagina')[0].classList.remove('col-12');
            e.getElementsByClassName('marca-pagina')[0].classList.add('col-1');
            e.getElementsByClassName('texto-pagina')[0].style.animation= '.1s ease-in both running texto-pagina';
        } else {
            e.getElementsByClassName('texto-pagina')[0].style.display = 'none';
            e.getElementsByClassName('marca-pagina')[0].classList.remove('col-1');
            e.getElementsByClassName('marca-pagina')[0].classList.add('col-12');
        }
    });
}

pagina.forEach(e => {
    e.addEventListener('click', function () {
        var element = e.parentNode.classList[3]
        if (element != "active") {
            pagina.forEach(el => {
                if (el.parentNode.classList[3] === "active") {
                    el.parentNode.classList.remove("active");
                }
            });
            e.parentNode.classList.add('active');
            verificacao();
        }
    })
});