/*EJERCICIO 1*/
function fnParImpar(num){
    let pares = 0
    let impares = 0
    for (let i = 0; i<num; i++) {
        if(i % 2 == 0){
            pares +=  i
        }else{
            impares += i 
        }
    }

    let text = `Suma de numeros pares: ${pares} -- Suma de numeros Impares: ${impares}`
    return text
} 

fnParImpar(578934)

/* CARLOS FARIT TORRES GELVES */