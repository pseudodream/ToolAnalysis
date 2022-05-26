export default function googleCharts(container){

    

d3.csv("./data.csv", d3.autoType).then((data) => {
   
    console.log(data)
    processData(data);

  });

  function processData(data){
    google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic(){
    var options = {
        chart: {
          title: 'Healthcare spendings',
        },
        series: {
          0: {axis: 'MotivationLevel'},
        },
        axes: {
          y: {
            MotivationLevel: {label: 'Motivation Level (1-10)'},
          }
        },
        hAxis: {
          title: 'spending',
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('container'));
      chart.draw(data, options);


}

   

  }

}