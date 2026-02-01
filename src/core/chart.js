import { UIElement } from "ziko";
import {
    Chart as __Chart__,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
} from "chart.js";

class UIChart extends UIElement{
    constructor({ type, data, controllers = [] } = {}){
        super({element : 'canvas'})
        this.setAttr({
            role : 'img'
        })
        __Chart__.register(
            ...controllers,
            CategoryScale,
            LinearScale,
            PointElement,
            LineElement
        )
        this.chart = new __Chart__(this.element, {
            responsive: true,
            maintainAspectRatio: false,
            type,
            data
        })
        this.style({outline : '2px darkblue dotted'})
    }
    register(...controllers){
        this.chart.register(...controllers);
        return this;
    }
}

const Chart = ({type, data} = {}) => new UIChart({type, data})
export{
    UIChart,
    Chart
}