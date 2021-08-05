function generateSalarios(countPaises, countPersonas) {
    let data = [];
    for (let i = 0; i < countPaises; i ++) {
        let objectInfo = {};
        let personas = [];
        objectInfo.pais = faker.address.country();
        for (let j = 0; j < countPersonas; j ++) {
            const persona = { nombre: faker.name.firstName(), sueldo: faker.datatype.number({ min: 1000, max: 10000 }) };
            personas.push(persona);
        }
        objectInfo.personas = personas;
        data.push(objectInfo);
    }
    return data;
}

function getLabels(data) {
    const LABELS = data.map((item) => {
        return item.pais;
    });
    return LABELS;
}

function getMedianaPorPais(data) {
    let medianas = [];
    for (const item of data) {
        const SALARIOS = item.personas.map((persona) => {
            return persona.sueldo;
        });
        const MEDIANA = getMediana(SALARIOS);
        medianas.push(MEDIANA);
    }
    return medianas;
}