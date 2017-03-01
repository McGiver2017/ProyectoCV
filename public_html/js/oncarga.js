$(document).ready(function () {
    // se ejecuta cuando se carga el documento HTML y DOM está listo

    $('#preloader_1').show(0);   
});

$(window).load(function () {
    // se ejecuta cuando la página completa está completamente cargado,
    // incluyendo todos los marcos, objetos e imágenes    
    $('#preloader_1').hide(1000);
    $('#login').show(1000);
});


