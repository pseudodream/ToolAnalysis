
import highCharts from "./highCharts.js";
import vega from "./vega.js";

const select=document.querySelector("#chart-select");

select.value="high-charts"
select.addEventListener('change',(event)=>{
    var val=select.value;
    switch(val){
        case("vega-lite"):
            vega(".container");
            break;
        case("ploty"):
            break;
        case("google-chart"):
            break;
        default:
            highCharts(".container");


    }


    

})