var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: [
            "Allegany", "Anne Arundel", "Baltimore City", "Baltimore County",
            "Calvert", "Caroline", "Carroll", "Cecil", "Charles", "Dorchester",
            "Frederick", "Garrett", "Howard", "Harford", "Prince George's", 
            "Montgomery", "Kent", "Queen Anne's", "St. Mary's", "Somerset",
            "Talbot", "Washington", "Wicomico", "Worcester"
        ],
        datasets: [{
            label: '% Adults with Bachelor’s Degree',
            data: [
                18.3, 40.9, 31.2, 38.6, 31.1, 22.5, 20.7, 27.3, 30.1, 39.7,
                39.4, 31.3, 63.6, 28.4, 32.0, 60.5, 30.3, 24.7, 26.1, 22.2,
                19.6, 37.3, 34.2, 42.4
            ],
            backgroundColor: [
                '#3e95cd', '#3cba9f', '#ffa500', '#e83e8c', '#6f42c1',
                '#20c997', '#6610f2', '#fd7e14', '#17a2b8', '#dc3545',
                '#28a745', '#007bff', '#6c757d', '#adb5bd', '#ffc107',
                '#343a40', '#ff6384', '#4bc0c0', '#ff9f40', '#9966ff',
                '#c45850', '#ff6384', '#4bc0c0', '#36a2eb'
            ]
        }]
    },
    options: {
        scales: {
            r: {
                ticks: {
                    beginAtZero: true
                }
            }
        },
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
});
