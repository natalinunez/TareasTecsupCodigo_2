//3.1
let edad=18;
    if(edad>=18){
        document.write(`Ejercicio 3.1--Usted tiene ${edad}, puede votar en estas elecciones 2021 <br>`)
    }else{
        document.write(`Ejercicio 3.1--Usted tiene ${edad}, no puede votar en estas elecciones 2021 <br>`)
    }


//3.2
let horasTrabajaPorDia = 10;
let pagoHora =5;
let diasTrabaja=5;
let pagoDia=pagoHora*horasTrabajaPorDia;
let horasTrabajaSemana=horasTrabajaPorDia*diasTrabaja;
let pagoSemanal=pagoDia*diasTrabaja;
let horasExcedente;
if(horasTrabajaSemana>=40){
    let horasTrabajaPorDia = 8;
    horasExcedente=horasTrabajaPorDia-40;
    pagoSemanal=pagoSemanal+horasExcedente*2;
}
document.write(`Ejercicio 3.2--El pago semanal del trabajdor es ${pagoSemanal} soles <br>`)    

//3.3
let MiRegalo;
let costoRegalo=255;

if (costoRegalo <= 10){
    MiRegalo="Trajeta";
} else if (costoRegalo >=11 && costoRegalo <=100){
    MiRegalo="Chocolates";
} else if (costoRegalo >=101 && costoRegalo <=250){
    MiRegalo="Flores";
} else {
    MiRegalo="Anillo";
} 
document.write(`Ejercicio 3.3--Con ${costoRegalo} soles se podra regalar: ${MiRegalo}  <br>`);

//3.4
let horasEsta = 6;
let totalEsta = 0;
if (horasEsta <= 2) {
    totalEsta = horasEsta * 5;
} else {
  if (horasEsta <= 5) {
    totalEsta = (2 * 5) + (horasEsta - 2) * 4;
  } else {
    if (horasEsta <= 10) {
        totalEsta = (2 * 5) + (3 * 4) + (horasEsta - 5) * 3;
    }
    else {
        totalEsta = (2 * 5) + (3 * 4) + (5 * 3) + (horasEsta - 10) * 2;
    }
  }
}
document.write(`Ejercicio 3.4--Horas en el estacionamiento: ${horasEsta} y el Total a pagar: S/ ${totalEsta} <br>`)

//3.5
let edades_1 = [12,8,10];
let nombres_1 =["Julia","Dora","Renzo"];
let menorEdad, nombre_menor;  
if(edades_1[0]<edades_1[1] && edades_1[0]<edades_1[2]){
    menorEdad=edades_1[0];
    nombre_menor=nombres_1[0];
} else if(edades_1[1]<edades_1[0] && edades_1[1]<edades_1[2]){
    menorEdad=edades_1[1];
    nombre_menor=nombres_1[1];
} else if(edades_1[2]<edades_1[0] && edades_1[2]<edades_1[1]){
    menorEdad=edades_1[2];
    nombre_menor=nombres_1[2];
}
document.write(`Ejercicio 3.5--De los tres participantes, ${nombre_menor} es el menor de los tres con edad de: ${menorEdad}  <br> `);

//3.6
let costoArti=4, descuArti, numeArti=5, precioFinal;
let precioArti=costoArti*numeArti;
if(precioArti>=200){
    descuArti=precioArti*0.15;    
} else if(precioArti>=100 && precioArti<200){
    descuArti=precioArti*0.12;    
} else if( precioArti<100){
    descuArti=precioArti*0.1;    
}
precioFinal=precioArti-descuArti;
document.write(`Ejercicio 3.6--El costo del articulo será ${precioFinal}, con un descuento de ${descuArti} <br> `);

//3.7
let edadAlumno=18,promedioAlumno=9,becaAlumno=0;
    if (edadAlumno > 18){
        if (promedioAlumno >= 9){
            becaAlumno=2000;
        } else if (promedioAlumno >= 7.5){
            becaAlumno=1000;
        } else if (promedioAlumno <= 7.5 && promedioAlumno >= 6){
            becaAlumno=500;
        } else {
            cartaInvi="Le animamos a seguir esforzandose en los estudios"
        } 

    } else {
        if (promedioAlumno >= 9){
            becaAlumno=3000;
        } else if (promedioAlumno >= 8 && promedioAlumno < 9){
            becaAlumno=2000;
        } else if (promedioAlumno <= 8 && promedioAlumno >= 6){
            becaAlumno=100;
        } else {
            cartaInvi="Le animamos a seguir esforzandose en los estudios"
        }         
    }
    
    if(becaAlumno===0){
        document.write(`Ejercicio 3.7--El alumno de  ${edadAlumno} años recibirá una carta de invitacion <br> `);
    } else{
        document.write(`Ejercicio 3.7--El alumno de  ${edadAlumno} años recibirá una beca de ${becaAlumno} <br> `);
    }

