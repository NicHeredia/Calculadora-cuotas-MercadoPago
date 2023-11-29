const monto = document.querySelector("#monto");
const resultadoCuotas = document.querySelector("#resultadoCuotas");
const form = document.querySelector("#form");
const btnBorrar = document.querySelector("#btn-borrar");



//objeto que contiene las tasas que se cobran dependiendo cada tarjeta y cuota deseada    
const montoFinal_ahora = {
    cuotas1 : 1.123092,
    debito : 1.070664,
    cuotas3 : 1.336364,
    cuotas6 : 1.585038,
    cuotas12 : 2.25581
}
const montoFinal_naranja = {
    naranja2 : 1.468214,
    naranja3 : 1.617862,
    naranja6 : 2.192982
}

const costos_compra = {
    cuarenta: 1.694,
    cincuenta: 1.815
}

const porcentajes = {
    debito : 8,
    cuotas1 : 13,
    naranja2 : 47,
    naranja3 : 62,
    naranja6 : 120,
    ahora3 : 34,
    ahora6 : 59,
    ahora12 : 126  
}


//Funciones que se encargan de crear las tarjetas y los titulos
const tarjetaCuotas = (montoFinal,cuota, porcentaje) => {
    let plantilla = `<div class="cardCuota fade-in">
    <div class="cardCuota__numero">${cuota}</div>
    <div class="cardCuota__contenedorMontos">
      <p class="cardCuota__precioFinal">Precio Final $${Math.round(monto.value * montoFinal).toLocaleString("de-DE")}</p>
      <p class="cardCuota__precioCuotas">${cuota} cuotas de $${Math.round((monto.value * montoFinal) / cuota).toLocaleString("de-DE")}</p>
    </div>
    <div class="cardCuota__porcentaje">${porcentaje}%</div>`
    return plantilla 
}

const tarjetaDebito = (montoFinal, cuota, nombre, porcentaje) => {
    let plantilla = `<div class="cardCuota fade-in">
    <div class="cardCuota__numero">${cuota}</div>
    <div class="cardCuota__contenedorMontos">
      <p class="cardCuota__precioFinal">Precio Final $${Math.round(monto.value * montoFinal).toLocaleString("de-DE")}</p>
      <p class="cardCuota__precioCuotas">${nombre}</p>
    </div>
    <div class="cardCuota__porcentaje">${porcentaje}%</div>`
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
        btnBorrar.style.display = "block";
    resultadoCuotas.innerHTML = "";
    resultadoCuotas.innerHTML += crearTitulo("Plan Ahora")
    resultadoCuotas.innerHTML += tarjetaDebito(montoFinal_ahora.cuotas1, "1", "Precio final 1 Cuota", porcentajes.cuotas1);
    resultadoCuotas.innerHTML += tarjetaDebito(montoFinal_ahora.debito, "D", "Precio final con Debito", porcentajes.debito);
    resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_ahora.cuotas3, 3, porcentajes.ahora3);
    resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_ahora.cuotas6, 6, porcentajes.ahora6);
    resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_ahora.cuotas12, 12, porcentajes.ahora12);
    
    } else if (e.target.id === "btn-borrar"){
        btnBorrar.style.display = "none";
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
        btnBorrar.style.display = "block";
        resultadoCuotas.innerHTML = "";
        resultadoCuotas.innerHTML += crearTitulo("Naranja");
        resultadoCuotas.innerHTML += tarjetaDebito(montoFinal_ahora.cuotas1, "1", "Precio final 1 Cuota", porcentajes.cuotas1);
        resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_naranja.naranja2, 2, porcentajes.naranja2);
        resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_naranja.naranja3, 3, porcentajes.naranja3);
        resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_naranja.naranja6, 6, porcentajes.naranja6);
        
    } else if (e.target.id === "btn-costos") {
        btnBorrar.style.display = "block";
        resultadoCuotas.innerHTML = "";
        resultadoCuotas.innerHTML += crearTitulo("Precio final venta");
        resultadoCuotas.innerHTML += tarjetaDebito(costos_compra.cuarenta, "40", "Precio final con el 40 %");
        resultadoCuotas.innerHTML += tarjetaDebito(costos_compra.cincuenta, "50", "Precio final con el 50 %");


    }
    });