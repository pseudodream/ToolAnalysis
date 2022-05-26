
import highCharts from "./highCharts.js";
import vega from "./vega.js";
import plotlyChart from "./plotly.js";
import googleCharts from "./googleCharts.js";



const select=document.querySelector("#chart-select");

select.value="high-charts"
highCharts(".container");
select.addEventListener('change',(event)=>{
    var val=select.value;
    //clear the chart first 
    d3.selectAll("svg > *").remove();
    
    switch(val){
        case("vega-lite"):
            vega(".container");
            break;
        case("plotly"):
            plotlyChart(".container");
            break;
        case("google-charts"):
            googleCharts(".container");
            break;
        default:
            highCharts(".container");


    }


    

})