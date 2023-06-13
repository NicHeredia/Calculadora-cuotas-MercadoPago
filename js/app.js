const monto = document.querySelector("#monto");
const resultadoCuotas = document.querySelector("#resultadoCuotas");
const form = document.querySelector("#form");



//objeto que contiene las tasas que se cobran dependiendo cada tarjeta y cuota deseada    
const montoFinal_ahora = {
    cuotas1 : 1.115448,
    debito : 1.07009,
    cuotas3 : 1.275998,
    cuotas6 : 1.455818,
    cuotas12 : 1.904034
}
const montoFinal_naranja = {
    naranja3 : 1.455182,
    naranja6 : 1.824816
}

const costos_compra = {
    cuarenta: 1.694,
    cincuenta: 1.815
}


//Funciones que se encargan de crear las tarjetas y los titulos
const tarjetaCuotas = (montoFinal,cuota) => {
    let plantilla = `<div class="cardCuota fade-in">
    <div class="cardCuota__numero">${cuota}</div>
    <div class="cardCuota__contenedorMontos">
      <p class="cardCuota__precioFinal">Precio Final $${Math.round(monto.value * montoFinal).toLocaleString("de-DE")}</p>
      <p class="cardCuota__precioCuotas">${cuota} cuotas de $${Math.round((monto.value * montoFinal) / cuota).toLocaleString("de-DE")}</p>
    </div>`
    return plantilla 
}

const tarjetaDebito = (montoFinal, cuota, nombre) => {
    let plantilla = `<div class="cardCuota fade-in">
    <div class="cardCuota__numero">${cuota}</div>
    <div class="cardCuota__contenedorMontos">
      <p class="cardCuota__precioFinal">Precio Final $${Math.round(monto.value * montoFinal).toLocaleString("de-DE")}</p>
      <p class="cardCuota__precioCuotas">${nombre}</p>
    </div>`
    return plantilla 
}



const crearTitulo = (titulo) => {
    return `<h2 class="tituloSeparador">${titulo}</h2>`
}



//Capturador del evento click dentro del form que se encarga de accionar de acuerdo que boton se presiono
form.addEventListener("click", (e) =>{
    e.preventDefault();

    
    if (monto.value == "") {
        console.log("Ingrese un monto para comenzar");
    } else if (e.target.id === "btn-ahora"){
    resultadoCuotas.innerHTML = "";
    resultadoCuotas.innerHTML += crearTitulo("Plan Ahora")
    resultadoCuotas.innerHTML += tarjetaDebito(montoFinal_ahora.cuotas1, "1", "Precio final 1 Cuota")
    resultadoCuotas.innerHTML += tarjetaDebito(montoFinal_ahora.debito, "D", "Precio final con Debito")
    resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_ahora.cuotas3, 3);
    resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_ahora.cuotas6, 6);
    resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_ahora.cuotas12, 12);
    
    } else if (e.target.id === "btn-borrar"){
        let borrarDelay
        resultadoCuotas.classList.add("fade-out");
        e.preventDefault();
        monto.value = "";
        borrarDelay = setTimeout(delay, 1000);
        monto.focus();
        
        function delay() {
            resultadoCuotas.innerHTML = ""
            resultadoCuotas.classList.remove("fade-out")
    
        }
    } else if (e.target.id === "btn-naranja") {
        resultadoCuotas.innerHTML = "";
        resultadoCuotas.innerHTML += crearTitulo("Naranja");
        resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_naranja.naranja3, 3);
        resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_naranja.naranja6, 6);
        
    } else if (e.target.id === "btn-costos") {
        resultadoCuotas.innerHTML = "";
        resultadoCuotas.innerHTML += crearTitulo("Precio final venta");
        resultadoCuotas.innerHTML += tarjetaDebito(costos_compra.cuarenta, "40", "Precio final con el 40 %");
        resultadoCuotas.innerHTML += tarjetaDebito(costos_compra.cincuenta, "50", "Precio final con el 50 %");


    }
    });