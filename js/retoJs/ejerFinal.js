let array = [364147530,61825163,107306571,128124602,139946991,428047635,491595254,879792181,106926279];
const target = 1;

function fnPar(array, target) {
    let cont = 0;
    array.forEach((element1) => {
        array.forEach((element2) =>{
            if((element1 - element2) === target){
                cont ++;
            }
        })
    });
    console.log(cont);
}

fnPar(array,target);

/* FALTA CORREGIR */
/* function fnPar(array, target) {
    let cont = 0;
    let distinct = []
    if((array.length >= 5 && array.length <= (10**5))){
        for (let i = 0; i < array.length; i++) {
            if((array[i] > 0 && array[i] <= (2 * (10**9)))){
                distinct.push(array[i]);
                for (let j = 0; j < distinct.length; j++) {
                    if(array[i] !== distinct[j]){
                        if((target >= 1 && target <= (10**9))){
                            array.forEach((element1, i) => {
                                array.forEach((element2, j) =>{
                                    if((element1 - element2) === target){
                                        cont ++;
                                    }
                                })
                            })
                        }
                    }
                    
                }
            }
        }
    }
    return cont;
}

fnPar(array,target); */