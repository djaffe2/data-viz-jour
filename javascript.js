var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia and Pacific', 'Europe and Central Asia', 'Middle East and North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'Region',
            data: [18791.13,14480.30,20818.45,13856,2505.17,2569],
            backgroundColor: [
                '#ff0800'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'GDP per capita by region',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Europe and Central Asia has highest GDP per capita with America coming close at an approximate $2,000 difference '
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});