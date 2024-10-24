// Variables iniciales para el simulador
let opcionUsuario;
let resultado;

// Array para almacenar datos ingresados
let datosUsuario = [];

// Funciones esenciales
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "No se puede dividir por cero.";
    }
}

// Función para capturar entradas del usuario y manejar el flujo del simulador
function iniciarSimulador() {
    opcionUsuario = prompt(`Seleccione una operación:
    1. Suma
    2. Resta
    3. Multiplicación
    4. División`);

    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    // Guardamos los datos ingresados en el array
    datosUsuario.push({ num1, num2 });

    switch(opcionUsuario) {
        case '1':
            resultado = sumar(num1, num2);
            break;
        case '2':
            resultado = restar(num1, num2);
            break;
        case '3':
            resultado = multiplicar(num1, num2);
            break;
        case '4':
            resultado = dividir(num1, num2);
        case 'suma':
            resultado = sumar(num1, num2);
            break;
        case 'resta':
            resultado = restar(num1, num2);
            break;
        case 'multiplicación':
            resultado = multiplicar(num1, num2);
            break;
        case 'división':
                resultado = dividir(num1, num2);
            break;
        default:
            alert("Opción no válida");
            return;
    }

    // Mostrar el resultado
    alert("El resultado es: " + resultado);
    console.log("Datos procesados:", datosUsuario);
}

// Métodos de búsqueda y filtrado sobre el array
function filtrarDatos(mayoresQue) {
    return datosUsuario.filter(dato => dato.num1 > mayoresQue || dato.num2 > mayoresQue);
}

function buscarPorNumero(numero) {
    return datosUsuario.find(dato => dato.num1 === numero || dato.num2 === numero);
}
