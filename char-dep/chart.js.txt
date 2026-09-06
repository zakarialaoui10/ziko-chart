import {
    ZikoUIElement,
    ZikoUICanvas
} from "ziko";
import Chart from "chart.js/auto"
// let config = {
//     type: 'bar',
//     data: {
//         // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//             {
//                 label: 'Sales',
//                 data: [{x:10,y:5},{x:8,y:4},{x:6,y:7}],
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 1,
//                 type: 'scatter' // Chart type for this dataset
//             }]
//           }
//         }
class ZikoChart extends ZikoUICanvas{
    constructor(config){
        super()
        this.chart = new Chart(this.ctx, config)
    }
    clear(){
        return this;
    }
    // plot(data,label){
    //     this.chart.data.datasets.push({
    //         type: 'line',
    //         label,
    //         data
    //         // backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //         // borderColor: 'rgba(75, 192, 192, 1)',
    //         // borderWidth: 1,
            
    //     })
    //     this.chart.update();
    //     return this;
    // }
    // stem(){
    //     this.chart.update();
    //     return this; 
    // }
    // bar(){
    //     this.chart.update();
    //     return this; 
    // }
}

const plot=(dataset)=>new ZikoChart({
    typ:"line",
    data:{
        datasets:[10, 20, 30, 40, 50, 60, 70]
    }
})
const chart=(config)=> new ZikoChart(config)

window.chart=chart;
window.plot=plot;
export{
    chart
} 