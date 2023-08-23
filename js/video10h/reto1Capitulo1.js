/* RETO 1 CAPITULO 1 DALTO --> NIVEL BASICO */

let nom = prompt("Ingrese el nombre: ")
let din = prompt("Ingrese el dinero en $DOLARES: ")

function fnHeladeria(nom, din) {
    if(din >= 0.6 && din < 1){
        return `${nom} adquirio el palido de agua -- VUELTO -- $${din-0.6}`
    }else if(din>=1 && din < 1.6){
        return `${nom} adquirio el palido de crema -- VUELTO -- $${din-1}`
    }else if(din >= 1.6 && din < 1.7){
        return `${nom} adquirio el heladix -- VUELTO -- $${din-1.6}`
    }else if(din >= 1.7 && din < 1.8){
        return `${nom} adquirio el heladovich -- VUELTO -- $${din-1.7}`
    }else if(din >= 1.8 && din < 2.9){
        return `${nom} adquirio el helardo -- VUELTO -- $${din-1.8}`
    }else if(din >= 2.9){
        return `${nom} adquirio el helado con confites o pote de 1/4 kg -- VUELTO -- $${din-1.6}`
    }else{
        return " NO TIENES EL DINERO SUFICIENTE " + nom
    }
}

console.log(fnHeladeria(nom,din));
