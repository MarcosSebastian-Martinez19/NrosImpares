/*5. Mostrar todos los numeros impares que hay entre dos números introducidos por el usuario */

let num1 = parseInt(prompt("Ingrese un número"))
let num2 = parseInt(prompt("Ingrese otro número"))

// Numeros impares i = 1 +=2

document.write("Los números impares que existen entre " + num1 + " y " + num2 + " son:")

// Utilizando while

while(num1 < num2) {
    if (num1 % 2 != 0) {
        document.write("<br>" + num1)
    }
    num1++
}