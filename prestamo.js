

//                                                                          CLASE USUARIO

let listas = []


$( 'document' ).ready( () => {
    $( '.mensajeErrorSueldo' ).hide()
} )


class Usuario {
    constructor( id, nombre, edad, sueldo, capitalSolicitado, interes, limiteDePagoUsuario, cuotasSolicitada, cuotaAPagar, totalAPagar ){
        this.id = id;
        this.edad = edad;
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
        this.capitalSolicitado = capitalSolicitado;
        this.interes = interes;
        this.limiteDePagoUsuario = limiteDePagoUsuario;
        this.cuotasSolicitada = cuotasSolicitada;
        this.cuotaAPagar = cuotaAPagar;
        this.totalAPagar = totalAPagar
    }

    // pagoDeCuotas( pagoDeCuota ){
    //     this.totalAPagar -= pagoDeCuota;
    // }
}


//                                                                              CLASE DE  ITERACION  CON HTML

class Ui{
    crearUsuario(usuarioNuevo){
        //                     // CARGA DE USUARIO A LA TABLA EN HTML
        const usuariosLista = document.querySelector( 'table');
        const tbody = document.createElement( 'tbody');

     
            tbody.innerHTML = `
                <tr>
                     <td><input type='radio' id='check' name='radio' value="${usuarioNuevo.id}"></td>
                    <td  id="D">${usuarioNuevo.id}</td>
                    <td>${usuarioNuevo.nombre}</td>
                    <td>${usuarioNuevo.edad}</td>
                    <td>${usuarioNuevo.sueldo}</td>
                    <td>${usuarioNuevo.capitalSolicitado}</td>
                    <td>${usuarioNuevo.interes}</td>
                    <td>${usuarioNuevo.limiteDePagoUsuario}</td>
                    <td>${usuarioNuevo.cuotasSolicitada}</td>
                    <td>${usuarioNuevo.cuotaAPagar}</td>
                    <td>${usuarioNuevo.totalAPagar}</td>
                    <td><a id = 'eliminarUsuario' class = 'btn btn-danger' name='eliminarTarjeta' >Eliminar</a></td>
                </tr>
            `;
        
        usuariosLista.appendChild( tbody )
        
    }

    vaciarFormulario() {
        document.querySelector( '#formularioUsuario' ).reset();
    }

    eliminarUsuario( e) {
        if(e.name == 'eliminarTarjeta') {
            e.parentElement.parentElement.remove()
        }
    }

    envioDeSolicitud( e ) {
        if( e.name === 'envioSolicitud'){
            this.checkedRario
        }
    }

    checkedRario(usuarioNuevo){
   
        document.querySelector( '#btnRadio').addEventListener( 'click', () => {

            let inputRadio = document.querySelector('#ff').radio                 // LLAMAMOS A UN ATRIBUTO

            for (let i = 0 ; i < inputRadio.length; i ++ ){

                if (inputRadio[i].checked) {

                    if( inputRadio[i].value == usuarioNuevo.id){
                        let solicitudPrestamo = 
                        {
                            Id: `${usuarioNuevo.id}`,
                            nombre: `${usuarioNuevo.nombre}`,
                            edad: `${usuarioNuevo.edad}`,
                            sueldo: `${usuarioNuevo.sueldo}`,
                            capitalSolicitado: `${usuarioNuevo.capitalSolicitado}`,
                            interes: `${usuarioNuevo.interes}`,
                            limiteDePagoUsuario: `${usuarioNuevo.limiteDePagoUsuario}`,
                            cuotasSolicitada: `${usuarioNuevo.cuotasSolicitada}`,
                            cuotaAPagar: `${usuarioNuevo.cuotaAPagar}`,
                            totalAPagar: `${usuarioNuevo.totalAPagar}`,
                            
                        }


                        //           //  ENVIAMOS DATOS DEL USUARIO A LA API
                        const APIURL = 'https://jsonplaceholder.typicode.com/posts ' ;
                    
                            $.ajax({
                                method : "POST",
                                url : APIURL,
                                data : solicitudPrestamo,
                                //                        //  OBTENEMOS DATOS DESDE LA API Y LO CARGAMOS A LOCALSTORAGE
                                success: function(respuesta){
                    
                                    localStorage.setItem( 'id', respuesta.id);
                                    localStorage.setItem( 'nombre', respuesta.nombre);
                                    localStorage.setItem( 'edad', respuesta.edad);
                                    localStorage.setItem( 'sueldo', respuesta.sueldo);
                                    localStorage.setItem( 'capitalSolicitado', respuesta.capitalSolicitado);
                                    localStorage.setItem( 'interes', respuesta.interes);
                                    localStorage.setItem( 'limiteDePagoUsuario', respuesta.limiteDePagoUsuario);
                                    localStorage.setItem( 'cuotasSolicitadas', respuesta.cuotasSolicitada);
                                    localStorage.setItem( 'cuotaAPagar', respuesta.cuotaAPagar);
                                    localStorage.setItem( 'totalAPagar', respuesta.totalAPagar);
                                    
                                    window.location.href  = 'resultado.html'  ;
    
                                
                                }
                            });


                    }
                }
            }
        })
    }
}


