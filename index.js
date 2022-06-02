let saldo = 2000
alert("Bienvenido. Su saldo inicial es de " + saldo)
alert("1. Ingreso de dinero  2. Retiro de dinero  3. Mostrar saldo  4. Salir")

var operacion = parseInt(prompt("Seleccione el número de la operación que desea realizar: "))

while (operacion != 4) {
    
    if (operacion == 1) {
        let ingreso = parseInt(prompt("Ingrese el monto de dinero que desea ingresar:"))
        saldo = saldo + ingreso
        alert("Su saldo actual es: " + saldo)
    }

    else if (operacion == 2) {
        let retiro=parseInt(prompt("Ingrese el monto de dinero que desea retirar: "))

        if (retiro>saldo) {
            alert("Error. Saldo insuficiente")
        }
        else {
            saldo = saldo - retiro
            alert("su saldo actual es: " + saldo)
        }
    }

    else if (operacion == 3) {
        alert(saldo)
    }

    else if (operacion == 4) {
        alert("Se ha finalizado la operacion. Muchas gracias")
    }

    else {
        alert("Seleccione un número válido")
    }

    var operacion = parseInt(prompt("Seleccione el número de la operación que desea realizar: "))
}

