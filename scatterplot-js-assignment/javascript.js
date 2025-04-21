var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [
            { data: [{x: 13.9, y: 18.3}], label: "Allegany", borderColor: "#3e95cd", backgroundColor: "rgb(62,149,205,0.1)", borderWidth:2 },
            { data: [{x: 14.7, y: 40.9}], label: "Anne Arundel", borderColor: "#3cba9f", backgroundColor: "rgb(60,186,159,0.1)", borderWidth:2 },
            { data: [{x: 16.1, y: 31.2}], label: "Baltimore City", borderColor: "#ffa500", backgroundColor: "rgb(255,165,0,0.1)", borderWidth:2 },
            { data: [{x: 15.1, y: 38.6}], label: "Baltimore County", borderColor: "#e83e8c", backgroundColor: "rgb(232,62,140,0.1)", borderWidth:2 },
            { data: [{x: 15.7, y: 31.1}], label: "Calvert", borderColor: "#6f42c1", backgroundColor: "rgb(111,66,193,0.1)", borderWidth:2 },
            { data: [{x: 13.8, y: 22.5}], label: "Caroline", borderColor: "#20c997", backgroundColor: "rgb(32,201,151,0.1)", borderWidth:2 },
            { data: [{x: 14.8, y: 20.7}], label: "Carroll", borderColor: "#6610f2", backgroundColor: "rgb(102,16,242,0.1)", borderWidth:2 },
            { data: [{x: 13.3, y: 27.3}], label: "Cecil", borderColor: "#fd7e14", backgroundColor: "rgb(253,126,20,0.1)", borderWidth:2 },
            { data: [{x: 15.0, y: 30.1}], label: "Charles", borderColor: "#17a2b8", backgroundColor: "rgb(23,162,184,0.1)", borderWidth:2 },
            { data: [{x: 14.1, y: 39.7}], label: "Dorchester", borderColor: "#dc3545", backgroundColor: "rgb(220,53,69,0.1)", borderWidth:2 },
            { data: [{x: 14.6, y: 39.4}], label: "Frederick", borderColor: "#28a745", backgroundColor: "rgb(40,167,69,0.1)", borderWidth:2 },
            { data: [{x: 15.5, y: 31.3}], label: "Garrett", borderColor: "#007bff", backgroundColor: "rgb(0,123,255,0.1)", borderWidth:2 },
            { data: [{x: 14.4, y: 63.6}], label: "Howard", borderColor: "#6c757d", backgroundColor: "rgb(108,117,125,0.1)", borderWidth:2 },
            { data: [{x: 13.9, y: 28.4}], label: "Harford", borderColor: "#adb5bd", backgroundColor: "rgb(173,181,189,0.1)", borderWidth:2 },
            { data: [{x: 16.5, y: 32.0}], label: "Prince George's", borderColor: "#ffc107", backgroundColor: "rgb(255,193,7,0.1)", borderWidth:2 },
            { data: [{x: 14.3, y: 60.5}], label: "Montgomery", borderColor: "#343a40", backgroundColor: "rgb(52,58,64,0.1)", borderWidth:2 },
            { data: [{x: 14.4, y: 30.3}], label: "Kent", borderColor: "#20c997", backgroundColor: "rgb(32,201,151,0.1)", borderWidth:2 },
            { data: [{x: 14.5, y: 24.7}], label: "Queen Anne's", borderColor: "#6610f2", backgroundColor: "rgb(102,16,242,0.1)", borderWidth:2 },
            { data: [{x: 14.3, y: 26.1}], label: "St. Mary's", borderColor: "#17a2b8", backgroundColor: "rgb(23,162,184,0.1)", borderWidth:2 },
            { data: [{x: 14.5, y: 22.2}], label: "Somerset", borderColor: "#dc3545", backgroundColor: "rgb(220,53,69,0.1)", borderWidth:2 },
            { data: [{x: 13.8, y: 19.6}], label: "Talbot", borderColor: "#007bff", backgroundColor: "rgb(0,123,255,0.1)", borderWidth:2 },
            { data: [{x: 14.6, y: 37.3}], label: "Washington", borderColor: "#6c757d", backgroundColor: "rgb(108,117,125,0.1)", borderWidth:2 },
            { data: [{x: 14.6, y: 34.2}], label: "Wicomico", borderColor: "#28a745", backgroundColor: "rgb(40,167,69,0.1)", borderWidth:2 },
            { data: [{x: 13.6, y: 42.4}], label: "Worcester", borderColor: "#e83e8c", backgroundColor: "rgb(232,62,140,0.1)", borderWidth:2 }
        ]
        
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: "% Adults with Bachelor's Degree"
                }
            },
            x: {
                title: {
                    display: true,
                    text: "Student-Teacher Ratio"
                }
            }
        }
    }
});
