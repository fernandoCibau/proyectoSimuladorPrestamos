



// let nombre;
// let edad;
// let sueldo;
// let capitalSolicitado;
// let interes;
// let limiteDePagoUsuario;
// let cuotasSolicitada;
// let cuotaAPagar;
// let totalAPagar;
// let usuarios = [];
// let agregar = true; 


// class Usuario {
//     constructor( nombre, edad, sueldo, capitalSolicitado, interes, limiteDePagoUsuario, cuotasSolicitada, cuotaAPagar ){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.sueldo = sueldo;
//         this.capitalSolicitado = capitalSolicitado;
//         this.interes = interes;
//         this.limiteDePagoUsuario = limiteDePagoUsuario;
//         this.cuotasSolicitada = cuotasSolicitada;
//         this.cuotaAPagar = cuotaAPagar;
//         this.totalAPagar = totalAPagar
//     }

//     pagoDeCuotas( pagoDeCuota ){
//         this.totalAPagar -= pagoDeCuota;
//     }
// }


// do {

//     // function inicio(){

//     //     alert( 'Bienvenidos al sistemas de prestamos JR.  \n  A continuacion le pediremos algunos datos para comenzar. ')
//     //     let inicio = true
//     //     while(inicio){

//     //         nombre = prompt( 'Ingrese su nombre');
//     //         edad = Number( prompt( ' Ingrese su edad') );
            
//     //         if( true == isNaN( nombre) && ( false == isNaN( edad ) ) ) {

//     //             inicio = false;

//     //             while(true){
//     //                 alert( ` Bienvenido/a ${nombre}`) 
//     //                 let inicio = prompt( ' Desea consultar por alguno de nuestos prestamos. Si/No?').toLowerCase();
//     //                 if ( inicio == 'si'){
//     //                     ingresoDeCapital()
//     //                     break
//     //                 }else if (inicio == 'no'){
//     //                     saludo()
//     //                     break
//     //                 }else{
//     //                     mensajeError()
//     //                 }
//     //             }
//     //         }else{
//     //             alert( ' Algunos de los datos no fueron correctamente cargados, Use letras para nombre y numeros para edad.')
//     //         }
//     //     }
//     // }

    

    
//     function ingresoDeCapital () {
        
//         while(true){

//             sueldo = Number( prompt( `Muy bien ${nombre}, Necesitamos que  nos facilites el monto de tu sueldo mensueal ( En numeros enteros y sin punto) :` ));
//             capitalSolicitado = Number( prompt( `Ahora ingrese el capital a solicitar : `))
//             cuotasSolicitada = Number( prompt( `Ahora ingrese la cantidad de cuotas a solicitar : `))

//             interes = cuotasSolicitada*0.1 ;
//             totalAPagar = capitalSolicitado * interes +capitalSolicitado;
//             limiteDePagoUsuario = sueldo*0.25
//             cuotaAPagar =parseInt ( totalAPagar / cuotasSolicitada );

//             if( cuotaAPagar <= limiteDePagoUsuario){

//                 break
//             }else{

//                 alert(` Disculpe SR/A ${nombre}, no es posible generer el prestamo solicitado`)
//             }
//         }
//         facturacion()
//     }
    
//     function facturacion () {

//         const usuarioNuevo = new Usuario( nombre, edad, sueldo, capitalSolicitado, interes, limiteDePagoUsuario, cuotasSolicitada, cuotaAPagar )
//         usuarios.push(usuarioNuevo)
//         console.warn(usuarioNuevo)
//         const usuarioEnJson = JSON.stringify(usuarioNuevo)
//         console.log(usuarioEnJson)
        
//         localStorage.setItem( 'user', usuarioEnJson )

//         //         // MOSTRANDO EN EL HTML

//         for ( let user of usuarios) {

//             let td = document.getElementsByTagName( 'td')
//             let datosDelPrestamo = Object.values(usuarioNuevo)
             
//             // let datosDelPrestamo = [`Nombre : ${user.nombre}`, `Edad : ${user.edad}`, `Sueldo : ${user.sueldo}`, `Capital Solicitado : ${user.capitalSolicitado}`,  `Cuotas Solicitada : ${cuotasSolicitada}`, `Total a pagar : ${user.totalAPagar}`, `Interes : %${user.interes*100}`, `Cuota a pagar $${user.cuotaAPagar}`, `Limite de pago : $${user.limiteDePagoUsuario}`]

            
//             let i = 0
//             for( let elementoP of td){
//                 elementoP.innerHTML = datosDelPrestamo[i]
//                 i++
//             }

//         }
        
//     }

//     function reiniciar(){

//         let inicio = true
//         while( inicio ){

//             let reiniciar = prompt(' Agregar otro usuario.? ').toLocaleLowerCase()
            
//             if( reiniciar == 'si' ){
//                 agregar = true
//                 inicio = false
//             }else if( reiniciar == 'no' ){
//                 saludo()
//                 agregar = false
//                 inicio = false
//             }else{
//                 mensajeError()
//             }
//         }
//     }

