
$(document).ready(function () {
    // se ejecuta cuando se carga el documento HTML y DOM está listo

    $('#preloader_1').show(0);
    $('#login').hide(0);
    $('#login').on('submit', '#formulario', function (event) {
        event.preventDefault();
        logearse();
        /* $.ajax({
         url: "menu.html",
         success: function (data) {
         $('#operacion').html(data);
         }
         })*/

    });


});
$(window).load(function () {
    // se ejecuta cuando la página completa está completamente cargado,
    // incluyendo todos los marcos, objetos e imágenes    
    $('#preloader_1').hide(1000);
    $('#login').show(1000);
});
function logearse() {
    //$('#login').hide(1000);

    //deslogearse();
    alert("aca");
    $(location).attr('href', "menu.html");
}
function deslogearse() {
    $('#login').show(1000);
    $('#operacion').hide(1000);
}
$(document).ready(function () {
    var trigger = $('.hamburger'),
            overlay = $('.overlay'),
            isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});

/* menu */

window.alert = function () {};
var defaultCSS = document.getElementById('bootstrap-css');
function changeCSS(css) {
    if (css)
        $('head > link').filter(':first').replaceWith('<link rel="stylesheet" href="' + css + '" type="text/css" />');
    else
        $('head > link').filter(':first').replaceWith(defaultCSS);
}
$(document).ready(function () {
    var iframe_height = parseInt($('html').height());
    window.parent.postMessage(iframe_height, 'http://bootsnipp.com');
});

$(document).ready(function () {
    $('#registrardoc').hide(0);
    $('#mostrardoc').hide(0);
    $('#datos_personales').hide(0);
    $('#formacion_academica').hide(0);
    $('#example').DataTable();
});
function registrardoc() {

    event.preventDefault();
    //  $('#campo').html("<iframe src='registrardoc.html' frameborder=0 width=110% height=1200></iframe>");
    ocultar();
    $('#registrardoc').show(1000);

}

function actualizarcv() {
    event.preventDefault();
    ocultar();
    $('#mostrardoc').show(1000);


}
function datos_personales() {
    ocultar();
    $('#datos_personales').show(1000);

}
function formacion_Academica() {
    ocultar();
    $('#formacion_academica').show(1000);

}
function final_Carga() {
    console("final");
}
function ocultar() {
    $('#datos_personales').hide(1000);
    $('#registrardoc').hide(100);
    $('#mostrardoc').hide(1000);
    $('#formacion_academica').hide(1000);
}
/* index */
