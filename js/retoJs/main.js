/* EJERCICIO 2 */
const prompt = require("prompt-sync")({sigint:true});
let passONE = prompt("Ingrese algo one: ")
let passTWO = prompt("Ingrese algo two: ")

function hash(passOne, passTwo){
    let hash = "";
    for (let i = 0; i <= passOne.length; i++) {
        if(i < passOne.length){
            hash +=  passOne[i]
        }
        for (let j = i; j <= passTwo.length; j++) {
            if(j < passTwo.length){
                hash +=  passTwo[j]
                break
            }
        }
    }
    console.log(passOne.length)
    console.log(passTwo.length)
    console.log(hash.length)
    return hash
}
console.log(hash(passONE,passTWO))

/* Carlos Farit Torres Gelves */