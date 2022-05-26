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

    makePlotly(x, y);
  }

  function makePlotly(xval, yval) {
    var d = [
        {
            x: xval,
            y: yval,
            type: "bar",
        }

    ];

    var layout = {
        title: 'Cost of healthcare 2016',
      };
    Plotly.newPlot("container", d,layout);
  }
}
