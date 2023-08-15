/* EJERCICIO 1 */
function fnEdad(edad) {
    acho = 2023 - edad
    console.log(`SU AÑO DE NACIMIENTO ES ${acho}`);
}

fnEdad(edad = prompt("Ingrese la edad: "))

/* EJERCICIO 2 */
function fnFah(cel) {
    fah = (9*cel/5)+32
    console.log(`La temperatura en grados Fahrenhetit es ${fah}`);
}

fnFah(cel = prompt("Ingrese una temperatura en grados Celsius"))

/* EJERCICIO 3 */
function fnArray(arreglo,tarjet){
    let pares = []
    for (let i = 0; i <arreglo.length; i++) {
        for(let j = i+1; j<arreglo.length; j++){
            if(arreglo[i] + arreglo[j] === tarjet){
                pares.push([arreglo[i],arreglo[j]])
            }
        }
    }
    return pares;
} 

fnArray([2,4,3,6,9,8,10,0],10)

/* Carlos Farit Torres Gelves */