//                                                                 ********** TOMA DE DATOS HTML **********

document.querySelector('#formularioUsuario').addEventListener( 'submit', (e) => {

    e.preventDefault()
    boton.style.background =  'green'
    const nombre = document.querySelector( '#inputNombre').value;
    const edad = document.querySelector( '#inputEdad').value;
    const sueldo = parseInt( document.querySelector( '#inputSueldo').value );
    const capital = parseInt( document.querySelector( '#inputCapital').value );
    const cuotas =  parseInt( document.querySelector( '#inputCuotas').value );

    calculoDeInteres(nombre, edad, sueldo, capital, cuotas )

})


//                                                                  ********** CALCULO DE INTERES **********

function calculoDeInteres(nombre, edad, sueldo, capitalSolicitado, cuotasSolicitada ) {

    let divErrorSueldo = document.querySelector( '.mensajeErrorSueldo') ;
    let span = document.createElement( 'span' );

    $('#formularioUsuario').click( () => {
        $( '.mensajeErrorSueldo').hide() 
        span.innerHTML = ` `;
    })

    let interes = cuotasSolicitada*10 ;
    let totalAPagar = parseInt( ((capitalSolicitado * interes)/100)+ capitalSolicitado );
    let limiteDePagoUsuario = sueldo*0.25
    let cuotaAPagar =parseInt ( totalAPagar / cuotasSolicitada );
    let id = listas.length

    if( cuotaAPagar <= limiteDePagoUsuario){
        cargamosUsuario(id, nombre, edad, sueldo, capitalSolicitado, interes, limiteDePagoUsuario, cuotasSolicitada, cuotaAPagar, totalAPagar)
    }else{
        //   CREAMOS MENSAJE DE ERROR
        $( '.mensajeErrorSueldo').show()
        span.innerHTML = `
        Disculpe SR/A ${nombre}, no es posible generer el prestamo solicitado, La  cuota supera el 25% de su sueldo
        `;
    }

    divErrorSueldo.appendChild( span );

}

//                                                                 ********** CARGAMOS USUARIO **********

function cargamosUsuario( id, nombre, edad, sueldo, capitalSolicitado, interes, limiteDePagoUsuario, cuotasSolicitada, cuotaAPagar, totalAPagar ) {

    const usuarioNuevo = new Usuario( id ,nombre, edad, sueldo, capitalSolicitado, interes, limiteDePagoUsuario, cuotasSolicitada, cuotaAPagar, totalAPagar )
    // console.log(usuarioNuevo)
    listas.push(usuarioNuevo)

    const ui =  new Ui()
    ui.crearUsuario(usuarioNuevo)
    ui.vaciarFormulario()

    ui.checkedRario( usuarioNuevo )

    console.log(usuarioNuevo)
}

//                                    ********** BOTONES ELIMINAR USUARIO y ENVIAR FORMULARIO **********

document.querySelector( '.datosDelPrestamo').addEventListener( 'click', (e) => {
    const ui = new Ui();
    ui.eliminarUsuario(e.target)
    ui.envioDeSolicitud(e.target)
    
})

