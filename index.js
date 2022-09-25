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
let pais= [Argentina, Brasil, Peru, Chile]
const deporte=[Futbol, Tenis]
while (deporte==Futbol){establecimientosFutbol();break}
while (deporte==Tenis){establecimientosTenis();break}
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

//DOM
//agregando Nodos
let dia=document.createElement("div")
dia.innerHTML= <div> <label for="Dia de Reserva"> Dia de Reserva</label>
<input id="input" type="text" name="Dia de Reserva" placeholder="Completa el día que quieres reservar"> </input> </div>
document.completarFormulario.appenChild(dia)

let fecha=document.createElement("div")
fecha.innerHTML= <div> <label for="Fecha de Reserva"> Fecha de Reserva</label>
<input id="input" type="number" name="Fecha de Reserva" placeholder="Completa la fecha que quieres reservar"> </input> </div>
document.completarFormulario.appenChild(fecha)

let mes=document.createElement("div")
mes.innerHTML= <div> <label for="Mes de Reserva"> Mes de Reserva</label>
<input id="input" type="text" name="Mes de Reserva" placeholder="Completa el mes que quieres reservar"> </input> </div>
document.completarFormulario.appenChild(mes)

let año=document.createElement("div")
año.innerHTML= <div> <label for="Año de Reserva"> Año de Reserva</label>
<input id="input" type="number" name="Año de Reserva" placeholder="Completa el año que quieres reservar"> </input> </div>
document.completarFormulario.appenChild(año)

let hora=document.createElement("div")
hora.innerHTML= <div> <label for="Hora de Reserva"> Hora de Reserva</label>
<input id="input" type="number" name="Hora de Reserva" placeholder="Completa la hora que quieres reservar"> </input> </div>
document.completarFormulario.appenChild(hora)

let deportes=document.createElement("div")
deportes.innerHTML= <div> <label for="Deporte que quieres reservar"> Deporte a reservar</label>
<input id="input" type="text" name="Deporte a Reservar" placeholder="Completa el deporte que quieres reservar"> </input> </div>
document.completarFormulario.appenChild(deportes)

let establecimiento=document.createElement("div")
establecimiento.innerHTML= <div> <label for="Establecimiento que quieres reservar"> Establecimiento a reservar</label>
<input id="input" type="text" name="Establecimiento a Reservar" placeholder="Completa el establecimiento donde quieres reservar"> </input> </div>
document.completarFormulario.appenChild(establecimiento)

//modificando nodos
let h3=document.getElementById("h3")
h3.innerText="FORMULARIO PARA RESERVAS"
let legend=document.getElementById("legend")
legend.innerText="Completá el formulario y Reservá en tu establecimiento deportivo favorito con Deporteando"

//Incorporando eventos
let miFormulario=document.getElementsByClassName("botonesFormulario")
miFormulario.addEventListener("submit",formularioValidado)
function formularioValidado(e){e.preventDefault();console.log("Felicitaciones, el Formulario de Reserva se ha ingresado correctamente. Te estará llegando un correo electrónico con el detalle de la reserva.")}

let tipeando=document.getElementById("input")
tipeando.addEventListener('input',()=>{console.log(tipeando.value)})
