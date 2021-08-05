function getMediana(salarios) {
    const LISTA_ORDENADA = salarios.sort();
    const LONGITUD = salarios.length;
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