//     inicio()
//     reiniciar()
    
// } while ( agregar );

// console.log( usuarios )


//                                                                                   //   BUSCAMOS UN USUARIO
// function buscar(){

//     let inicio = true

//     while( inicio ){

//         let inicio = prompt( ' Quieres buscar algun usuario.? Si/No ')

//         if( inicio == 'si' ){

//             let usuarioABuscar = prompt( 'Ingrese el nombre del usuario que desea : ')
//             let usuarioEncontrado = usuarios.filter( ( usuario ) => usuario.nombre == usuarioABuscar );
//             console.log( usuarioEncontrado )
    
//             let e = Object.values(usuarioEncontrado)
//             console.log(e)

//         }else if( inicio == 'no'){
//             saludo()
//             break
//         }else{
//             mensajeError()

//             let pago =  prompt( 'Ingrese el pago : ')

//             const nuevaListaDeUsuarios = usuarios.map( ( usuario ) =>  usuario.pagoDeCuotas( pago) )
//             console.log( nuevaListaDeUsuarios)
//         }
//     }
// }
// buscar()


// //    /// PRUEBA NO   ES DE  PROYECTO

        
//                                                                              //////////// cambio de main

//                                                                          CLASE USUARIO

let listas = []
let listasJson = []
let id ;
let listaId = []

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
        const usuariosLista = document.querySelector( 'table');
        const tbody = document.createElement( 'tbody');

        let u = JSON.stringify (usuarioNuevo)
        listasJson.push(u)

        console.log(listasJson)
        console.log(listas)

        this.checkedRario(usuarioNuevo)

            
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



            //               // CHECKED
            // let miCheck = document.querySelector( '#check' ).checked
            // if(miCheck){
            //     document.querySelector('ff')
            //     let a = document.querySelector('table')
            //     // console.log(a)

            //   }else{
            //       alert('no esta seleccionado')
            //   }
  
            
        //     const inicioContrasenia = document.querySelector( '#inputContrasenia').value;
        //     sessionStorage.setItem( 'usuario', usuarioNuevo.nombre);
        //     sessionStorage.setItem( 'contrasenia', inicioContrasenia);
        //    console.log(inicioEmail, inicioContrasenia)
        
        }
    }

    checkedRario(usuarioNuevo){
   
        document.querySelector( '#btnRadio').addEventListener( 'click', () => {

            let ista = document.querySelector( '.ad');
            let p = document.createElement( 'h1');

            let inputRadio = document.querySelector('#ff').radio                 // LLAMAMOS A UN ATRIBUTO

            for (let i = 0 ; i < inputRadio.length; i ++ ){

                if (inputRadio[i].checked) {

                    // alert( inputRadio[i].value)
                    if( inputRadio[i].value == usuarioNuevo.id){
                        let solicitudPrestamo = 
                        {
                            Id: `${usuarioNuevo.id}`,
                            nombre: `${usuarioNuevo.nombre}`,
                            edad: `${usuarioNuevo.edad}`
                        }
                        console.log(solicitudPrestamo)

                        p.innerHTML = `
                        holaa
                        `;

                        const APIURL = 'https://jsonplaceholder.typicode.com/posts ' ;
                        $("body").prepend('<button id="btn1">ENVIAR API</button> ');

                        // scuchamos el evento click del botón agregado
                    $("#btn1").click(() => {
                        $.ajax({
                            method : "POST",
                            url : APIURL,
                            data : solicitudPrestamo,
                            success: function(respuesta){
                
                            $("body").prepend(`<div style= 'color: red' >${respuesta.id},${respuesta.nombre}</div>`);
                        }
                        });
                    });

                        // ista.appendChild( p )
                        window.location.href  = 'resultado.html'  ;
    
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
        // inputContrasenia.style.background = 'white'
        $( '.mensajeErrorSueldo').hide() 
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


}

//                                    ********** BOTONES ELIMINAR USUARIO y ENVIAR FORMULARIO **********

document.querySelector( '.datosDelPrestamo').addEventListener( 'click', (e) => {
    const ui = new Ui();
    ui.eliminarUsuario(e.target)
    ui.envioDeSolicitud(e.target)
    
})


// ++++++++++++++++++++++++++

// $( document ).ready(function() {

//         //Declaramos la url del API
//     const APIURL = 'https://jsonplaceholder.typicode.com/posts ' ;

//         //Declaramos la información a enviar
//     const infoPost = { 
//         nombre: "Fernando",
//         profesion: "Programador" 
//     };

//         //Agregamos un botón con jQuery
//     $("body").prepend('<button id="btn1">ENVIAR API</button> ');

//         // scuchamos el evento click del botón agregado
//     $("#btn1").click(() => {
//         $.ajax({
//             method : "POST",
//             url : APIURL,
//             data : infoPost,
//             success: function(respuesta){

//             $("body").prepend(`<div style= 'color: red' >${respuesta.nombre},${respuesta.profesion}</div>`);
//         }
//         });
//     });
// });

