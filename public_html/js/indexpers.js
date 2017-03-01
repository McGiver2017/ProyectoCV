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
  
    $(location).attr('href', "menudoc.html");
}
function deslogearse() {
    $('#login').show(1000);
    $('#operacion').hide(1000);
}
