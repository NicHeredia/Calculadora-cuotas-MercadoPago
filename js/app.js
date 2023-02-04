const monto = document.querySelector("#monto");
const btnCalcular = document.querySelector("#btn-calcular");
const btnBorrar = document.querySelector("#btn-borrar");
const resultadoCuotas = document.querySelector("#resultadoCuotas");

const tasas = {
    debito : 1.07009,
    naranja : 1.115448,
    cuotas3 : 1.242546,
    cuotas6 : 1.380454,
    cuotas12 : 1.706776,
    cuotas18 : 112
};

btnBorrar.addEventListener("click", (e) =>{
    let borrarDelay
    resultadoCuotas.classList.add("fade-out");
    e.preventDefault();
    monto.value = "";
    // resultadoCuotas.innerHTML = ""
    borrarDelay = setTimeout(delay, 1000);
    monto.focus();
    
    function delay() {
        resultadoCuotas.innerHTML = ""
        resultadoCuotas.classList.remove("fade-out")
    }
    
})

btnCalcular.addEventListener("click", (e) =>{
    e.preventDefault();
    if (monto.value == "") {
        console.log("no ingreso un monto o ya calculo algo");
    } else {

        const montoFinal ={
            debito : Math.round(monto.value * tasas.debito),
            cuotas3 : Math.round(monto.value * tasas.cuotas3),
            cuotas6 : Math.round(monto.value * tasas.cuotas6),
            cuotas12 : Math.round(monto.value * tasas.cuotas12),
            cuotas18 : Math.round(((monto.value * tasas.cuotas18) / 100)) + Number(monto.value),
            naranja : Math.round(monto.value * tasas.naranja)
        }


    const crearTarjetaCuotas = (monto,cuota) => {
        let plantilla = `<div class="cardCuotas fade-in">
        <div class="cardCuota-numero">
            <span class="badge bg-primary rounded-pill pill">${cuota}</span>
            </div>
            <div class="cardCuota-Final">
            <span>Precio Final</span>
            <span>$${monto.toLocaleString("de-DE")}</span>
        </div>
        <div class="cardCuota-cuota">
            <span>${cuota} Cuotas de </span>
            <span>$${Math.round(monto / cuota).toLocaleString("de-DE")}</span>
            </div>
        </div>`
        return plantilla 
    }

    const crearTarjetaDebito = (montoDebito,montoNaranja) => {
        let plantilla = `<div class="cardCuotas fade-in">
        <div class="cardCuota-numero">
            <span class="badge bg-primary rounded-pill pill">D</span>
            </div>
            <div class="cardCuota-Final">
            <span>Precio Debito</span>
            <span>$${montoDebito.toLocaleString("de-DE")}</span>
        </div>
        <div class="cardCuota-cuota">
            <span>Precio Naranja</span>
            <span>$${montoNaranja.toLocaleString("de-DE")}</span>
            </div>
            </div>` 
            return plantilla
    }

    resultadoCuotas.innerHTML = "";
    resultadoCuotas.innerHTML += crearTarjetaDebito(montoFinal.debito, montoFinal.naranja);
    resultadoCuotas.innerHTML += crearTarjetaCuotas(montoFinal.cuotas3, 3);
    resultadoCuotas.innerHTML += crearTarjetaCuotas(montoFinal.cuotas6, 6);
    resultadoCuotas.innerHTML += crearTarjetaCuotas(montoFinal.cuotas12, 12);
    resultadoCuotas.innerHTML += crearTarjetaCuotas(montoFinal.cuotas18, 18);
    
    }
    });
    
    