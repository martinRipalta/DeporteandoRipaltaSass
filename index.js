//Arrays
let nombreyApellido = [ prompt ("Ingrese su Nombre y Apellido para reservar")];
let diaReserva = [Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo];
let horarioReserva = [9.00,10.00,11.00,12.00,13.00,14.00,15.00,16.00];
horarioReserva.push(14.00,15.00,16.00,17.00,18.00,19.00,20.00,21.00);
horarioReserva.splice(0,4)
let fechaReserva = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let mesReserva = [ Enero, Febrero, Marzo, Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre]
let añoReserva = [ 2022,2023,2024,2025]
let reserva = nombreyApellido.concat (diaReserva,fechaReserva,mesReserva,añoReserva,horarioReserva); alert("La reserva se registró para"+" "+reserva)

// Algoritmo aplicado a selección de horario para reservas
for (let i= 09;i <= 20;i++){let ingresarNombre = prompt("Ingrese su Nombre para reservar");alert("El horario de"+" "+i+"hs fue asignado a"+" "+ ingresarNombre); if(i==13){continue;};if(i==20){break;}}

//Algoritmo aplicado a la selección de días de reservas
let diaSemana = prompt ("Ingrese Día que quiere reservar");
while(diaSemana =="Lunes"){alert("Tu reserva no se puede registrar para el día"+" "+diaSemana);diaSemana = prompt("Ingrese nuevamente el día que quiere reservar");switch(diaSemana){case "Martes":alert("Tu reserva se registró para el día"+" "+diaSemana);break;case "Miercoles":alert("Tu reserva se registró para el día"+" "+diaSemana);break;case "Jueves":alert("Tu reserva se registró para el día"+" "+diaSemana);break;case "Viernes":alert("Tu reserva se registró para el día"+" "+diaSemana);break;case "Sabado":alert("Tu reserva se registró para el día"+" "+diaSemana);break;case "Domingo":alert("Tu reserva se registró para el día"+" "+diaSemana);break;default:alert("Ingrese un día de la semana valido para registrar su reserva")}};

// Funciones Anonimas
const suma = (a,b)=>a+b
const iva = x => x * 0.21
let valorEstablecimiento = 5000
const comisionDeporteando = x => x * 0.20
let valorReserva = suma (suma(iva(valorEstablecimiento),valorEstablecimiento),suma(comisionDeporteando(valorEstablecimiento),valorEstablecimiento))
alert("El valor total de tu reserva es de"+" "+valorReserva)

//Funcion Local
function saludoBienvenida(){
let nombreCompleto = prompt("Ingrese su nombre y apellido");alert("Bienvenido a Deporteando"+" "+nombreCompleto)}