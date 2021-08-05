function getPromedio(lista) {
    const CANTIDAD_VALORES = lista.length;
    const SUMA_VALORES = salarios.reduce((suma, value) => {
        return suma + value;
    });
    const PROMEDIO = SUMA_VALORES / CANTIDAD_VALORES;
    return PROMEDIO.toFixed(2);
}

function getMediana(lista) {
    const LISTA_ORDENADA = lista.sort();
    const LONGITUD = lista.length;
    if (isImpar(LONGITUD)) {
        return LISTA_ORDENADA[parseInt(LONGITUD / 2)];
    } else {
        const VALOR_A = LISTA_ORDENADA[parseInt(LONGITUD / 2)];
        const VALOR_B = LISTA_ORDENADA[parseInt(LONGITUD / 2) - 1];
        return (VALOR_A + VALOR_B) / 2;
    }
}

function isImpar(longitud) {
    if (longitud % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

function getModa(lista) {
    let cantidadesAgrupadas = {};
    lista.map((item) => {
        const PROPIEDAD = item.toString();
        if (cantidadesAgrupadas.hasOwnProperty(PROPIEDAD)) {
            cantidadesAgrupadas[PROPIEDAD] += 1;
        } else {
            cantidadesAgrupadas[PROPIEDAD] = 1;
        }
    });
    return maxItem(cantidadesAgrupadas);
}

function maxItem(agrupados) {
    let cantidades = [];
    for (const key in agrupados) {
        cantidades.push(agrupados[key]);
    }
    return searchKeyItem(agrupados, Math.max(...cantidades));
}

function searchKeyItem(agrupados, max) {
    let keyMax = '';
    for (const key in agrupados) {
        if (max == agrupados[key]) {
            keyMax = key;
        }
    }
    return keyMax;
}