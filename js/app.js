const monto = document.querySelector("#monto");
const resultadoCuotas = document.querySelector("#resultadoCuotas");
const form = document.querySelector("#form")



//objeto que contiene los tasas que se cobran dependiendo cada tarjeta y cuota deseada    
const montoFinal_ahora = {
    naranja : 1.115448,
    cuotas3 : 1.242546,
    cuotas6 : 1.380454,
    cuotas12 : 1.706776,
    cuotas18 : 2.119092
}
const montoFinal_naranja = {
    debito : 1.07009,
    naranja3 :montoFinal_ahora.naranja * 1.2614,
    naranja6 :montoFinal_ahora.naranja * 1.4834
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

const tarjetaDebitoYPlanZ = (montoFinal, cuota, nombre) => {
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
    resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_ahora.cuotas3, 3);
    resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_ahora.cuotas6, 6);
    resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_ahora.cuotas12, 12);
    resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_ahora.cuotas18, 18);
    
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
        resultadoCuotas.innerHTML += crearTitulo("Naranja Z")
        resultadoCuotas.innerHTML += tarjetaDebitoYPlanZ(montoFinal_naranja.debito, "D", "Precio Debito Final");
        resultadoCuotas.innerHTML += tarjetaDebitoYPlanZ(montoFinal_ahora.naranja, "Z", "Este monto en Point");
        resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_naranja.naranja3, 3);
        resultadoCuotas.innerHTML += tarjetaCuotas(montoFinal_naranja.naranja6, 6);
        
    }
    });