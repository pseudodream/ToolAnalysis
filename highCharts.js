


export default function highCharts(container){

    d3.csv("./data.csv", d3.autoType).then((data) => {
        processData(data);
      });
      //they actually don't have accessibilty features yet
    
      function processData(data) {
        var x = [],y = [];
       var y1=[],y2=[],y3=[];
    
    
        for (var i = 0; i < data.length; i++) {
          x.push(data[i]["Location"]);
          y.push(data[i]["VALUE2016"]);
        }
    
        makePlotly(x, y);
      }
    const chart=Highcharts.chart(container, {
        chart: {
            type: 'bar'
        },
        data:{
            csvURL:"./data.csv"
        },
        title: {
            text: 'Spending on health care'
        },
        xAxis: {
            title: {
                text: "Countries"
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Spending',
            },
    
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        }
    });
    return 0;

}
