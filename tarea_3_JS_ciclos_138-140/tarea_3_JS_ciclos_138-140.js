//4.1
let salarioIni = 1500, SalarioIncre;
    for(let i=1;i<=6;i++){
        if(i===1){
            SalarioIncre=salarioIni*1.1;
        } else {
            SalarioIncre=SalarioIncre*1.1;
        }        
        document.write(`Ejercicio 4.1--El salario para el año ${i} es de ${SalarioIncre}  <br>`);
    }
    document.write(`Ejercicio 4.1--El salario para el año 6 será ${SalarioIncre}  <br>`);

//4.2
let cantiHamburS = 2, cantiHamburD = 3, cantiHamburT = 5;
let costoHamburS = 0, costoHamburD = 0, costoHamburT = 0;
let costoTotalHambur = 0;

    costoHamburS = cantiHamburS * 20;
    costoHamburD = cantiHamburD * 25;
    costoHamburT = cantiHamburT * 28;
    costoTotalHambur = (costoHamburS + costoHamburD + costoHamburT) * 1.05;
    document.write(`Ejercicio 4.2--El cliente pagará ${costoTotalHambur} soles por las hamburguesas <br>`)    

//4.3
let ArrNumeros = [0,-1,-2,8,9];
let contCeros = 0, contMenorCeros = 0, contMayoCeros = 0;

    for(let i=0; i<ArrNumeros.length;i++){
        if (ArrNumeros[i]===0){
            contCeros++;
        } else if (ArrNumeros[i] < 0) {
            contMenorCeros += 1;
        } else {
            contMayoCeros += 1;
        }
    }
    document.write(`Ejercicio 4.3--En el arreglo de números se han encontrado ${contCeros} ceros,  ${contMenorCeros} numeros menores de cero y ${contMayoCeros} numeros mayores de cero <br>`);

//4.4
let arrFocos = ["verde","blanco","blanco","blanco","rojo","rojo","rojo","verde","verde"];
let contVerde = 0, contBlanco = 0, contRojo = 0;

    for(let i=0;i<arrFocos.length;i++){
        if (arrFocos[i]==="verde"){
            contVerde++;
        } else if (arrFocos[i] === "blanco") {
            contBlanco += 1;
        } else {
            contRojo += 1;
        }        
    }
    document.write(`Ejercicio 4.4--En el arreglo de colores se han encontrado ${contVerde} focos verde,  ${contBlanco} focos blancos y ${contRojo} focos rojos <br>`);

//4.5
let AcumuladoDiario = 1, dias_1 = 1;

    while(dias_1 <= 365){
        AcumuladoDiario = AcumuladoDiario * 3;
        dias_1+=1;
        // document.write(`${AcumuladoDiario} <br>`)
        // console.log(`${AcumuladoDiario}`)
        // console.log(`${dias_1}`)   
    }
    document.write(`Ejercicio 4.5--La persona ahorrá en un año ${AcumuladoDiario} soles <br>`);

//4.6 A
let costoArti_a=4, descuArti_a, numeArti_a=5, precioFinal_a;
let salarioIni_a = 1500, SalarioIncre_a;
    for(let i=1;i<=6;i++){
        if(i===1){
            SalarioIncre_a=salarioIni_a*1.1;
        } else {
            SalarioIncre_a=SalarioIncre_a*1.1;
        }        
        document.write(`Ejercicio 4.6 ciclo-repite--El salario para el año ${i} es de ${SalarioIncre_a}  <br>`);
    }
    document.write(`Ejercicio 4.6 ciclo-repite--El salario para el año 6 será ${SalarioIncre_a}  <br>`);

//4.6 B
let costoArti_b=4, descuArti_b, numeArti_b=5, precioFinal_b;
let salarioIni_b = 1500, SalarioIncre_b;
let i=1;
    while(i<=6){
        if(i===1){
            SalarioIncre_b=salarioIni_b*1.1;
        } else {
            SalarioIncre_b=SalarioIncre_b*1.1;
        }        
        i++;
        document.write(`Ejercicio 4.6 ciclo-repite--El salario para el año ${i} es de ${SalarioIncre_b}  <br>`);
    }
    document.write(`Ejercicio 4.6 ciclo-repite--El salario para el año 6 será ${SalarioIncre_b}  <br>`);   

