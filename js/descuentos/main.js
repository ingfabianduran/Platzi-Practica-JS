function loadCupones() {
    const SELECT_CUPONES = document.getElementById('cupones');
    for (const cupon of CUPONES) {
        const option = cupon.disponible ? `<option value="${cupon.descuento}">${cupon.nombre}</option>` : `<option value="${cupon.descuento}" disabled>${cupon.nombre}</option>`;
        SELECT_CUPONES.innerHTML += option;
    }
}

function calcularDescuento(compra, descuento) {
    const TOTALES = { totalPagar: 0, totalDescuento: 0 };
    TOTALES.totalDescuento = (descuento * compra) / 100;
    TOTALES.totalPagar = compra - TOTALES.totalDescuento;
    return TOTALES;
}

function submitForm() {
    const MAIN_FORM = document.getElementById('mainForm');
    MAIN_FORM.addEventListener('submit', (e) => {
        e.preventDefault();
        const COSTO = document.getElementById('costo').value;
        const CUPON = document.getElementById('cupones').value;
        const RESULTADO = calcularDescuento(COSTO, CUPON);
        const MESSAGE = document.getElementById('result');
        MESSAGE.innerText = `Descuento-> ${RESULTADO.totalDescuento} Valor a pagar-> ${RESULTADO.totalPagar}`;
    });
}

loadCupones();
submitForm();