/* EJERCICIO 1 */
/* const prompt = require("prompt-sync")({sigint:true});
 */

let array = [];

function getRandomInt(max) {
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * max ));
    }
    return array
}

function mostrar(arr){
    arr.forEach((element, index , array) =>{
        console.log(index + ".", element)
    })
}

getRandomInt(10)
mostrar(array)

