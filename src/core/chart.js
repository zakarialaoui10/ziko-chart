import { UIElement } from "ziko";
import {
    Chart as __Chart__,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    PointElement,
    LineElement,

    Title,
    SubTitle,
    Colors
} from "chart.js";

import { CanvasBackground } from "./plugins/index.js";

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
            LineElement,
            LogarithmicScale,
            Title,
            SubTitle,
            Colors,
            // CanvasBackground
        )
        this.chart = new __Chart__(this.element, {
            responsive: true,
            maintainAspectRatio: false,
            type,
            data
        })
        this.style({outline : '2px darkblue dotted'})
    }
    get data(){
        return this.chart.data;
    }
    setTitle(text, options){
        // https://www.chartjs.org/docs/latest/configuration/title.html#title-configuration
        Object.assign(this.chart.options.plugins.title,{
            text,
            display : true,
            ...options
        })
        this.chart.update();
        return this;
    }
    setSubTitle(text, options){
        Object.assign(this.chart.options.plugins.subtitle,{
            text,
            display : true,
            ...options
        })
        this.chart.update();
        return this;
    }
    register(...controllers){
        this.chart.register(...controllers);
        return this;
    }
    stop(){
        this.chart.stop();
        return this;
    }
    reset(){
        this.chart.reset();
        return this;
    }
    // render(){
    //     this.chart.render();
    //     return this;
    // }
    destroy(){
        this.chart.stop();
        return this;       
    }
    update(mode = null){
        this.chart.update(mode);
        return this;        
    }
    clear(){
        this.chart.clear();
        return this;
    }
    resize(w, h){
        this.size(w, h)
        // this.chart.resize(w, h);
        return this;
    }
    responsify(res = true){
        this.chart.options.responsive = res;
        return this;
    }
    size(w, h){

    }
    toBase64Image(type, quality){
        return this.chart.toBase64Image()
    }
    get img(){
        return new UIElement({ element : 'img'}).setAttr({src : this.toBase64Image()})
    }
}

const Chart = ({type, data} = {}) => new UIChart({type, data})
export{
    UIChart,
    Chart
}