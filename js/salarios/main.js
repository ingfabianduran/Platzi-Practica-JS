function main() {
    const MAIN_FORM = document.getElementById('mainForm');
    let chart = showChart();
    MAIN_FORM.addEventListener('submit', (e) => {
        e.preventDefault();
        const PAISES = parseInt(document.getElementById('numPaises').value);
        const PERSONAS = parseInt(document.getElementById('numPersonas').value);
        const DATA = generateSalarios(PAISES, PERSONAS);
        const LABELS = getLabels(DATA);
        const MEDIANAS = getMedianaPorPais(DATA);
        chart.data.labels = LABELS;
        chart.data.datasets[0].data = MEDIANAS;
        chart.update();
        MAIN_FORM.reset();
    });
}

function showChart(paises = 5, personas = 5) {
    const DATA = generateSalarios(paises, personas);
    const LABELS = getLabels(DATA);
    const MEDIANAS = getMedianaPorPais(DATA);
    return createChart(LABELS, MEDIANAS);
}

function createChart(labels, data) {
    Chart.defaults.font.size = 18;
    Chart.defaults.font.family = 'Yanone Kaffeesatz';
    const CTX  = document.getElementById('mainChart').getContext('2d');
    const CHART = new Chart(CTX, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Paises',
                data: data,
                backgroundColor: 'rgba(81, 45, 109, 0.2)',
                borderColor: 'rgba(81, 45, 109, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Reporte de Medianas',
                    font: {
                        size: 26
                    }
                },
            }
        }
    });
    return CHART;
}

main();