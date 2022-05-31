document.addEventListener('DOMContentLoaded',function(){
    const labels = ["100 sq.m. ( 2-bedrooms )", "135 sq.m. ( 3-bedrooms )", "150 sq.m. ( 3-bedrooms )", "170 sq.m. ( 4-bedrooms )"]
            const data = {
                labels: labels,
                datasets: [
                    {
                        data: [3, 28, 30, 7],
                        backgroundColor: [
    
                            '#F08080',
                            '#FF8C00',
                            '#FFD700',
                            '#008B8B'
                        ]
                    }
                ]
            };
            const config = {
                type: 'bar',
                data: data,
                options: {
                    indexAxis: 'x',
                    scales: {
                        x: {
                            title: {
                                display: true,
                                font: {
                                    size: 18
                                },
                                padding: 20
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: "Number of apartments in Tower 1 to Tower 3",
                            font: {
                                size: 24
                            },
                            padding: 20
                        },
                        legend: {
                            display: false
                        }
                    }
                }
    
            };
            var myChart = new Chart(
                document.getElementById('myChart1'),
                config
    
            );
    }
    )