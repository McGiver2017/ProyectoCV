$(document).ready(function () {
//variables permanente en tablas
    var fila;
    ocultartotal();
    //---
    $('#editar').hide(0);

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

/* index */

function registrardoc() {

    event.preventDefault();
    //  $('#campo').html("<iframe src='registrardoc.html' frameborder=0 width=110% height=1200></iframe>");
    ocultar();
    $('#registrardoc').show(1000);

}

function actualizarcv() {
    event.preventDefault();
    ocultar();
    $('#mostrargradac').show(1000);


}
function datos_personales() {
    ocultar();
    $('#datos_personales').show(1000);

}
function grados() {
    ocultar();
    $('#mostrargradac').show(1000);

}
function titulo_prof() {
    ocultar();
    $('#mostrartituloprof').show(1000);

}
function otros_estudios() {
    ocultar();
    $('#mostrarotrosestudios').show(1000);

}
function actualizaciones() {
    ocultar();
    $('#mostraractualizaciones').show(1000);

}
function idiomas() {
    ocultar();
    $('#mostraridiomas').show(1000);

}
function experiencia_laboral() {
    ocultar();
    $('#mostrarexplab').show(1000);

}
function experiencia_laboral2() {
    ocultar();
    $('#mostrarexplab2').show(1000);

}
function participacion_ponencia() {
    ocultar();
    $('#mostrarpart_pon').show(1000);

}
function Trabajos_Investigación() {
    ocultar();
    $('#mostrarTipoInvst').show(1000);
}
function Publicaciones_cientificas() {
    ocultar();
    $('#mostrarpublcien').show(1000);
}
function Asesoria_tesis() {
    ocultar();
    $('#mostrarastesis').show(1000);
}
function final_Carga() {
    console("final");
}
function ocultartotal() {
    $('#registrardoc').hide(0);
    $('#mostrargradac').hide(0);
    $('#mostrartituloprof').hide(0);
    $('#datos_personales').hide(0);
    $('#formacion_academica').hide(0);
    $('#mostrarotrosestudios').hide(0);
    $('#mostraractualizaciones').hide(0);
    $('#mostraridiomas').hide(0);
    $('#mostrarexplab').hide(0);
    $('#mostrarexplab2').hide(0);
    $('#mostrarpart_pon').hide(0);
    $('#mostrarTipoInvst').hide(0);
    $('#mostrarpublcien').hide(0);
    $('#mostrarastesis').hide(0);
}
function ocultar() {
    $('#datos_personales').hide(1000);
    $('#registrardoc').hide(100);
    $('#mostrargradac').hide(1000);
    $('#formacion_academica').hide(1000);
    $('#mostrartituloprof').hide(1000);
    $('#mostrarotrosestudios').hide(1000);
    $('#mostraractualizaciones').hide(1000);
    $('#mostraridiomas').hide(1000);
    $('#mostrarexplab').hide(1000);
    $('#mostrarexplab2').hide(1000);
    $('#mostrarpart_pon').hide(1000);
    $('#mostrarTipoInvst').hide(1000);
    $('#mostrarpublcien').hide(1000);
    $('#mostrarastesis').hide(1000);
}
/* index */

$(document).ready(function () {
    var o1 = $('#o1grado_ac').DataTable();
    var o2 = $('#o2titulo_prof').DataTable();
    var o3 = $('#o3otros_estudios').DataTable();
    var o4 = $('#o4actualizaciones').DataTable();
    var o5 = $('#o5idiomas').DataTable();
    var o6 = $('#o6explab').DataTable();
    var o7 = $('#o7explab2').DataTable();
    var o8 = $('#o8ponencia').DataTable();
    var o9 = $('#o9investig').DataTable();
    var o10 = $('#o10publcien').DataTable();
    var o11 = $('#o11astesis').DataTable();

    $('#bg1').click(function () {
        a1guardar(o1);
    });
    $('#bg2').click(function () {
        a2guardar(o2);
    });
    $('#bg3').click(function () {
        a3guardar(o3);
    });
    $('#bg4').click(function () {
        a4guardar(o4);
    });
    $('#bg5').click(function () {
        a5guardar(o5);
    });
    $('#bg6').click(function () {
        a6guardar(o6);
    });
    $('#bg7').click(function () {
        a7guardar(o7);
    });
    $('#bg8').click(function () {
        a8guardar(o8);
    });
    $('#bg9').click(function () {
        a9guardar(o9);
    });
    $('#bg10').click(function () {
        a10guardar(o10);
    });
    $('#bg11').click(function () {
        a11guardar(o11);
    });

});

function a1agregar() {
    $('#a1agregar').modal();
}
function a1guardar(tab) {
    var f1 = $('#a11grado_academico').val();
    var f2 = $('#a12especialidad').val();
    var f3 = $('#a13fecha').val();
    var f4 = $('#a14estudios').val();
    var f5 = $('#a15sistuacion').val();

    tab.row.add([
        f1,
        f2,
        f3,
        f4,
        f5, 'Configurando..'
    ]).draw(false);
    $('#a1agregar').modal('hide');


}
function e1editar(fila) {
    var f1 = $('#o1grado_ac tr:eq(' + fila + ') td:eq(0)').text();
    var f2 = $('#o1grado_ac tr:eq(' + fila + ') td:eq(1)').text();
    var f3 = $('#o1grado_ac tr:eq(' + fila + ') td:eq(2)').text();
    var f4 = $('#o1grado_ac tr:eq(' + fila + ') td:eq(3)').text();
    var f5 = $('#o1grado_ac tr:eq(' + fila + ') td:eq(4)').text();

    $('#e11grado_academico').val(f1);
    $('#e12especialidad').val(f2);
    $('#e13fecha').val(f3);
    $('#e14estudios').val(f4);
    $('#e15sistuacion').val(f5);
    this.fila = fila;
    $('#e1editar').modal();
}
function e1actualizar() {
    $('#o1grado_ac tr:eq(' + this.fila + ') td:eq(0)').text($('#e11grado_academico').val());
    $('#o1grado_ac tr:eq(' + this.fila + ') td:eq(1)').text($('#e12especialidad').val());
    $('#o1grado_ac tr:eq(' + this.fila + ') td:eq(2)').text($('#e13fecha').val());
    $('#o1grado_ac tr:eq(' + this.fila + ') td:eq(3)').text($('#e14estudios').val());
    $('#o1grado_ac tr:eq(' + this.fila + ') td:eq(4)').text($('#e15sistuacion').val());
    $('#e1editar').modal('hide');
}
function a2agregar() {
    $('#a2agregar').modal();
}
function a2guardar(tab) {
    var f1 = $('#a21titulo_prof').val();
    var f2 = $('#a22especialidad').val();
    var f3 = $('#a23fecha').val();
    var f4 = $('#a24estudios').val();
    var f5 = $('#a25sistuacion').val();

    tab.row.add([
        f1,
        f2,
        f3,
        f4,
        f5, 'Configurando..'
    ]).draw(false);
    $('#a2agregar').modal('hide');


}
function e2editar(fila) {
    var f1 = $('#o2titulo_prof tr:eq(' + fila + ') td:eq(0)').text();
    var f2 = $('#o2titulo_prof tr:eq(' + fila + ') td:eq(1)').text();
    var f3 = $('#o2titulo_prof tr:eq(' + fila + ') td:eq(2)').text();
    var f4 = $('#o2titulo_prof tr:eq(' + fila + ') td:eq(3)').text();
    var f5 = $('#o2titulo_prof tr:eq(' + fila + ') td:eq(4)').text();

    $('#e21titulo_prof').val(f1);
    $('#e22especialidad').val(f2);
    $('#e23fecha').val(f3);
    $('#e24estudios').val(f4);
    $('#e25sistuacion').val(f5);
    this.fila = fila;
    $('#e2editar').modal();
}
function e2actualizar() {
    $('#o2titulo_prof tr:eq(' + this.fila + ') td:eq(0)').text($('#e21titulo_prof').val());
    $('#o2titulo_prof tr:eq(' + this.fila + ') td:eq(1)').text($('#e22especialidad').val());
    $('#o2titulo_prof tr:eq(' + this.fila + ') td:eq(2)').text($('#e23fecha').val());
    $('#o2titulo_prof tr:eq(' + this.fila + ') td:eq(3)').text($('#e24estudios').val());
    $('#o2titulo_prof tr:eq(' + this.fila + ') td:eq(4)').text($('#e25sistuacion').val());
    $('#e2editar').modal('hide');
}
function a3agregar() {
    $('#a3agregar').modal();
}
function a3guardar(tab) {
    var f1 = $('#a31otros').val();
    var f2 = $('#a32especialidad').val();
    var f3 = $('#a33fecha').val();
    var f4 = $('#a34estudios').val();
    var f5 = $('#a35sistuacion').val();

    tab.row.add([
        f1,
        f2,
        f3,
        f4,
        f5, 'Configurando..'
    ]).draw(false);
    $('#a3agregar').modal('hide');


}
function e3editar(fila) {
    var nom_tabl = '#o3otros_estudios';
    var f1 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(0)').text();
    var f2 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(1)').text();
    var f3 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(2)').text();
    var f4 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(3)').text();
    var f5 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(4)').text();

    $('#e31otros').val(f1);
    $('#e32especialidad').val(f2);
    $('#e33fecha').val(f3);
    $('#e34estudios').val(f4);
    $('#e35sistuacion').val(f5);
    this.fila = fila;
    $('#e3editar').modal();
}
function e3actualizar() {
    var nom_tabl = '#o3otros_estudios';
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(0)').text($('#e31otros').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(1)').text($('#e32especialidad').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(2)').text($('#e33fecha').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(3)').text($('#e34estudios').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(4)').text($('#e35sistuacion').val());
    $('#e3editar').modal('hide');
}
function a4agregar() {
    $('#a4agregar').modal();
}
function a4guardar(tab) {
    var f1 = $('#a41tipo').val();
    var f2 = $('#a42estudios').val();
    var f3 = $('#a43especialidad').val();
    var f4 = $('#a44fecha').val();
    var f5 = $('#a45sistuacion').val();

    tab.row.add([
        f1,
        f2,
        f3,
        f4,
        f5, 'Configurando..'
    ]).draw(false);
    $('#a4agregar').modal('hide');


}
function e4editar(fila) {
    var nom_tabl = '#o4actualizaciones';
    var f1 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(0)').text();
    var f2 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(1)').text();
    var f3 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(2)').text();
    var f4 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(3)').text();
    var f5 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(4)').text();

    $('#e41tipo').val(f1);
    $('#e42estudios').val(f2);
    $('#e43especialidad').val(f3);
    $('#e44fecha').val(f4);
    $('#e45sistuacion').val(f5);
    this.fila = fila;
    $('#e4editar').modal();
}
function e4actualizar() {
    var nom_tabl = '#o4actualizaciones';
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(0)').text($('#e41tipo').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(1)').text($('#e42estudios').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(2)').text($('#e43especialidad').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(3)').text($('#e44fecha').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(4)').text($('#e45sistuacion').val());
    $('#e4editar').modal('hide');
}

function a5agregar() {
    $('#a5agregar').modal();
}
function a5guardar(tab) {
    var f1 = $('#a51idioma').val();
    var f2 = $('#a52lee').val();
    var f3 = $('#a53escribe').val();
    var f4 = $('#a54habla').val();

    tab.row.add([
        f1,
        f2,
        f3,
        f4,
        'Configurando..'
    ]).draw(false);
    $('#a5agregar').modal('hide');


}
function e5editar(fila) {
    var nom_tabl = '#o5idiomas';
    var f1 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(0)').text();
    var f2 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(1)').text();
    var f3 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(2)').text();
    var f4 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(3)').text();

    $('#e51idioma').val(f1);
    $('#e52lee').val(f2);
    $('#e53escribe').val(f3);
    $('#e54habla').val(f4);
    this.fila = fila;
    $('#e5editar').modal();
}
function e5actualizar() {
    var nom_tabl = '#o5idiomas';
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(0)').text($('#e51idioma').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(1)').text($('#e52lee').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(2)').text($('#e53escribe').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(3)').text($('#e54habla').val());
    $('#e5editar').modal('hide');
}

function a6agregar() {
    $('#a6agregar').modal();
}
function a6guardar(tab) {
    var f1 = $('#a61universidad').val();
    var f2 = $('#a62facultad').val();
    var f3 = $('#a63asigantura').val();
    var f4 = $('#a64fecha').val();
    var f5 = $('#a65experiencia').val();

    tab.row.add([
        f1,
        f2,
        f3,
        f4,
        f5,
        'Configurando..'
    ]).draw(false);
    $('#a6agregar').modal('hide');


}
function e6editar(fila) {
    var nom_tabl = '#o6explab';
    var f1 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(0)').text();
    var f2 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(1)').text();
    var f3 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(2)').text();
    var f4 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(3)').text();
    var f5 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(4)').text();

    $('#e61universidad').val(f1);
    $('#e62facultad').val(f2);
    $('#e63asigantura').val(f3);
    $('#e64fecha').val(f4);
    $('#e65experiencia').val(f5);
    this.fila = fila;
    $('#e6editar').modal();
}
function e6actualizar() {
    var nom_tabl = '#o6explab';
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(0)').text($('#e61universidad').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(1)').text($('#e62facultad').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(2)').text($('#e63asigantura').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(3)').text($('#e64fecha').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(4)').text($('#e65experiencia').val());
    $('#e6editar').modal('hide');
}


function a7agregar() {
    $('#a7agregar').modal();
}
function a7guardar(tab) {
    var f1 = $('#a71empresa').val();
    var f2 = $('#a72cargo').val();
    var f3 = $('#a73fecha').val();
    var f4 = $('#a74tiempo').val();


    tab.row.add([
        f1,
        f2,
        f3,
        f4,
        'Configurando..'
    ]).draw(false);
    $('#a7agregar').modal('hide');


}
function e7editar(fila) {
    var nom_tabl = '#o7explab2';
    var f1 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(0)').text();
    var f2 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(1)').text();
    var f3 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(2)').text();
    var f4 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(3)').text();

    $('#e71empresa').val(f1);
    $('#e72cargo').val(f2);
    $('#e73fecha').val(f3);
    $('#e74tiempo').val(f4);
    this.fila = fila;
    $('#e7editar').modal();
}
function e7actualizar() {
    var nom_tabl = '#o7explab2';
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(0)').text($('#e71empresa').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(1)').text($('#e72cargo').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(2)').text($('#e73fecha').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(3)').text($('#e74tiempo').val());
    $('#e7editar').modal('hide');
}
function a8agregar() {
    $('#a8agregar').modal();
}
function a8guardar(tab) {
    var f1 = $('#a81lugar').val();
    var f2 = $('#a82enitdad').val();
    var f3 = $('#a83fecha').val();

    tab.row.add([
        f1,
        f2,
        f3,
        'Configurando..'
    ]).draw(false);
    $('#a8agregar').modal('hide');


}
function e8editar(fila) {
    var nom_tabl = '#o8ponencia';
    var f1 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(0)').text();
    var f2 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(1)').text();
    var f3 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(2)').text();

    $('#e81lugar').val(f1);
    $('#e82enitdad').val(f2);
    $('#e83fecha').val(f3);
    this.fila = fila;
    $('#e8editar').modal();
}
function e8actualizar() {
    var nom_tabl = '#o8ponencia';
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(0)').text($('#e81lugar').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(1)').text($('#e82enitdad').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(2)').text($('#e83fecha').val());
    $('#e8editar').modal('hide');
}

//-
function a9agregar() {
    $('#a9agregar').modal();
}
function a9guardar(tab) {
    var f1 = $('#a91tipo').val();
    var f2 = $('#a92titulo').val();
    var f3 = $('#a93brevedesc').val();
    var f4 = $('#a94fecha').val();

    tab.row.add([
        f1,
        f2,
        f3,
        f4,
        'Configurando..'
    ]).draw(false);
    $('#a9agregar').modal('hide');


}
function e9editar(fila) {
    var nom_tabl = '#o9investig';
    var f1 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(0)').text();
    var f2 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(1)').text();
    var f3 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(2)').text();
    var f4 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(3)').text();
    var f5 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(4)').text();

    $('#e91tipo').val(f1);
    $('#e92titulo').val(f2);
    $('#e93brevedesc').val(f3);
    $('#e94Participacion').val(f4);
    $('#e95fecha').val(f5);
    this.fila = fila;
    $('#e9editar').modal();
}
function e9actualizar() {
    var nom_tabl = '#o9investig';
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(0)').text($('#e91tipo').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(1)').text($('#e92titulo').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(2)').text($('#e93brevedesc').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(3)').text($('#e94Participacion').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(4)').text($('#e95fecha').val());
    $('#e9editar').modal('hide');
}

function a10agregar() {
    $('#a10agregar').modal();
}
function a10guardar(tab) {
    var f1 = $('#a101tipo').val();
    var f2 = $('#a102titulo').val();
    var f3 = $('#a103fecha').val();
    var f4 = $('#a104precedencia').val();

    tab.row.add([
        f1,
        f2,
        f3,
        f4,
        'Configurando..'
    ]).draw(false);
    $('#a10agregar').modal('hide');


}
function e10editar(fila) {
    var nom_tabl = '#o10publcien';
    var f1 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(0)').text();
    var f2 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(1)').text();
    var f3 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(2)').text();
    var f4 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(3)').text();

    $('#e101tipo').val(f1);
    $('#e102titulo').val(f2);
    $('#e103fecha').val(f3);
    $('#e104precedencia').val(f3);
    this.fila = fila;
    $('#e10editar').modal();
}
function e10actualizar() {
    var nom_tabl = '#o10publcien';
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(0)').text($('#e101tipo').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(1)').text($('#e102titulo').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(2)').text($('#e103fecha').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(3)').text($('#e104precedencia').val());
    $('#e10editar').modal('hide');
}
//--
function a11agregar() {
    $('#a11agregar').modal();
}
function a11guardar(tab) {
    var f1 = $('#a111resolucion').val();
    var f2 = $('#a112asesor').val();
    var f3 = $('#a113titulo').val();
    var f4 = $('#a114universidad').val();
    var f5 = $('#a115resolucion').val();
    var f6 = $('#a116gradoaacd').val();

    tab.row.add([
        f1,
        f2,
        f3,
        f4,
        f5,
        f6,
        'Configurando..'
    ]).draw(false);
    $('#a11agregar').modal('hide');


}
function e11editar(fila) {
    var nom_tabl = '#o11astesis';
    var f1 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(0)').text();
    var f2 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(1)').text();
    var f3 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(2)').text();
    var f4 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(3)').text();
    var f5 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(4)').text();
    var f6 = $(nom_tabl + ' tr:eq(' + fila + ') td:eq(5)').text();

    $('#e111resolucion').val(f1);
    $('#e112asesor').val(f2);
    $('#e113titulo').val(f3);
    $('#e114universidad').val(f4);
    $('#e115resolucion').val(f5);
    $('#e116gradoaacd').val(f6)
   
    this.fila = fila;
    $('#e11editar').modal();
}
function e11actualizar() {
    var nom_tabl = '#o11astesis';
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(0)').text($('#e111resolucion').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(1)').text($('#e112asesor').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(2)').text($('#e113titulo').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(3)').text($('#e114universidad').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(4)').text($('#e115resolucion').val());
    $(nom_tabl + ' tr:eq(' + this.fila + ') td:eq(5)').text($('#e116gradoaacd').val());
    $('#e11editar').modal('hide');
}





