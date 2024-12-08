$(document).ready(function () {

    // Tabla de Arrays 
    let solicitudes = [{
        "id": 1,
        "nombre": "Juan",
        "apellido": "Secreto"
        }, {
        "id": 2,
        "nombre": "Antonio",
        "apellido": "Pero"
        }, {
        "id": 3,
        "nombre": "de la Encarnación",
        "apellido": "No tanto"
         }, {
        "id": 4,
        "nombre": "Rey",
        "apellido": "Contreras"
        }
        ];


    // Evento click para que cargue el array en tabla
$("#boton_maestro").on('click', function (event) {
    let $maestro = $('#maestro tbody');

    for (i = 0; i < solicitudes.length; i++) {
        let $linea = $('<tr>');
        $linea.append($('<td>').text(solicitudes[i].id));
        $linea.append($('<td>').text(solicitudes[i].nombre));
        $linea.append($('<td>').text(solicitudes[i].apellido));
        $maestro.append($linea);
        }

    $("#boton_maestro").hide();
    $("#boton_texto").show();
    
    
    });
});
