export default function googleCharts(container) {
  d3.csv("./data.csv", d3.autoType).then((data) => {
    console.log(data);
    processData(data);
  });

  function processData(data) {
    google.charts.load("current", { packages: ["corechart", "bar"] });
    google.charts.setOnLoadCallback(drawBasic);

    

    function drawBasic() {
      var datatable = new google.visualization.DataTable();
      datatable.addColumn('string', 'Location');
      datatable.addColumn('number','VALUE2016')
      datatable.addColumn('number','VALUE2017')
      datatable.addColumn('number','VALUE2018')
      datatable.addColumn('number','VALUE2019')

      var x = [],y = [];
        var y1=[],y2=[],y3=[];
    
    
        for (var i = 0; i < data.length; i++) {
          x.push(data[i]["Location"]);
          data[i]["VALUE2016"]==null?0: y.push(data[i]["VALUE2016"])
          data[i]["VALUE2017"]==null?0: y1.push(data[i]["VALUE2017"])
          data[i]["VALUE2018"]==null?0: y2.push(data[i]["VALUE2018"])
          data[i]["VALUE2019"]==null?0: y3.push(data[i]["VALUE2019"])


        }



        var arr=[];
        for(var i=0;i<x.length/4;i++){
          var d=[];
          d.push(x[i]);
          d.push(y[i]);
          d.push(y1[i]);
          d.push(y2[i]);
          d.push(y3[i]);
          arr.push(d);
        }

        console.log(arr)



        

        datatable.addRows(arr);

      


      console.log(datatable)

      var options = {
        title: 'Healthcare spendings',

        hAxis: {
          title: 'Location',
        },
        vAxis: {
          title: 'Spending'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('container'));

      chart.draw(datatable, options);
      
     
    }
  }
}
