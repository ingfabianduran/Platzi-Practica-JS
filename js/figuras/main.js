function setForm(figura) {
    const SEARCH_DATA_FORM = DATA_FORM_FIGURA.find((item) => {
        return figura === item.nombre;
    });
    let mainForm = document.getElementById('mainForm');
    mainForm.innerHTML = '';
    
    for (const item of SEARCH_DATA_FORM.form) {
        const TEMPLATE = `<div class="mb-3">
            <label for="${item.idInput}" class="form-label fw-bold h3">${item.label}</label>
            <input type="number" class="form-control" id="${item.idInput}" aria-describedby="${item.label}" placeholder="${item.label} de la figura">
        </div>`;
        mainForm.innerHTML += TEMPLATE;
    }
    
    const BUTTONS = `<div class="d-flex justify-content-around">
        <button id="btnArea" type="button" class="btn btn-lg" data-figura="${SEARCH_DATA_FORM.nombre}">Area del ${SEARCH_DATA_FORM.nombre}</button>
        <button id="btnPerimetro" type="button" class="btn btn-lg" data-figura="${SEARCH_DATA_FORM.nombre}">Perimetro del ${SEARCH_DATA_FORM.nombre}</button>
    </div>`;
    mainForm.innerHTML += BUTTONS;

    const TITLE = document.getElementById('figureSelect');
    TITLE.innerText = SEARCH_DATA_FORM.nombre;

    loadEvents();
}

function setImages() {
    let mainImages = document.getElementById('mainImages');
    for (const item of DATA_FORM_FIGURA) {
        mainImages.innerHTML += `<div id="${item.nombre}" class="container__figuras--images">
            <img src="${item.image}" class="img-fluid figuras__container--images" alt="${item.nombre}">
        </div>`;
    }
}

function loadEvents() {    
    const DIV_CUADRADO = document.getElementById('Cuadrado');
    DIV_CUADRADO.addEventListener('click', () => {
        setForm('Cuadrado');
    });
    const DIV_CIRCULO = document.getElementById('Circulo');
    DIV_CIRCULO.addEventListener('click', () => {
        setForm('Circulo');
    });
    const DIV_TRIANGULO = document.getElementById('Triangulo');
    DIV_TRIANGULO.addEventListener('click', () => {
        setForm('Triangulo');
    });

    const BUTTON_AREA = document.getElementById('btnArea');
    BUTTON_AREA.addEventListener('click', (event) => {
        const FIGURA = event.target.getAttribute('data-figura');
        const RESULTADO = document.getElementById('result');
        RESULTADO.innerText = selectFigureArea(FIGURA);
    });

    const BUTTON_PERIMETRO = document.getElementById('btnPerimetro');
    BUTTON_PERIMETRO.addEventListener('click', (event) => {
        const FIGURA = event.target.getAttribute('data-figura');
        const RESULTADO = document.getElementById('result');
        RESULTADO.innerText = selectFigurePerimetro(FIGURA);
    });
}

setImages();
setForm('Triangulo');