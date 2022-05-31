document.addEventListener('DOMContentLoaded',function(){
    const labels = ["covered spaces", "open spaces"]
    const data = {
        labels: labels,
        datasets: [
            {
                data: [60,25],
                backgroundColor: [
                    '#A52A2A',
                    '#1E90FF',
                ]
            }
        ],
        hoverOffset: 4
    };
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "car parking spaces ",
                    font: {
                        size: 24
                    },
                    padding: 20
                },
                legend: {
                    display: true
                }
            }
        }

    };
    var myChart = new Chart(
        document.getElementById('myChart2'),
        config

    )
    }
    )