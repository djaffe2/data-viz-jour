window.onload = function() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{ 
            data: [
              {x: 71.5, y: 3678},
            ],
            label: "China",
            borderColor: "#3e95cd",
            backgroundColor: "rgba(62,149,205,0.1)",
            borderWidth:2,
        }, { 
            data: [
              {x: 61.1, y: 2548},
            ],
            label: "India",
            borderColor: "#3cba9f",
            backgroundColor: "rgba(60,186,159,0.1)",
            borderWidth:2,
        }, { 
            data: [
              {x: 77.1, y: 45986},
            ],
            label: "US",
            borderColor: "#ffa500",
            backgroundColor:"rgba(255,165,0,0.1)",
            borderWidth:2,
        },
      { 
            data: [
              {x: 68.3, y: 5878},
            ],
            label: "Indonesia",
            borderColor: "#F87575",
            backgroundColor:"rgba(248, 117, 117, 0.1)",
            borderWidth:2,
        },
                   
 {          
     data: [
              {x: 71.9, y: 11461},
            ],
            label: "Brazil",
            borderColor: "#2F3061",
            backgroundColor:"rgba(47, 48, 97, 0.1)",
            borderWidth:2,
        },                   
                  
                  
                  
                  ]
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: 'GDP per Capita'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Life Expectancy'
            }
          }
        }
      }
  });
};
