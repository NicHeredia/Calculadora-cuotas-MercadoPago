const monto = document.querySelector("#monto");
const btnCalcular = document.querySelector("#btn-calcular");
const btnBorrar = document.querySelector("#btn-borrar");
const resultadoCuotas = document.querySelector("#resultadoCuotas");

const debito = 1.06735
const naranjaX = 1.396256;
const cuotas3 = 1.240696;
const cuotas6 = 1.37817;
const cuotas12 = 1.703288;
const cuotas18 = 111.5;

btnBorrar.addEventListener("click", (e) =>{
    e.preventDefault();
    monto.value = "";
    resultadoCuotas.innerHTML = ""
})

btnCalcular.addEventListener("click", (e) =>{
    e.preventDefault();
    if (monto.value == "") {
        console.log("no ingreso un monto");
    } else {

        const debitoFinal = Math.round(monto.value * debito);
        const monto3cuotas = Math.round(monto.value * cuotas3);
        const monto6cuotas = Math.round(monto.value * cuotas6); 
        const monto12cuotas = Math.round(monto.value * cuotas12);
        const monto18cuotas = Math.round(((monto.value * cuotas18) / 100)) + Number(monto.value);
        const naranjaXFinal = Math.round(monto.value * naranjaX);

    
    
    resultadoCuotas.innerHTML = `<div class="cardCuotas">
    <div class="cardCuota-numero">
        <span class="badge bg-primary rounded-pill pill">D</span>
        </div>
        <div class="cardCuota-Final">
        <span>Debito</span>
        <span>$${debitoFinal.toLocaleString("de-DE")}</span>
    </div>
    <div class="cardCuota-cuota">
        <span>Naranja Plan Z</span>
        <span>$${Math.round(naranjaXFinal).toLocaleString("de-DE")}</span>
        </div>
        </div>

        <div class="cardCuotas">
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
    
    