//3.8
let antigueTraba=3,montoSueldo=1500;
let bonoAnti=0, bonoConcepSueldo=0;
    if(antigueTraba>2 && antigueTraba<5){
        bonoAnti=montoSueldo*0.2;
    } else if (antigueTraba >= 5){
        bonoAnti=montoSueldo*0.3;
    }

    if(montoSueldo<1000){
        bonoConcepSueldo=montoSueldo*0.25;
    } else if(montoSueldo > 1000 && montoSueldo < 3500){
        bonoConcepSueldo=montoSueldo*0.15;
    } else if(montoSueldo > 3500){
        bonoConcepSueldo=montoSueldo*0.1;
    }

    let sueldoFinal=montoSueldo+bonoAnti+bonoConcepSueldo;
    document.write(`Ejercicio 3.8--El trabajador con sueldo basico de ${montoSueldo} recibirá por bono de antiguedad ${bonoAnti} y bono de sueldo de ${bonoConcepSueldo}. Su sueldo final será de ${sueldoFinal} <br>`);

//3.9
let coberA=1200, coberB=950, tipoCober="A";
let habitoPersona="bebeAlcohol", edadAsegurado=45;
let costoHabitoPersoA=0,costoHabitoPersoB=0, costoEdadA=0, costoEdadB=0;
let costoPoliza=0;

    if(habitoPersona==="bebeAlcohol"){
        costoHabitoPersoA=0.1*coberA;
        costoHabitoPersoB=0.1*coberB;
    } else if(habitoPersona==="utilizaLentes" || habitoPersona==="padeceEnfermedad"){
        costoHabitoPersoA=0.05*coberA;
        costoHabitoPersoB=0.05*coberB;
    }

    if(edadAsegurado > 40){
        costoEdadA=0.2*coberA;
        costoEdadB=0.2*coberB;
    } else {
        costoEdadA=0.1*coberA;
        costoEdadB=0.1*coberB;
    }

    if (tipoCober==="A"){
        costoPoliza=coberA + costoHabitoPersoA + costoEdadA;
        document.write(`Ejercicio 3.9--El costo de la poliza será de ${costoPoliza} soles <br>`);
    } else {
        costoPoliza=coberB + costoHabitoPersoB + costoEdadB;
        document.write(`Ejercicio 3.9--El costo de la poliza será de ${costoPoliza} soles <br>`);
    }
    
//3.10
let kmRecorrido, costoXKm=10;
let ciudad="Mexico", costoViaje;
    if (ciudad==="Mexico"){
        costoViaje=750*costoXKm;
    } else if (ciudad==="PV"){
        costoViaje=800*costoXKm;
    }if (ciudad==="Acapulco"){
        costoViaje=1200*costoXKm;
    } else if (ciudad==="Cancun"){
        costoViaje=1800*costoXKm;
    }
    document.write(`Ejercicio 3.10--El costo para irse de vacaciones a ${ciudad} es de ${costoViaje} soles <br> `);

//3.11
let antigueTraba_1=3;
let bonoConcepSueld_1=0;

    if (antigueTraba_1===1){
        bonoConcepSueld_1=100;
    } else if (antigueTraba_1===2){
        bonoConcepSueld_1=200;
    } else if (antigueTraba_1===3){
        bonoConcepSueld_1=300;
    } else if (antigueTraba_1===4){
        bonoConcepSueld_1=400;
    } else if (antigueTraba_1===5){
        bonoConcepSueld_1=500;
    } else {
        bonoConcepSueld_1=1000;
    }
    
    document.write(`Ejercicio 3.11--El trabajador con antiguedad de ${antigueTraba_1} años recibirá por bono ${bonoConcepSueld_1} soles <br>`);

//3.12
let sueldoSemanal, horasTrabaPorDia_1 = 8 , costoPorHora=6, horasPenalidad=0, costoAdicional=0;
let horasSemanal=horasTrabaPorDia_1 * 5;

    if (horasSemanal >= 41 && horasSemanal <=45 ){
        costoAdicional=(horasSemanal-45) * costoPorHora * 2;
    } else if (horasSemanal >= 46 && horasSemanal <= 50){
        costoAdicional = 4 * costoPorHora * 2 + ((horasSemanal-50) * costoPorHora * 3);
    } else if (horasSemanal >= 51){
        horasPenalidad = 1;
    }

    sueldoSemanal=horasTrabaPorDia_1 * costoPorHora + costoAdicional;


    if (horasPenalidad === 1){
        document.write(`Ejercicio 3.12--El trabajador ha laborado ${horasSemanal} horas, lo cual está prohibido <br> `);
    } else {
        document.write(`Ejercicio 3.12--El sueldo semanal será de  ${sueldoSemanal} soles <br> `);
    }


