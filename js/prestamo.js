
function calcular_prestamo( monto, cuotas ){
    

    monto = parseFloat(monto);
    cuotas = parseInt(cuotas);

    let prestamo_final = 0;
    if( cuotas == 1 && monto > 0){
        return monto 
    }

    else if( cuotas == 3 && monto >  0){
        prestamo_final = monto + (monto * 0.25);
        return prestamo_final 

    }
    else if( cuotas == 6 && monto > 0 ){
        prestamo_final = monto + (monto * 0.60);
        return prestamo_final
    }

    else if( cuotas == 12 && monto > 0){
        prestamo_final = monto + (monto * 1);
        return prestamo_final
    }
}


console.log("bienvenidos/as a prestamo FondoExpress");

let monto = 0;

while (monto !="FIN" ){

    monto =prompt("ingrese el monto a solicitar o FIN")
    if(monto != "FIN"){


    

    let cuotas = prompt("ingrese la cantidad de cuotas: 1,3,6 y 12")
    let resultado_del_prestamo = calcular_prestamo(monto , cuotas);


    console.log("Pediste: ",monto);
    console.log("cuotas: ", cuotas);
    console.log("Devolves: ",resultado_del_prestamo);
    }
}