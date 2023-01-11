    //Linea 1------------------------------------------------------------------------------------------------------------------------------------------------=-------------

    let nombreyapellido = prompt("Ingresar Nombre y Apellido")
                //Alerta-----------------
    alert("El Nombre y Apellido fueron ingresados correctamente")
                //Alerta-----------------

    let contrasenia = prompt("Ingresar Contraseña")
                //Alerta-----------------
    alert("La Contraseña fue ingresada correctamente")
                //Alerta-----------------
    console.log(`El nombre y apellido es ${nombreyapellido} de la session la cual tiene una contraseña la cual es ${contrasenia}`)

                    //Alerta-----------------
    alert(`Su registro de session fue realizado correctamente. Su Nombre y Apellido ingresados fueron ${nombreyapellido}. Su contraseña ingresada fue ${contrasenia}`)
                    //Alerta-----------------


    let resetSession = prompt("Si desea cambiar su registro de session totalmente escriba: SI. Si desea dejarlo como esta actualmente escriba: NO. Si desea modificar unicamente el nombre y apellido escriba: Nombre y Apellido. Si desea modificar unicamente la contraseña escriba: Contraseña.")
    console.log(resetSession)


            //-------------------------------------------------------------- RESET- Opciones Individuales---------------------------------------------------------------

    if(resetSession == "Nombre y Apellido"){
                //Nombre y Apellido
        let nombreyapellido = prompt("Ingresar Nombre y Apellido")
            //Alerta-----------------
        alert("El Nombre y Apellido fueron modificados correctamente")
            //Alerta-----------------
                //Nombre y Apellido
        console.log(`Nombre y Apellido modificado a = ${nombreyapellido} `)

                //Alerta-----------------
        alert(`Su registro de session fue modificado correctamente. Su Nombre y Apellido actuales son ${nombreyapellido}. Su contraseña no fue modificada por lo que es la siguiente: ${contrasenia}`)
                //Alerta-----------------

        alert("Gracias por registrarse en PizzSpeed")
        console.log("Gracias por registrarse en PizzSpeed")
    }

    if(resetSession == "Contraseña"){
                //Contraseña
        let contrasenia = prompt("Ingresar Contraseña")
            //Alerta-----------------
        alert("La Contraseña fue modificada correctamente")
            //Alerta-----------------
                //Contraseña
        console.log(`Contraseña modificada a = ${contrasenia}`)

                //Alerta-----------------
        alert(`Su registro de session fue modificado correctamente. Su Nombre y Apellido no fueron modificados, por lo que son los siguientes: ${nombreyapellido}. Su contraseña actual es ${contrasenia}`)
                //Alerta-----------------

        alert("Gracias por registrarse en PizzSpeed")
        console.log("Gracias por registrarse en PizzSpeed")
    }
            //-------------------------------------------------------------- RESET- Opciones Individuales---------------------------------------------------------------




            //--------------------------------------------------------------Opciones Generales--------------------------------------------------------------------------

    if(resetSession == "SI"){
                        //Nombre y Apellido
        let nombreyapellido = prompt("Ingresar Nombre y Apellido")
            //Alerta-----------------
        alert("El Nombre y Apellido fueron modificados correctamente")
            //Alerta-----------------
                        //Nombre y Apellido

                        //Contraseña
        let contrasenia = prompt("Ingresar Contraseña")
            //Alerta-----------------
        alert("La Contraseña fue modificada correctamente")
            //Alerta-----------------
                        //Contraseña

        alert("Gracias por registrarse en PizzSpeed")
        console.log("Gracias por registrarse en PizzSpeed")
    }

    if(resetSession == "NO"){
        alert("Gracias por registrarse en PizzSpeed")
        console.log("Gracias por registrarse en PizzSpeed")
    }
            //--------------------------------------------------------------Opciones Generales--------------------------------------------------------------------------





 



    //Linea 1------------------------------------------------------------------------------------------------------------------------------------------------=-------------


