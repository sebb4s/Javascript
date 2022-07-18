/* Es un programa de una escuela para que un alumno pueda consultar sus notas escolares */

var nota1;
var nota2;
var nota3;
var promedio;
let user = prompt("Ingresa tu nombre de Usuario.")
let ingresar = false
const valorContraseña= "nicolas123"


function saludar(nombre) {
    let saludo = ("Bienvenido al campus de Coderhouse, " + nombre + "!");
    return saludo
}

function CalcularPromedio(nota1, nota2, nota3) {
    
        suma = nota1 + nota2 + nota3;
        promedio = suma/3;
    
        alert("el resultado es " + promedio);
        return nota1, nota2, nota3, promedio;
    
  
}

for (let i = 2; i >= 0; i--) {
    let contraseña = prompt("Ingresa tu clave por favor. Recuerda que tienes 3 intentos");
    if (contraseña == valorContraseña) {
        alert(saludar(user));
        ingresar = true;
        break;
    } else {
        alert("Contraseña incorrecta. Te quedan " + i + " intentos.");
    }
}

if (ingresar == true) {
    let accion = prompt("¿Qué querés hacer?: \n1. Calcular tu promedio \n2. Ver tu boletín \nIngresá 'Salir' si querés salir.");
    while (accion != "Salir") {
        switch (accion) {
            case "1":
                    var nota1= parseInt(prompt("Ingrese la primer nota"));
                    var nota2= parseInt(prompt("Ingrese la segunda nota"));
                    var nota3= parseInt(prompt("Ingrese la tercer nota"));
                    CalcularPromedio (nota1, nota2, nota3);
            break;
            
            case "2":
                for (let i = 0; i < 1; i++){
                    alert (
                        "Matemáticas: 8 \nPrácticas del lenguaje: 9 \nHistoria: 5 \nBiología: 7 \nInglés:10"
                    )
                }
            break;
           
            default:
                alert("No ingresaste una opción valida.")
            break;
        }

    }

    if (accion = "Salir") {
        alert ("Hasta luego " + user + "!")
    }
} else {
    alert("Superaste el numero de intentos. No puedes ingresar.");
}