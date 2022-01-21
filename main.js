
let nombre;
let edad;
let sueldo;
let capitalSolicitado;
let interes;
let limiteDePagoUsuario;
let cuotasSolicitada;
let cuotaAPagar;
let totalAPagar;
let usuarios = [];
let agregar = true; 


class Usuario {
    constructor( nombre, edad, sueldo, capitalSolicitado, interes, limiteDePagoUsuario, cuotasSolicitada, cuotaAPagar ){
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

    pagoDeCuotas( pagoDeCuota ){
        this.totalAPagar -= pagoDeCuota;
    }
}

function saludo(){
    alert( 'Gracias por Su visita, saludos!')
}
function mensajeError() {
    alert( 'La respuesta es incorrecta, vuelve a intentar ' )
}

do {

    function inicio(){

        alert( 'Bienvenidos al sistemas de prestamos JR.  \n  A continuacion le pediremos algunos datos para comenzar. ')
        let inicio = true
        while(inicio){

            nombre = prompt( 'Ingrese su nombre');
            edad = Number( prompt( ' Ingrese su edad') );
            
            if( true == isNaN( nombre) && ( false == isNaN( edad ) ) ) {

                inicio = false;

                while(true){
                    alert( ` Bienvenido/a ${nombre}`) 
                    let inicio = prompt( ' Desea consultar por alguno de nuestos prestamos. Si/No?').toLowerCase();
                    if ( inicio == 'si'){
                        ingresoDeCapital()
                        break
                    }else if (inicio == 'no'){
                        saludo()
                        break
                    }else{
                        mensajeError()
                    }
                }
            }else{
                alert( ' Algunos de los datos no fueron correctamente cargados, Use letras para nombre y numeros para edad.')
            }
        }
    }
    
    function ingresoDeCapital () {
        
        sueldo = Number( prompt( `Muy bien ${nombre}, Necesitamos que  nos facilites el monto de tu sueldo mensueal ( En numeros enteros y sin punto) :` ));
        capitalSolicitado = Number( prompt( `Ahora ingrese el capital a solicitar : `))
        cuotasSolicitada = Number( prompt( `Ahora ingrese la cantidad de cuotas a solicitar : `))
    
        while(true){

            interes = cuotasSolicitada*0.1;
            totalAPagar = capitalSolicitado * interes +capitalSolicitado;
            limiteDePagoUsuario = sueldo*0.25
            cuotaAPagar = totalAPagar / cuotasSolicitada;

            if( cuotaAPagar <= limiteDePagoUsuario){

                break
            }else{
                alert(` Disculpe SR/A ${nombre}, no es posible generer el prestamo solicitado`)
                let reiniciar = prompt( ' Quieres volver a cargar los datos.? Si/No : ' ).toLocaleLowerCase();
    
                if( reiniciar != 'no'){
                    sueldo = Number( prompt( `Muy bien ${nombre}, Necesitamos que  nos facilites el monto de tu sueldo mensueal ( En numeros enteros y sin punto) :` ));
                    capitalSolicitado = Number( prompt( `Ahora ingrese el capital a solicitar : `))
                    cuotasSolicitada = Number( prompt( `Ahora ingrese la cantidad de cuotas a solicitar : `))
                }else{
                    saludo()
                    break
                }
            }
        }
        facturacion()
    }
    
    function facturacion () {
    
        const usuarioNuevo = new Usuario( nombre, edad, sueldo, capitalSolicitado, interes, limiteDePagoUsuario, cuotasSolicitada, cuotaAPagar )
        usuarios.push(usuarioNuevo)
        console.warn(usuarioNuevo)
        const usuarioEnJson = JSON.stringify(usuarioNuevo)
        console.log(usuarioEnJson)

        
        localStorage.setItem( 'user', usuarios )
    
        alert( `
            * Datos del prestamo solicitado/a para el Usuario ${nombre} de ${edad} años : \n
            * Sueldo ingresado : $${sueldo}
            * Capital solicitados : $${capitalSolicitado} 
            * Cantidad de cuotas solicitadas : ${cuotasSolicitada}
            * Total a pagar con intereses : $${totalAPagar}
            * Interes : % ${interes*100}
            * Valor de la cuota : $${cuotaAPagar}
            * Limite de pago del usuario: $${limiteDePagoUsuario}
            * Cuotas acorde al sueldo ingresado :
        `);
    }

    
    inicio()

    function reiniciar(){

        let inicio = true
        while( inicio ){

            let reiniciar = prompt(' Agregar otro usuario.? ').toLocaleLowerCase()
            
            if( reiniciar == 'si' ){
                agregar = true
                inicio = false
            }else if( reiniciar == 'no' ){
                saludo()
                agregar = false
                inicio = false
            }else{
                mensajeError()
            }
        }
    }
    
    reiniciar()
    
} while ( agregar );

console.log( usuarios )

function buscar(){

    let inicio = true

    while( inicio ){

        let inicio = prompt( ' Quieres buscar algun usuario.? Si/No ')

        if( inicio == 'si' ){

            let usuarioABuscar = prompt( 'Ingrese el nombre del usuario que desea : ')
            let usuarioEncontrado = usuarios.filter( ( usuario ) => usuario.nombre == usuarioABuscar );
            console.log( usuarioEncontrado )
    
        }else if( inicio == 'no'){
            saludo()
            break
        }else{
            mensajeError()

            let pago =  prompt( 'Ingrese el pago : ')

            const nuevaListaDeUsuarios = usuarios.map( ( usuario ) =>  usuario.pagoDeCuotas( pago) )
            console.log( nuevaListaDeUsuarios)
        }
    }
}
buscar()




