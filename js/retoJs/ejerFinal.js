/* let array = [364147530,61825163,107306571,128124602,139946991,428047635,491595254,879792181,106926279];
const target = 1; */

// EJERCICIO FINAL PEDRO
let array = [1,5,3,4,2];
const target = 2;

function fnPar(array, target) {
    let cont = 0;
    if((array.length <= 5 && array.length <= (10**5))){
        if((target >= 1 && target <= (10**9))){
            array.forEach((element1) => {
                if(element1 > 0 && element1 <= (2 * (10**9))){
                    array.forEach((element2) =>{
                        if(element1 !== element2){
                            if((element1 - element2) === target){
                                cont ++
                            }
                        }
                    })
                }
            })
        }
    }
    console.log(cont);
}

fnPar(array,target);

/* CARLOS FARIT TORRES GELVES */