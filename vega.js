export default function vega(container){
    var chart={
        
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "data": {
              "url": "https://raw.githubusercontent.com/pseudodream/ToolAnalysis/main/fewer%20countries%20-%20data_healthexpenditure%20-%20fewer%20countries%20-%20data_healthexpenditure.csv"
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
          
        

    };
    vegaEmbed(container, chart);

}