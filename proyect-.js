
    let repeate9 = false
    let repeate8 = false
    let repeate7 = false
    let repeate6 = false
    let repeate5 = false
    let repeate4 = false
    let repeate3 = false                     
    let repeate2 = false 
    let repeatenya = false
                                //Sin Funcionalidad de momento
                                
   while (!repeate3){
    break
    let srIs = prompt("1) Si desea registrarse escriba: Register                                                     2) Si desea iniciar session escriba: Inicio Session")
    if ((srIs !== "") && (srIs == "Register") || (srIs == "Inicio Session")){
        repeate3 = true 
        console.log (`${srIs}`)
    }else{
        alert("ERROR: Ingresar una de las opciones otorgadas")
        continue
    }
}                                           
                                //Sin funcionalidad de momento



                                //Nombre y Apellido   
    while (!repeatenya){
        let nombreyapellido = prompt("Ingresar Nombre y Apellido (no debe contener numeros)")
        if (nombreyapellido !== ""){
            alert("El Nombre y Apellido fueron ingresados correctamente")
            repeatenya = true
            console.log(`Nombre y Apellido: ${nombreyapellido}, queda registrado`)
        }else{
            alert("ERROR: Ingresar nombre y apellido validos")
            console.log(`El nombre y Apellido adjunto: ${nombreyapellido} son invalidos`)
            continue
        }
                                //Nombre y Apellido


                                    //Contraseña
        while (!repeate2){
            let contrasenia = prompt("Ingresar Contraseña") 
            if (contrasenia !== ""){
                alert("La Contraseña fue ingresada correctamente")
                repeate2 = true
                console.log(`Contraseña: ${contrasenia}, queda registrada`) 
            }else{
                alert("ERROR: Ingresar contraseña valida")     
                console.log(`Contraseña adjunta: ${contrasenia} es invalida`)
                continue
            }
                                    //Contraseña
        alert(`REGISTRO de session realizado correctamente: 

        1)Nombre y Apellido ingresados: ${nombreyapellido}. 
        2)Contraseña ingresada: ${contrasenia}.`)
        console.log(`Nombre y Apellido ingresados: ${nombreyapellido}. Contraseña ingresada: ${contrasenia}; de la session actual registrada.`)
            



        let resetSession = prompt(`1) Si desea cambiar su registro de session totalmente escriba: SI
2) Si desea dejarlo como esta actualmente escriba: NO
3) Si desea modificar unicamente el nombre y apellido escriba: Nombre y Apellido
4) Si desea modificar unicamente la contraseña escriba: Contraseña`)

            console.log(resetSession)
        if((resetSession !== "") && ((resetSession == "SI") || (resetSession == "si") || (resetSession == "NO") || (resetSession == "no") || (resetSession == "Nombre y Apellido") || (resetSession == "Contraseña"))){
            console.log(`Registro COMPLETADO: Bienvenido a PizzSpeed ${nombreyapellido}`)
        }else{
            alert("ERROR: Invalido")
        }
    //Inicio de Session------------------------------------------------------------------------------------------------------------------------------------=------------------
    if((resetSession == "NO") || (resetSession == "no")){
        alert("REGISTRO COMPLETADO: Bienvenido a PizzSpeed " + nombreyapellido)
        alert("                                         INICIO DE SESSION")
        console.log("Registro COMPLETADO: Bienvenido a PizzSpeed")


        while ((!repeate4)){
            let inicioSession = prompt("Nombre y Apellido")
            if(inicioSession == nombreyapellido){
                repeate4 = true
                console.log(inicioSession)
            }else{
                alert("ERROR: Nombre y Apellido incorrectos")
                continue
            }
        

        while ((!repeate5)){
            let iniciosession = prompt("Contraseña")
            if(iniciosession == contrasenia){
                repeate5 = true
                console.log(iniciosession)
            }else{
                alert("ERROR: Contraseña incorrecta")
                continue   
                }if ((iniciosession !== "") !="ESC"){
                    alert("Inicio de session completado correctamente")
                    console.log(`INICIO DE SESSION CORRECTO: Nombre y Apellido: ${nombreyapellido}. Contraseña: ${contrasenia}`)
                }else{
                    alert("Inicio de session completado incorrectamente")
                    console.log(`INICIO DE SESSION INCORRECTO: Nombre y Apellido: ${inicioSession}. Contraseña: ${iniciosession}`)
                    continue
                }
            }
        }
    }
    //Inicio de Session------------------------------------------------------------------------------------------------------------------------------------=------------------

            //--------------------------------------------------------------Opciones Generales--------------------------------------------------------------------------
    if((resetSession == "SI") || (resetSession == "si")) {
        while (!repeate6){
                                //Nombre y Apellido
            let nombreyApellido = prompt("Ingresar Nombre y Apellido")
            if(nombreyApellido !== ""){
                repeate6 = true
                alert("AVISO: El Nombre y Apellido fueron modificados correctamente")
            }else{
                alert("ERROR: Ingresar nombre y apellido validos")
                console.log(`El nombre y Apellido adjunto: ${nombreyApellido} son invalidos`)
                continue
            }
        
                                //Nombre y Apellido

        while (!repeate7){
                                //Contraseña
            let contrAsenia = prompt("Ingresar Contraseña")
            if(contrAsenia !== ""){
                repeate7 = true
                alert("AVISO: La Contraseña fue modificada correctamente")
            }else{
                alert("ERROR: Ingresar contraseña valida")     
                console.log(`Contraseña adjunta: ${contrAsenia} es invalida`)
                continue
            }if (resetSession !== ""){
                repeate7 = true
                alert(`INFORME: Su registro de session fue modificado correctamente

    1) Su Nombre y Apellido fueron modificados a: ${nombreyApellido}
    2) Su contraseña fue modificada a: ${contrAsenia}`)
                alert("Registro COMPLETADO: Bienvenido a PizzSpeed " + nombreyApellido )
                console.log(`Nombre y Apellido modificados a = ${nombreyApellido}. Contraseña modificada a = ${contrAsenia}`)
                console.log("Registro COMPLETADO: Bienvenido a PizzSpeed")
            }
                                //Contraseña
                            }
                        }
                    }  
        //--------------------------------------------------------------Opciones Generales--------------------------------------------------------------------------
                       


        //-------------------------------------------------------------- RESET- Opciones Individuales---------------------------------------------------------------
   if (resetSession == "Nombre y Apellido") {
    while(!repeate8){
                            //Nombre y Apellido
        let nombreyApellido = prompt("Ingresar Nombre y Apellido")
        if((nombreyApellido !== "")  && (resetSession == "Nombre y Apellido")){
            repeate8 = true
                alert("AVISO: El Nombre y Apellido fueron modificados correctamente")
                console.log(`Nombre y Apellido modificado a = ${nombreyApellido} `)
                alert(`INFORME: Su registro de session fue modificado correctamente. Su Nombre y Apellido actuales son ${nombreyApellido}. Su contraseña no fue modificada por lo que es la siguiente: ${contrasenia}`)

                alert("Registro COMPLETADO: Bienvenido a PizzSpeed " + nombreyApellido )
                console.log("Registro COMPLETADO: Bienvenido a PizzSpeed")
            }else{
                alert("ERROR: Ingresar nombre y apellido validos")
                console.log(`El nombre y Apellido adjunto: ${nombreyApellido} son invalidos`)
            }
                            //Nombre y Apellido
        }
    }

    if (resetSession == "Contraseña"){
    while(!repeate9){
                            //Contraseña
        let contrAsenia = prompt("Ingresar Contraseña")
        if((contrAsenia !== "") && (resetSession == "Contraseña")){
            repeate9 = true
                alert("AVISO: La Contraseña fue modificada correctamente")
                console.log(`Contraseña modificada a = ${contrAsenia}`)
                alert(`INFORME: Su registro de session fue modificado correctamente. Su Nombre y Apellido no fueron modificados, por lo que son los siguientes: ${nombreyapellido}. Su contraseña actual es ${contrAsenia}`)

                alert("Registro COMPLETADO: Bienvenido a PizzSpeed " + nombreyapellido)
                console.log("Registro COMPLETADO: Bienvenido a PizzSpeed")
            }else{
                alert("ERROR: Ingresar contraseña valida")     
                console.log(`Contraseña adjunta: ${contrAsenia} es invalida`)
            }
                            //Contraseña
        }
    }
            //-------------------------------------------------------------- RESET- Opciones Individuales---------------------------------------------------------------
          
                    }   
                }