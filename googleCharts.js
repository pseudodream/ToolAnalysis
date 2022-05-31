export default function googleCharts(container) {
  google.charts.load('upcoming', {'packages': ['vegachart']})
  google.charts.setOnLoadCallback(drawBasic);

  function drawBasic() {
    $.get(
      "./data.csv",
      function (csvString) {
        var arrayData = $.csv.toArrays(csvString, {
          onParseValue: $.csv.hooks.castToScalar,
        });
      
        var dt = google.visualization.arrayToDataTable(arrayData);
        console.log(dt)
        var options = {
          "vegaLite" :{

         
          
          "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
          "usermeta": {"embedOptions": {"renderer": "svg"}},
          "data": {
            "url": "https://raw.githubusercontent.com/pseudodream/ToolAnalysis/main/data.csv"
          },
          "width": 500,
          "height": 300,
           "columns": 2,
          "concat": [
            {
              "mark": "bar",
              "encoding": {
                "x": {"field": "Location", "type": "nominal"},
                "y": {"field": "VALUE2016", "type": "quantitative"}
              }
            },
             {
              "mark": "bar",
              "encoding": {
                "x": {"field": "Location", "type": "nominal"},
                "y": {"field": "VALUE2017", "type": "quantitative"}
              }
            },
            {
              "mark": "bar",
              "encoding": {
                "x": {"field": "Location", "type": "nominal"},
                "y": {"field": "VALUE2018", "type": "quantitative"}
              }
            },
            {
              "mark": "bar",
              "encoding": {
                "x": {"field": "Location", "type": "nominal"},
                "y": {"field": "VALUE2019", "type": "quantitative"}
              }
            }
          ]
        }
        };

        var chart = new google.visualization.VegaChart(
          document.getElementById("container")
        );
        
        chart.draw(dt, options);
      },
      "text"
    );
  }
}
