    //Linea 1------------------------------------------------------------------------------------------------------------------------------------------------=-------------

                            //Nombre y Apellido
    let nombreyapellido = prompt("Ingresar Nombre y Apellido (no debe contener numeros)")
    if (nombreyapellido !== "" ){
        alert("El Nombre y Apellido fueron ingresados correctamente")
    }else{
        alert("ERROR: Ingresar nombre y apellido validos.")
    }
                            //Nombre y Apellido
   

                            //Contraseña
    let contrasenia = prompt("Ingresar Contraseña") 
    if (contrasenia !== "") {
        alert("La Contraseña fue ingresada correctamente")
    }else{
        alert("ERROR: Ingresar contraseña valida.")        
    } 
                            //Contraseña

    console.log(`El nombre y apellido es ${nombreyapellido} de la session la cual tiene una contraseña la cual es ${contrasenia}`)
        alert(`Su registro de session fue realizado correctamente. Su Nombre y Apellido ingresados fueron ${nombreyapellido}. Su contraseña ingresada fue ${contrasenia}`)


    let resetSession = prompt("Si desea cambiar su registro de session totalmente escriba: SI. Si desea dejarlo como esta actualmente escriba: NO. Si desea modificar unicamente el nombre y apellido escriba: Nombre y Apellido. Si desea modificar unicamente la contraseña escriba: Contraseña.")
        console.log(resetSession)
    if((resetSession !== "") && ((resetSession == "SI") || (resetSession == "si") || (resetSession == "NO") || (resetSession == "no") || (resetSession == "Nombre y Apellido") || (resetSession == "Contraseña"))){
            console.log("Gracias por registrarse en PizzSpeed")
    }else{
        alert("ERROR: Invalido")
    }

        //-------------------------------------------------------------- RESET- Opciones Individuales---------------------------------------------------------------

                            //Nombre y Apellido
    if(resetSession == "Nombre y Apellido"){
        let nombreyApellido = prompt("Ingresar Nombre y Apellido")
            alert("El Nombre y Apellido fueron modificados correctamente")

            console.log(`Nombre y Apellido modificado a = ${nombreyApellido} `)

            alert(`Su registro de session fue modificado correctamente. Su Nombre y Apellido actuales son ${nombreyApellido}. Su contraseña no fue modificada por lo que es la siguiente: ${contrasenia}`)

            alert( nombreyApellido + " gracias por registrarte en PizzSpeed")
                console.log("Gracias por registrarse en PizzSpeed")
    }

                    //Nombre y Apellido

                    //Contraseña
    if(resetSession == "Contraseña"){
        let contraSenia = prompt("Ingresar Contraseña")
            alert("La Contraseña fue modificada correctamente")

        console.log(`Contraseña modificada a = ${contraSenia}`)

            alert(`Su registro de session fue modificado correctamente. Su Nombre y Apellido no fueron modificados, por lo que son los siguientes: ${nombreyapellido}. Su contraseña actual es ${contraSenia}`)

            alert( nombreyapellido + " gracias por registrarte en PizzSpeed")
                console.log("Gracias por registrarse en PizzSpeed")
    }
                    //Contraseña
        //-------------------------------------------------------------- RESET- Opciones Individuales---------------------------------------------------------------




        //--------------------------------------------------------------Opciones Generales--------------------------------------------------------------------------

                        //Nombre y Apellido
    if((resetSession == "SI") || (resetSession == "si")) {

        let nombreyapellido2 = prompt("Ingresar Nombre y Apellido")
        alert("El Nombre y Apellido fueron modificados correctamente")
    
                        //Nombre y Apellido

                        //Contraseña
    let contrasenia2 = prompt("Ingresar Contraseña")

        alert("La Contraseña fue modificada correctamente")

        console.log(`Nombre y Apellido modificados a = ${nombreyapellido2}. Contraseña modificada a = ${contrasenia2}`)

        alert( nombreyapellido2 + " gracias por registrarte en PizzSpeed")
        console.log("Gracias por registrarse en PizzSpeed")
    }
                        //Contraseña
 

    if((resetSession == "NO") || (resetSession == "no")){
        alert( nombreyapellido + " gracias por registrarte en PizzSpeed")
            console.log("Gracias por registrarse en PizzSpeed")
            
        let inicioSession = prompt("Nombre y Apellido")
        if((inicioSession !== "") && (inicioSession == `${nombreyapellido}`) && (resetSession == "NO") || (resetSession == "no")){
            console.log(`${inicioSession}`)
        }else{
            alert("ERROR: Nombre y Apellido incorrectos")
        }
    
        let iniciosession = prompt("Contraseña")
        if((iniciosession !== "") && (iniciosession == `${contrasenia}`)){
            console.log(`${iniciosession}`)
    
            alert("Inicio de session completado correctamente")
    
            console.log(`INICIO DE SESSION CORRECTO: Nombre y Apellido: ${nombreyapellido}. Contraseña: ${contrasenia}`)
        }else{
            alert("ERROR: Contraseña incorrecta")
            alert("Inicio de session completado incorrectamente")
    
            console.log(`INICIO DE SESSION INCORRECTO: Nombre y Apellido: ${inicioSession}. Contraseña: ${iniciosession}`)
        }
    }
        //--------------------------------------------------------------Opciones Generales--------------------------------------------------------------------------

//Inicio de Session------------------------------------------------------------------------------------------------------------------------------------=------------------
//Inicio de Session------------------------------------------------------------------------------------------------------------------------------------------=------------




 



    //Linea 1------------------------------------------------------------------------------------------------------------------------------------------------=-------------


