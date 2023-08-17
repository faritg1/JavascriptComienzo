/* EJERCICIO 2 */
const prompt = require("prompt-sync")({sigint:true});

let exP = /^[a-z]+$/
let passONE = prompt("Ingrese algo one: ")
let passTWO = prompt("Ingrese algo two: ")

function hash(passOne, passTwo){
    let hash = "";
    if(exP.test(passOne) && exP.test(passTwo) ){
        if(passOne.length >= 1 && passOne.length <= 25000 || passTwo.length >= 1 && passTwo.length <= 25000){
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
        }else{
            return "Las palabras deben estar entre 1 y 25000 caracteres"
        }
    }else{
        return "Las palabras no encajan"
    }
}
console.log(hash(passONE,passTWO))

/* Carlos Farit Torres Gelves */