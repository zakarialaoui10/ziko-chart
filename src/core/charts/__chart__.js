import { UIElement, tags } from "ziko";
import __Chart__ from "chart.js/auto";
const { canvas, figcaption} = tags

class ZikoChart extends UIElement{
    constructor({ type, data = {}} = {}){
        super('figure')
        this.canvas = canvas({role : 'img', ariaLabel : '', ariaDescribedby : ''}).style({
            outline : '2px red dashed',
        })
        this.figcaption = figcaption('Chart Caption').style({textAlign : 'center', padding : '5px'});
        this.append(
            this.figcaption,
            this.canvas,
            // this.figcaption
        )
        this.chart = new __Chart__(this.canvas.element, {
            responsive: true,
            maintainAspectRatio: false,
        })
        this.style({outline : '2px darkblue dotted'})
    }
}

const Chart = () => new ZikoChart()
export{
    ZikoChart,
    Chart
}