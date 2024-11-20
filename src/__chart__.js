import {
    ZikoUICanvas
} from "ziko";
import Chart from "chart.js/auto"
class __ZikoChart__ extends ZikoUICanvas{
    constructor(config){
        super()
        this.chart = new Chart(this.ctx, config)
    }
    stop(){
        this.chart.stop();
        return this;
    }
    clear(){
        this.chart.clear();
        return this;
    }
    title(newTitle, display = true){
        this.chart.options.plugins.title.text = newTitle;
        this.chart.options.plugins.title.display=display;
        this.chart.update();
        return this;
    }
    subTitle(subTitle, display = true){
        this.chart.options.plugins.subtitle.text = subTitle;
        this.chart.options.plugins.subtitle.display=display;
        this.chart.update();
        return this;
    }
    background(color){

    }
}
const config = {
    type: 'line',  
    data: [],
    options: {
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            }
        }
    }
};
class ZikoChart extends __ZikoChart__{
    constructor(){
        super(config)
    }
    axis(xMin,xMax,yMin,yMax){
        this.chart.scales.x.min=xMin;
        this.chart.scales.x.max=xMax;
        this.chart.scales.y.min=yMin;
        this.chart.scales.y.max=yMax;
        this.chart.update();
        return this;
    }
    xTitle(title = this.chart.options.scales.x.title.text, display = true){
        this.chart.options.scales.x.title.text = title;
        this.chart.options.scales.x.title.display = display;
        this.chart.update();
        return this;
    }
    yTitle(title = this.chart.options.scales.y.title.text, display = true){
        this.chart.options.scales.y.title.text = title;
        this.chart.options.scales.y.title.display = display;
        this.chart.update();
        return this;
    }
    useLinearScale(){
        this.chart.options.scales.x.type="linear";
        this.chart.update();
        return this;
    }
    useLogarithmicScale(){
        this.chart.options.scales.x.type="logarithmic";
        this.chart.update();
        return this;
    }
    useGrid(x,y){
        // if(x)this.scales.x;
    }
    get override(){
        return {
            strokeColor:color=>{
                this.chart.data.datasets.forEach(n=>n.borderColor = color);
                this.chart.update();
                return this.override;
            },
            strokeWidth:width=>{
                this.chart.data.datasets.forEach(n=>n.borderWidth = width);
                this.chart.update();
                return this.override;
            },
            pointsColor:color=>{
                this.chart.data.datasets.forEach(n=>n.backgroundColor = color);
                this.chart.update();
                return this.override;
            }
        }
    }
    plot(X, Y, label = "", strokeColor = "rgba(75, 192, 192, 1)", pointsColor = "#44aa44"){
        const data = new Array(X.length).fill(null).map((_, i) => ({ x: X[i], y: Y[i] }));  
           const dataset={
                type:"line",
                label,
                data,
                borderColor: strokeColor,
                backgroundColor: pointsColor,
                borderWidth: 1
            }
        this.chart.data.datasets.push(dataset);
        this.chart.update()
        return this;
    }
    bar(X, Y, label = ""){
        const data = new Array(X.length).fill(null).map((_, i) => ({ x: X[i], y: Y[i] }));  
           const dataset={
                type:"bar",
                label,
                data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }
        this.chart.data.datasets.push(dataset);
        this.chart.update()
        return this;
    }
    bubble(X, Y, Z, label = "") {
        const data = new Array(X.length).fill(null).map((_, i) => ({ 
            x: X[i], 
            y: Y[i], 
            r: Z[i]  // r represents the radius of the bubble
        }));  
        const dataset = {
            type: "bubble",
            label,
            data,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        };
        this.chart.data.datasets.push(dataset);
        this.chart.update();
        return this;
    }
}

const chart=()=> new ZikoChart(config)
window.chart=chart;
export{
    __ZikoChart__,
    ZikoChart,
    chart
} 