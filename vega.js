export default function vega(container){
    var chart={
        
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
          
        

    };
    vegaEmbed(container, chart);

}