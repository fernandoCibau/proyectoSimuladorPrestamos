


       let nombre = localStorage.getItem( 'nombre')
       let edad = localStorage.getItem( 'edad')
       let sueldo = localStorage.getItem( 'sueldo')
       let capitalSolicitado = localStorage.getItem( 'capitalSolicitado')
       let interes = localStorage.getItem( 'interes')
       let limiteDePagoUsuario = localStorage.getItem( 'limiteDePagoUsuario')
       let cuotasSolicitadas = localStorage.getItem( 'cuotasSolicitadas')
       let cuotaAPagar = localStorage.getItem( 'cuotaAPagar')
       let totalAPagar = localStorage.getItem( 'totalAPagar')

       console.log(nombre ,edad, sueldo,capitalSolicitado)



        let ista = document.querySelector( '.resultadoContenedor');
        let div = document.createElement( 'div' )

              

        div.innerHTML = `
        <div class="resultadoContenedor">
        <div id="cabezaDeSolicitud">
            <p>Nombre :  ${nombre}</p>
            <p>Dni :</p>
            <p>Edad :   ${edad}</p>
        </div>

        <div id="reciboContenedor">
            <ul>
                <li>Id  :</li>
                <li>Sueldo:</li>
                <li>Capital Solicitado  :</li>
                <li>Interes  :</li>
                <li>Limite de pago del usuario  :</li>
                <li>Cuotas solicitadas  :</li>
                <li> Cuota a pagar  :</li>
                <li>Total a pagar  :</li>
            </ul>
            <ul class='listaDatos'>
            <li>Id  :</li>
            <li>$ ${sueldo}</li>
            <li>$ ${capitalSolicitado}</li>
            <li> % ${interes}</li>
            <li>${limiteDePagoUsuario}</li>
            <li>${cuotasSolicitadas}</li>
            <li>$ ${cuotaAPagar}</li>
            <li>$ ${totalAPagar}</li>
        </ul>
        </div>
        `;

         ista.appendChild(div)
