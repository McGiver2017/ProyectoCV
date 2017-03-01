$(document).ready(function () {
    $('#editar').hide(0);
    var t = $('#grado_academico').DataTable();


    $('#agregar').click(function () {
        
        t.row.add([
           'Licenciatura',
           'Ingenieria de Sistemas',
           '25/08/2019',
            'Universidad Nacional de Ucayali',
            'T'
        ]).draw(false);

       
    });
    $('#modificar').click(function () {

        $('#guardar').removeAttr('disabled');
        $('#cancelar').removeAttr('disabled');
        $('#modificar').attr('disabled', 'disabled');
        //--- Ocultar

        $('#mostrar').hide(1000);
        $('#editar').show(1000);

        //valor
        $('#mpapellido').val($('#dpapellido').text());
        $('#mpnombre').val($('#dpnombre').text());
        $('#mpfech').val($('#dpfech').text());
        $('#mdpnac').val($('#dpnac').text());
        $('#mdpdir').val($('#dpdir').text());
        $('#mdpdistr').val($('#dpdistr').text());
        $('#mdpprov').val($('#dpprov').text());
        $('#mdpdepart').val($('#dpdepart').text());
        $('#mdptelf').val($('#dptelf').text());
        $('#mdptelfm').val($('#dptelfm').text());
        $('#mdpemail').val($('#dpemail').text());


    });
    $('#guardar').click(function () {

        $('#modificar').removeAttr('disabled');
        $('#guardar').attr('disabled', 'disabled');
        $('#cancelar').attr('disabled', 'disabled');
        //---
        $('#mostrar').show(1000);
        $('#editar').hide(1000);


        $('#dpapellido').text($('#mpapellido').val());
        $('#dpnombre').text($('#mpnombre').val());
        $('#dpfech').text($('#mpfech').val());
        $('#dpnac').text($('#mdpnac').val());
        $('#dpdir').text($('#mdpdir').val());
        $('#dpdistr').text($('#mdpdistr').val());
        $('#dpprov').text($('#mdpprov').val());
        $('#dpdepart').text($('#mdpdepart').val());
        $('#dptelf').text($('#mdptelf').val());
        $('#dptelfm').text($('#mdptelfm').val());
        $('#dpemail').text($('#mdpemail').val());

    });
    $('#cancelar').click(function () {

        $('#modificar').removeAttr('disabled');
        $('#guardar').attr('disabled', 'disabled');
        $('#cancelar').attr('disabled', 'disabled');
        $('#mostrar').show(1000);
        $('#editar').hide(1000);
    });


});


