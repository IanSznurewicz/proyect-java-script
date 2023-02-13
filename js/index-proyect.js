
    let repeate9 = false
    let repeate8 = false
    let repeate7 = false
    let repeate6 = false
    let repeate5 = false
    let repeate4 = false
    let repeate3 = false
    let repeate2 = false                     
    let repeatenya = false


                                //Conectar a function Inicio Session
function ri(){
    while (!repeate3){
        let srIs = parseInt(prompt(`1) Si desea registrarse seleccione: Register
2) Si desea iniciar session seleccione: Inicio Session`))
        if ((srIs !== "") && ((srIs == 1) || (srIs == 2))){
            repeate3 = true 
            console.log (`Seleccionado: ${srIs}`)
        }else{
            alert("ERROR: Ingresar una de las opciones otorgadas")
            continue
        }
    }
}
ri()
                                //Conectar a function Inicio Session


function registroSessionI(){
                                //Nombre y Apellido   
    alert("                                         REGISTRO")
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
    while (!repeate2) {
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
                                    
                                    
                //LOG- Registro 
                    const registrosessionlog = {
                        designado: nombreyapellido, 
                        clave: contrasenia
                    }
                    console.log(registrosessionlog)
                //LOG- Registro 

                alert(`REGISTRO de session realizado correctamente: 

        
                1)Nombre y Apellido ingresados: ${registrosessionlog["designado"]}. 
                2)Contraseña ingresada: ${registrosessionlog["clave"]}.`)

    alert(`REGISTRO COMPLETADO: Bienvenido a PizzSpeed ${registrosessionlog["designado"]}`)
    console.log(`Registro COMPLETADO: Bienvenido a PizzSpeed ${nombreyapellido}`)

    let resetSession = (prompt(`1) Si desea cambiar su registro de session totalmente
    2) Si desea dejarlo como esta actualmente
    3) Si desea modificar unicamente el nombre y apellido
    4) Si desea modificar unicamente la contraseña`))

        if((resetSession !== "") && ((resetSession == 1) || (resetSession == 2 != iniciosessionset()) || (resetSession == 3) || (resetSession == 4))){
        }else{
            alert("ERROR: Invalido")
            console.log([`ERROR: Invalido {vacio}`])
        }
        console.log(resetSession)
    //Inicio de Session------------------------------------------------------------------------------------------------------------------------------------=------------------

    
    function iniciosessionset(){

        if((resetSession == 2) || (srIs == 2)){
            alert("                                         INICIO DE SESSION")

            while (!repeate4){
                let inicioSession = prompt("Nombre y Apellido")
                if(inicioSession == nombreyapellido){
                    repeate4 = true
                }else{
                    alert("ERROR: Nombre y Apellido incorrectos")
                    continue
                }

                    while (!repeate5){
                        let iniciosession = prompt("Contraseña")
                        if(iniciosession == contrasenia){
                            repeate5 = true
                        }else{
                            alert("ERROR: Contraseña incorrecta")
                            continue   
                            }

                        class iniciosessionTrue{
                            constructor(id, naT, cT){
                                this.id = id, 
                                this.nombreyapellidoT = naT,
                                this.contraseñaT = cT
                            }
                                iniciosessiontrue(){
                                    console.log([new Date(), [`Nombre y Apellido correctos:${this.nombreyapellidoT}
Contraseña correcta: ${this.contraseñaT}`]])
                                }
                            }
                        class iniciosessionFalse{
                                constructor(id, naF, cF){
                                    this.id = id,               
                                    this.nombreyapellidoF = naF, 
                                    this.contraseñaF = cF
                                }
                                    iniciosessionfalse(){
                                        console.log([new Date(), [`Nombre y Apellido incorrectos:${this.nombreyapellidoF}
    Contraseña incorrecta: ${this.contraseñaF}`]])
                                    }
                                }
                                if (iniciosession !== ""){
                                    repeate5 = true
                                    alert("Inicio de session completado correctamente")
                                    const nombreYapellido1 = new iniciosessionTrue(1, nombreyapellido)
                                    const contrasenia1 = new iniciosessionTrue(2,contrasenia)
                                    const logs = [nombreYapellido1, contrasenia1]
                                    
                                    const logs0 = new iniciosessionTrue(logs.length+1, nombreyapellido, contrasenia)
                                    console.log(logs0)
                                    logs.push(logs0)
                                    console.log(logs)
                                                //Array
                                    const inicioSessionTrUe = [logs]
                                    console.log([new Date(), inicioSessionTrUe])
                                }else{
                                    alert("Inicio de session completado incorrectamente")
                                    const iniciosessionF = new iniciosessionFalse(inicioSession, iniciosession)
                                    console.log([new Date(), iniciosessionF])
                                    iniciosessionF.iniciosessionfalse()
                                    continue
                                }

                        }
                    }
                }
            }
    //Inicio de Session------------------------------------------------------------------------------------------------------------------------------------=------------------

            //--------------------------------------------------------------Opciones Generales--------------------------------------------------------------------------
function opGenerales(){
    if(resetSession == 1) {
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
            }
opGenerales()
                       


        //-------------------------------------------------------------- RESET- Opciones Individuales---------------------------------------------------------------
   if (resetSession == 3) {
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

    if (resetSession == 4){
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
                    }
                }
            }
        registroSessionI() 
            //-------------------------------------------------------------- RESET- Opciones Individuales---------------------------------------------------------------