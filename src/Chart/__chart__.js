import {
    ZikoUIElement,
    ZikoUICanvas
} from "ziko";
import Chart from "chart.js/auto"
class __ZikoChart__ extends ZikoUICanvas{
    constructor(w, h, config){
        super(w, h)
        this.chart = new Chart(this.ctx, config)
    }
    clear(){
        return this;
    }
    plot(data,label){
        this.chart.data.datasets.push({
            type: 'line',
            label,
            data
            // backgroundColor: 'rgba(75, 192, 192, 0.2)',
            // borderColor: 'rgba(75, 192, 192, 1)',
            // borderWidth: 1,
            
        })
        this.chart.update();
        return this;
    }
    stem(){
        this.chart.update();
        return this; 
    }
    bar(){
        this.chart.update();
        return this; 
    }
}

const chart=(w, h)=> new ZikoChart(w, h)
window.chart=chart;
export{
    chart
} 