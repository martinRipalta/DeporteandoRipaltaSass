//Variables
let nombreRegistro = prompt ("Ingrese su nombre y Apellido");alert("Bienvenido"+" "+nombreRegistro+" "+"a Deporteando");
let edadRegistro = prompt ("Ingrese su edad")
//Ciclos
while(edadRegistro<=17){alert("Debes ser mayor de edad para reservar en Deporteando");edadRegistro = prompt ("Ingrese Nuevamente su edad");break};
for(edadRegistro>17;edadRegistro<=99;edadRegistro){alert("Felicitaciones ya puedes reservar en cualquier establecimiento adherido a Deporteando");break};
//Funciones Esenciales
let montoReserva=(montoEstablecimiento,montoIva,comisionDeporteando)=> montoEstablecimiento+montoIva+montoDeporteando
const montoIva= x => montoEstablecimiento*0.21
const montoDeporteando= a => montoIva*0.2
let montoEstablecimiento=10000

class establecimientosDeportivos{constructor(nombreEstablecimiento,domicilio,ciudad,pais,telefono){this.nombreEstablecimiento=nombreEstablecimiento;this.domicilio=domicilio;this.ciudad=ciudad;this.pais=pais;this.telefono=telefono}}
const establecimientoFutbolUno=new establecimientosDeportivos("Don Balon","Calle Falsa 123","Monte Castro","Argentina","1122334455")
const establecimientoFutbolDos= new establecimientosDeportivos("Homero Futbol","Calle Viva 123","Villa Luro","Argentina","1122234456")
const establecimientoTenisUno=new establecimientosDeportivos("Match Point","Calle Azul 123","Belgrano","Argentina","1124234487")
const establecimientoTenisDos=new establecimientosDeportivos("Break Point","Calle Naranja 123","Nuñez","Argentina","1126264688")
//Arrays de Objetos
const establecimientosFutbol=[establecimientoFutbolUno,establecimientoFutbolDos,]
establecimientosFutbol.push(new establecimientosDeportivos("Gevs Futbol Club","Calle Blanca 123","Floresta","Argentina","1122234546"));
const establecimientosTenis=[establecimientoTenisUno,establecimientoTenisDos,]
establecimientosTenis.push(new establecimientosDeportivos("Reves Tenis Club","Calle Blanca 123","Velez Sarsfield","Argentina","1657576546"));
//Arrays
let diaReserva = [Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo];
let horarioReserva = [9.00,10.00,11.00,12.00,13.00,14.00,15.00,16.00];
horarioReserva.push(14.00,15.00,16.00,17.00,18.00,19.00,20.00,21.00);
horarioReserva.splice(0,4)
let fechaReserva = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let mesReserva = [ Enero, Febrero, Marzo, Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre]
let añoReserva = [ 2022,2023,2024,2025]
let reserva = nombreRegistro.concat (diaReserva,fechaReserva,mesReserva,añoReserva,horarioReserva); alert("La reserva se registró para"+" "+reserva)
//Metodos de Busqueda y Filtrado
const terrenoyPrecioFutbol=[{nombre:establecimientoFutbolUno.nombreEstablecimiento(),precio:5000,terreno: "Piso Baldosa"},{nombre:establecimientoFutbolDos.nombreEstablecimiento(),precio:8000,terreno:"Cesped Sintetico"},{nombre:establecimientoFutbolTres.nombreEstablecimiento(),precio:11000,terreno: "Cesped Sintetico"}];
const TerrenoyPrecioTenis=[{nombre:establecimientoFutbolTenis.nombreEstablecimiento(),precio: 6000,terreno : "Polvo Ladrillo"},{nombre:establecimientoTenisDos.nombreEstablecimiento(),precio: 9000,terreno :"Cesped"},{nombre:establecimientoTenisTres.nombreEstablecimiento(),precio: 11000,terreno: "Polvo Ladrillo"}];

const nombreEstablecimientosFutbol=terrenoyPrecioFutbol.map((el)=>el.nombreEstablecimiento());
console.log(nombreEstablecimientosFutbol);
const nombreEstablecimientosTenis=terrenoyPrecioTenis.map((el)=>el.nombreEstablecimiento());
console.log(nombreEstablecimientosFutbol);
const precioEstablecimientoFutbol=terrenoyPrecioFutbol.filter((el)=>el.precio==5000);
const terrenoEstablecimientoFutbol=terrenoyPrecioFutbol.filter((el)=>el.terreno=="Cesped Sintetico");
console.log(precioEstablecimientoFutbol);
console.log(terrenoEstablecimientoFutbol);