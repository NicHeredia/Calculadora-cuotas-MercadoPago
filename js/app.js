const monto = document.querySelector("#monto");
const btnAhora = document.querySelector("#btn-ahora");
const btnBorrar = document.querySelector("#btn-borrar");
const resultadoCuotas = document.querySelector("#resultadoCuotas");



btnBorrar.addEventListener("click", (e) =>{
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
    
})

btnAhora.addEventListener("click", (e) =>{
    e.preventDefault();
    if (monto.value == "") {
        console.log("no ingreso un monto o ya calculo algo");
    } else {

        const montoFinal_ahora = {
            naranja : Math.round(monto.value * 1.115448),
            cuotas3 : Math.round(monto.value *  1.242546),
            cuotas6 : Math.round(monto.value * 1.380454),
            cuotas12 : Math.round(monto.value * 1.706776),
            cuotas18 : Math.round(((monto.value * 112) / 100)) + Number(monto.value),
           
        }

        const montoFinal_naranja = {
            debito : Math.round(monto.value * 1.07009),
            naranja3 : Math.round(montoFinal_ahora.naranja * 1.2614),
            naranja6 : Math.round(montoFinal_ahora.naranja * 1.4834)
        }




    const crearTarjetaCuotas = (monto,cuota) => {
        let plantilla = `<div class="cardCuota fade-in">
        <div class="cardCuota__numero">${cuota}</div>
        <div class="cardCuota__contenedorMontos">
          <p class="cardCuota__precioFinal">Precio Final $${monto.toLocaleString("de-DE")}</p>
          <p class="cardCuota__precioCuotas">en ${cuota} cuotas de $${Math.round(monto / cuota).toLocaleString("de-DE")}</p>
        </div>`
        return plantilla 
    }

    const crearTarjetaDebito = (montoDebito,montoNaranja) => {
        let plantilla = `<div class="cardCuotas fade-in">
        <div class="cardCuota-numero">
        <span class="badge bg-primary rounded-pill pill">D</span>
        </div>
            <div class="cardCuota-Final">
            <span>Debito</span>
            <span>$${montoDebito.toLocaleString("de-DE")}</span>
        </div>
        <div class="cardCuota-cuota">
            <span>1 Pago o Naranja </span>
            <span>$${montoNaranja.toLocaleString("de-DE")}</span>
            </div>
            </div>` 
            return plantilla
    }

    const crearTitulo = (titulo) => {
        return `<h2 class="tituloSeparador">${titulo}</h2>`
    }

    resultadoCuotas.innerHTML = "";
    // resultadoCuotas.innerHTML += crearTitulo("Naranja")
    // resultadoCuotas.innerHTML += crearTarjetaDebito(montoFinal_naranja.debito, montoFinal_ahora.naranja);
    // resultadoCuotas.innerHTML += crearTarjetaCuotas(montoFinal_naranja.naranja3, 3);
    // resultadoCuotas.innerHTML += crearTarjetaCuotas(montoFinal_naranja.naranja6, 6);

    resultadoCuotas.innerHTML += crearTitulo("Plan Ahora")
    resultadoCuotas.innerHTML += crearTarjetaCuotas(montoFinal_ahora.cuotas3, 3);
    resultadoCuotas.innerHTML += crearTarjetaCuotas(montoFinal_ahora.cuotas6, 6);
    resultadoCuotas.innerHTML += crearTarjetaCuotas(montoFinal_ahora.cuotas12, 12);
    resultadoCuotas.innerHTML += crearTarjetaCuotas(montoFinal_ahora.cuotas18, 18);
    
    }
    });
    
    