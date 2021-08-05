function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function perimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

function alturaTriangulo(lado, base) {
    return Math.sqrt(Math.pow(lado, 2) - (Math.pow(base, 2) / 4));
}

function areaTriangulo(lado, base) {
    const ALTURA = alturaTriangulo(lado, base);
    return (base * ALTURA) / 2;
}

function perimetroTriangulo(lado, base) {
    return (2 * lado) + base;
}

function selectFigureArea(figura) {
    if (figura === 'Cuadrado') {
        const LADO = document.getElementById('lado').value;
        return areaCuadrado(LADO);
    } else if (figura === 'Circulo') {
        const RADIO = document.getElementById('radio').value;
        return areaCirculo(RADIO);
    } else {
        const LADO_A = document.getElementById('ladoA').value;
        const LADO_B = document.getElementById('ladoB').value;
        const BASE = document.getElementById('base').value;
        return isTrianguloIsoceles(LADO_A, LADO_B) ? areaTriangulo(LADO_A, BASE) : 'El Triangulo no es Isoceles';
    }
}

function selectFigurePerimetro(figura) {
    if (figura === 'Cuadrado') {
        const LADO = document.getElementById('lado').value;
        return perimetroCuadrado(LADO);
    } else if (figura === 'Circulo') {
        const RADIO = document.getElementById('radio').value;
        return perimetroCirculo(RADIO);
    } else {
        const LADO_A = document.getElementById('ladoA').value;
        const LADO_B = document.getElementById('ladoB').value;
        const BASE = document.getElementById('base').value;
        return isTrianguloIsoceles(LADO_A, LADO_B) ? perimetroTriangulo(LADO_A, BASE) : 'El Triangulo no es Isoceles';
    }
}

function isTrianguloIsoceles(ladoA, ladoB) {
    if (ladoA === ladoB) {
        return true;
    } else {
        return false;
    }
}