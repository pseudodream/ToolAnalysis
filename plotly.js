export default function plotlyChart(container) {
  d3.csv("./data.csv", d3.autoType).then((data) => {
    processData(data);
  });
  //they actually don't have accessibilty features yet

  function processData(data) {
    var x = [],y = [];
        var y1=[],y2=[],y3=[];
    
    
        for (var i = 0; i < data.length; i++) {
          x.push(data[i]["Location"]);
          data[i]["VALUE2016"]==null?0: y.push(data[i]["VALUE2016"])
          data[i]["VALUE2017"]==null?0: y1.push(data[i]["VALUE2017"])
          data[i]["VALUE2018"]==null?0: y2.push(data[i]["VALUE2018"])
          data[i]["VALUE2019"]==null?0: y3.push(data[i]["VALUE2019"])


        }

        var trace = 
          {
              x: x,
              y: y,
              type: "bar",
              name:"2016"
          }

          var trace1 = 
          {
              x: x,
              y: y1,
              type: "bar",
              name:"2017"
          }

          var trace2 = 
          {
              x: x,
              y: y2,
              type: "bar",
              name:"2018"
          }
          var trace3 = 
          {
              x: x,
              y: y3,
              type: "bar",
              name:"2019"
          }
  


      var data=[trace,trace1,trace2,trace3]
  
      var layout = {
          title: 'Cost of healthcare',
          barmode: 'group'
        };
      Plotly.newPlot("container", data,layout);

  }

  
}
