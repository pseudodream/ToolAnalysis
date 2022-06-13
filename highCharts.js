


export default function highCharts(container){

    d3.csv("./data.csv", d3.autoType).then((data) => {

        processData(data);
      });
    
      function processData(data) {
        var x = [],x1=[],x2=[],x3=[];
        var y = [],y1=[],y2=[],y3=[];
    
    
        for (var i = 0; i < data.length; i++) {
          
          if(data[i]["VALUE2016"]!=null){
            y.push(data[i]["VALUE2016"]);
            x.push(data[i]["Location"]);
          }
          if(data[i]["VALUE2017"]!=null){
            y1.push(data[i]["VALUE2017"]);
            x1.push(data[i]["Location"]);
          }
          if(data[i]["VALUE2018"]!=null){
            y2.push(data[i]["VALUE2018"]);
            x2.push(data[i]["Location"]);
          }
          if(data[i]["VALUE2019"]!=null){
            y3.push(data[i]["VALUE2019"]);
            x3.push(data[i]["Location"]);
          }
          
         

        }
       
        Highcharts.chart('container', {
          chart:{
            type: 'column',

          },
          accessibility: {
            description: 'Healthcare spendings',
            keyboardNavigation:{
              enabled:true,
              seriesNavigation:{
                mode:"serialize"

              }

            },
            point: {
              valueDescriptionFormat:'location: {xDescription} spending: {separator} in year: {value}..'
              
          },
          landmarkVerbosity: "one"

           

        },
            
            title: {
                text: 'Healthcare spending'
            },
            xAxis:{
                categories:x,
                crosshair: true
            },
            yAxis:{
                min:0,
                title:{
                    text:"spending"
                }
            },
            series:[{

                name:"2016",
                data:y
            },{
              name:"2017",
                data:y1
            },{
              name:"2018",
                data:y2
            },{
              name:"2019",
                data:y3
            }]
        })
    
      }
       

}
