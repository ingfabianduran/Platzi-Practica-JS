function submitMainForm() {
    const MAIN_FORM = document.getElementById('mainForm');
    const LIST_SALARIOS = document.getElementById('listaSalarios');
    LIST_SALARIOS.innerHTML = salarios.length === 0 ? '<li class="list-group-item">No hay salarios registrados</li>' : '';
    MAIN_FORM.addEventListener('submit', (e) => {
        e.preventDefault();
        const SALARIO = document.getElementById('salario');
        const SALARIO_VALUE = parseInt(SALARIO.value);
        salarios.push(SALARIO_VALUE);
        calcularResults(LIST_SALARIOS);
        MAIN_FORM.reset();
    });
}

function calcularResults(listSalarios) {
    const RESULTADOS = {
        promedio: getPromedio(salarios),
        mediana: getMediana(salarios),
        moda: getModa(salarios)
    };
    const DIV_RESULTADOS = document.getElementById('results');
    DIV_RESULTADOS.innerHTML = showResults(RESULTADOS);
    listSalarios.innerHTML = showSalarios(salarios);
}

function showResults(resultados) {
    const MESSAGE = `<strong>Promedio: </strong>${resultados.promedio}  <strong>Moda: </strong>${resultados.moda}  <strong>Mediana: </strong>${resultados.mediana}`;
    return MESSAGE;
}

function showSalarios(salarios) {
    let salariosHtml = '';
    for (const item of salarios) {
        salariosHtml += `<li class="list-group-item">$ ${item}</li>`;
    }
    return salariosHtml;
}

submitMainForm();