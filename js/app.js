const monto = document.querySelector("#monto");
const btnCalcular = document.querySelector("#btn-calcular");
const btnBorrar = document.querySelector("#btn-borrar");
const resultadoCuotas = document.querySelector("#resultadoCuotas");


const cuotas3 = 1.161576;
const cuotas6 = 1.2430008;
const cuotas12 = 1.423082;
const cuotas18 = 1.743072;

btnBorrar.addEventListener("click", () =>{
    monto.value = "";
})

btnCalcular.addEventListener("click", () =>{

    if (monto.value == "") {
        console.log("no ingreso un monto");
    } else {

        const monto3cuotas = Math.round(monto.value * cuotas3);
        const monto6cuotas = Math.round(monto.value * cuotas6); 
        const monto12cuotas = Math.round(monto.value * cuotas12);
    const monto18cuotas = Math.round(monto.value * cuotas18);
    
    
    resultadoCuotas.innerHTML = `<div class="cardCuotas">
    <div class="cardCuota-numero">
        <span class="badge bg-primary rounded-pill pill">3</span>
        </div>
        <div class="cardCuota-Final">
        <span>Precio Final</span>
        <span>$${monto3cuotas.toLocaleString("de-DE")}</span>
    </div>
    <div class="cardCuota-cuota">
        <span>3 Cuotas de</span>
        <span>$${Math.round(monto3cuotas / 3).toLocaleString("de-DE")}</span>
        </div>
        </div>
        
        
        <div class="cardCuotas">
        <div class="cardCuota-numero">
        <span class="badge bg-primary rounded-pill pill">6</span>
    </div>
    <div class="cardCuota-Final">
    <span>Precio Final</span>
    <span>$${monto6cuotas.toLocaleString("de-DE")}</span>
    </div>
    <div class="cardCuota-cuota">
    <span>6 Cuotas de</span>
    <span>$${Math.round(monto6cuotas / 6).toLocaleString("de-DE")}</span>
    </div>
    </div>
    
    
    <div class="cardCuotas">
    <div class="cardCuota-numero">
    <span class="badge bg-primary rounded-pill pill">12</span>
    </div>
    <div class="cardCuota-Final">
    <span>Precio Final</span>
    <span>$${monto12cuotas.toLocaleString("de-DE")}</span>
    </div>
    <div class="cardCuota-cuota">
    <span>12 Cuotas de</span>
    <span>$${Math.round(monto12cuotas / 12).toLocaleString("de-DE")}</span>
    </div>
    </div>
    
    
    <div class="cardCuotas">
    <div class="cardCuota-numero">
    <span class="badge bg-primary rounded-pill pill">18</span>
    </div>
    <div class="cardCuota-Final">
    <span>Precio Final</span>
        <span>$${monto18cuotas.toLocaleString("de-DE")}</span>
        </div>
        <div class="cardCuota-cuota">
        <span>18 Cuotas de</span>
        <span>$${Math.round(monto18cuotas / 18).toLocaleString("de-DE")}</span>
        </div>
        </div>`
    }
    });
    
    