

document.querySelector( '#formularioInicioSesion').addEventListener( 'submit', (e) =>{

    e.preventDefault()
    boton.style.background =  'green'

    let span = document.createElement( 'span' );
    let divErrorRegistro = document.querySelector( '.mensajeErrorRegistro') ;

    $('#formularioInicioSesion').click( () => {
        $( '.mensajeErrorRegistro' ).hide()
        span.innerHTML = ` `
    })


    const inicioEmail = document.querySelector( '#inputEmail').value ;
    const inicioContrasenia = document.querySelector( '#inputContrasenia').value;
    const inicioRepitaContrasenia = document.querySelector( '#inputRepitaContrasenia').value;
    

    if ( inicioContrasenia === inicioRepitaContrasenia) {
        sessionStorage.setItem( 'usuario', inicioEmail);
        sessionStorage.setItem( 'contrasenia', inicioContrasenia);
        sessionStorage.setItem( 'inicioRepitaContrasenia', inicioRepitaContrasenia);

        window.location.href  = 'index.html'  ;
    }else{
        $( '.mensajeErrorRegistro' ).show()
        span.innerHTML = `Las contraseñas son diferentes`
    }

    divErrorRegistro.appendChild( span )


})