//4.7 A
let cantiHambur = [2,3,5];
let costoHambur = [20,25,28];
let costoHamburAcum=[];
let sumaAcumulado = 0, costoTotalHambur_1 = 0;

    for(let i=0;i<3;i++){
        costoHamburAcum[i] =  cantiHambur[i] * costoHambur[i];
        sumaAcumulado=sumaAcumulado + costoHamburAcum[i] ;
    }
    costoTotalHambur_1 = sumaAcumulado * 1.05;
    
    document.write(`Ejercicio 4.7 A--El cliente pagará ${costoTotalHambur_1} soles por las hamburguesas <br>`)   

//4.7 A
let cantiHambur_B = [2,3,5];
let costoHambur_B = [20,25,28];
let costoHamburAcum_B=[];
let sumaAcumulado_B = 0, costoTotalHambur_1_B = 0;
let j=0;
    while(j<3){
        costoHamburAcum_B[j] =  cantiHambur_B[j] * costoHambur_B[j];
        sumaAcumulado_B=sumaAcumulado_B + costoHamburAcum_B[j];
        j++;
    }
    costoTotalHambur_1_B = sumaAcumulado_B * 1.05;    
    document.write(`Ejercicio 4.7 B--El cliente pagará ${costoTotalHambur_1_B} soles por las hamburguesas <br>`);  

//4.8
let cantiProduc_1 = 20, costoUnitario = 5;
let precio = cantiProduc_1 * costoUnitario;
let precioFinal_1;
    if (precio >= 200){
        descuento_3 = 0.15 * precio;
    } else if (precio >= 100 && precio < 200){
        descuento_3 = 0.12 * precio;
    } else {
        descuento_3 = 0.1 * precio;
    } 
    precioFinal_1 = precio - descuento_3;
    document.write(`Ejercicio 4.8--El precio a pagar por ${cantiProduc_1} productos será de ${precioFinal_1} soles <br>`);   

//4.9
let cantiSolesMen = 100, cantiSolesAnu, aniosDepo = 3;
let inverAnual = 0, inverFinal;
    cantiSolesAnu = cantiSolesMen * 12;
    //inverAnual = cantiSolesAnu * 0.1;

    for (let i=0;i<aniosDepo;i++){
        cantiSolesAnu =  cantiSolesAnu * 1.1;
        document.write(`Ejercicio 4.9--La inversión al finalizar el año ${i+1}  será de ${cantiSolesAnu} soles <br>`);    
    }
    
//4.10
let edadPro_1, edadProEscuela, nroSalones_1 = 3;
let edadSalon_1 = [5,6,8,2,1,9,3,8];
let edadSalon_2 = [5,12,18,2,1,9,3,8];
let edadSalon_3 = [5,5,8,12,1,4,3,16];
let suma_salon = [], suma_pro=[];
suma_salon[0] = 0;
suma_salon[1] = 0;
suma_salon[2] = 0;

    for(let i=0;i<edadSalon_1.length;i++){
        suma_salon[0] = suma_salon[0] + edadSalon_1[i];
    }

    for(let i=0;i<edadSalon_2.length;i++){
        suma_salon[1] = suma_salon[1] + edadSalon_2[i];
    }
    
    for(let i=0;i<edadSalon_3.length;i++){
        suma_salon[2] = suma_salon[2] + edadSalon_3[i];
    } 

    for(let i=0;i<nroSalones_1;i++){
        suma_pro[i] = suma_salon[i]/edadSalon_1.length;
        document.write(`Ejercicio 4.10--La edad promedio del salón ${i+1} será de ${suma_pro[i]} <br>`);    
    }           
    
//4.12
let numBilletes = 10, valorBillete = 1.2, numMonedas = 12;
let valorMoneda = 0.9;
let valorCaja;
    valorCaja = numBilletes * valorBillete + (numMonedas * valorMoneda);
    document.write(`Ejercicio 4.12--La caja tiene ${valorCaja} soles <br>`);

//4.14
let notasAlumnos = [10,12,15,8,9,16,17,20];
let nroAprobado=0, nroDesaprobado=0;

    for(let i=0;i<notasAlumnos.length;i++){
        if(notasAlumnos[i]<=10){
            nroAprobado = nroAprobado + 1;
        } else {
            nroDesaprobado = nroDesaprobado + 1;
        }
    }
    document.write(`Ejercicio 4.14--El número de aprobados es ${nroAprobado} y número de desaprobados es ${nroDesaprobado} <br>`);

//4.17
    for (let j=1;j<=3;j++){
        document.write(`Ejercicio 4.17--///////////La tabla del ${j} /////////////////// <br>`);
        for(let i=0;i<13;i++){            
            document.write(`Ejercicio 4.17-- ${i} x ${j} <br>`);
        }
    }


