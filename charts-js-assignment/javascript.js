var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Allegany County',
  'Anne Arundel County',
  'Baltimore City',
  'Baltimore County',
  'Calvert County',
  'Caroline County',
  'Carroll County',
  'Cecil County',
  'Charles County',
  'Dorchester County',
  'Frederick County',
  'Garrett County',
  'Harford County',
  'Howard County',
  'Kent County',
  'Montgomery County',
  "Prince George's County",
  "Queen Anne's County",
  "St. Mary's County",
  'Somerset County',
  'Talbot County',
  'Washington County',
  'Wicomico County',
  'Worcester County'],
        datasets: [{
            label: '% of high school attainment ',
            data: 
  [90.0, 92.1, 84.9, 91.1, 93.9, 83.9, 92.2, 89.0, 93.1, 86.9, 
  92.4, 89.3, 92.8, 95.5, 88.0, 91.3, 86.5, 92.1, 89.8, 81.9, 
  90.6, 86.9, 88.1, 90.9
],
            backgroundColor: [
                '#ff0800'
            ]
        },
        {
            label: '% of bachelors degree attainment',
            data: [
  18.3, 40.9, 31.2, 38.6, 31.1, 16.9, 35.6, 22.8, 28.9, 20.8, 
  40.6, 20.1, 35.8, 61.4, 34.2, 59.0, 32.7, 34.9, 31.5, 15.7, 
  38.6, 21.4, 26.8, 30.4
],
            backgroundColor: [
                '#FFA500'
            ],
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'In 2018, bachelor degree attainment was significantly lower than attaining high school diplomas across Maryland',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Amongst people who are 25 and over, Howard and Montgomery County have the highest bachelor degree attainment percentages compared to other counties in 2018, according to data from the U.S Census Bureau'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});