$(document).ready(function() {
    solicitudes=["Mensaje", "Hola", "Adios"];

    for(i= 0 ; i < solicitudes.length; i++) {
        $("#maestro").append(
            $("<li>").text(solicitudes[i])
        );
    }
});