import { __ZikoChart__ } from "./__chart__";
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

class ZikoChartPlot extends __ZikoChart__{
    constructor(){
        super(config)
    }
    plot(X, Y, label = "", strokeColor = "rgba(75, 192, 192, 1)", pointsColor = "#44aa44"){
        const data = new Array(X.length).fill(null).map((_, i) => ({ x: X[i], y: Y[i] }));  
           const dataset={
                label,
                data,
                borderColor: strokeColor,
                backgroundColor: pointsColor,
                fill: false,
                // showLine: true,  // Connect points with a line
                // tension: 0.1  // Optionally, smooth the curve
                borderWidth: 1
            }
        this.chart.data.datasets.push(dataset);
        this.chart.update()
        return this;
    }
}
const plot=(X, Y)=>new ZikoChartPlot(X, Y);
window.plot = plot
export{
    plot,
    ZikoChartPlot
}