



//                            // FUNCION DE INICIO y REINICIO

function reinicioDeError () {
    $('document').ready( $( '.errorUsuarioIncorrecto').hide()  );

    $('#inputEmail').click( () => {
        inputEmail.style.background =  'white'
        $( '.errorUsuarioIncorrecto').hide() 
    })
    $('#inputContrasenia').click( () => {
        inputContrasenia.style.background = 'white'
        $( '.errorUsuarioIncorrecto').hide() 
    })
}
reinicioDeError()


//                                                  // ********* FIN FUNCION DE INICIO y REINICIO *********
//                                                  // ********** INICIO DE SESiON **********
//                                                  // ********** USANDO JQUERY *********

$( '#formularioInicioSesion').submit(  (e) =>{

    e.preventDefault()
    const inicioEmail = document.querySelector( '#inputEmail').value ;
    const inicioContrasenia = document.querySelector( '#inputContrasenia').value;


    if( inicioEmail ==  sessionStorage.getItem( 'usuario', inicioEmail) && inicioContrasenia == sessionStorage.getItem( 'contrasenia', inicioContrasenia) ) {
        window.location.href  = 'prestamo.html'  ;
        inputEmail.style.background =  'green'
        inputContrasenia.style.background = 'green'
        botonIndex.style.background = 'green'
        
    }else {
        $("#inputEmail").css("background", "red")

        inputEmail.style.background =  'red'
        inputContrasenia.style.background = 'red'
        $( '.errorUsuarioIncorrecto').show() 
        
    }
})

//                                                  // ********** FIN INICIO DE SESiON **********
// //                                                 //********** INICIO LINK REGISTRARSE **********

$( '#registrarse').click(  () => {

    window.location.href  = 'registroUsuario.html'  ;
    
})


// //                                                //********** FIN LINK REGISTRARSE **********
// //                                               //********** INICIO FORMULARIO REGISTRO **********

// document.querySelector( '#formularioInicioSesionn').addEventListener( 'submit', (e) =>{

//     e.preventDefault()
//     boton.style.background =  'green'


//     const inicioEmail = document.querySelector( '#inputEmail').value ;
//     const inicioContrasenia = document.querySelector( '#inputContrasenia').value;
//     sessionStorage.setItem( 'usuario', inicioEmail);
//     sessionStorage.setItem( 'contrasenia', inicioContrasenia);
//    console.log(inicioEmail, inicioContrasenia)


//    window.location.href  = 'index.html'  ;

// })

// //                                               // ********** FIN FORMULARIO REGISTRO **********

