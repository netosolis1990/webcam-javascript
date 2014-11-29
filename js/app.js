$(document).ready(function() {
    //Inicializamos el div para la camara, con el tamaño y el tipo de imagen
    setTimeout(function(){
        Webcam.set({
        width: $('#foto').width(),
        height: $('#foto').height(),
        image_format: 'jpeg',
        jpeg_quality: 90
        });
        //Asignamos el id del div que utilizaremos para 
        Webcam.attach( '#camara');
    },3000);
});

//Funcion para tomar foto 
function tomarFoto() {
    Webcam.snap( function(data_uri) {
        //Vaciamos el div de la foto
        $('#foto').empty();
        //Asignamos la nueva imagen al div 
        $('#foto').html( '<img src="'+data_uri+'"/>');
    } );
}