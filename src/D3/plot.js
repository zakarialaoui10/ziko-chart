import {ZikoUIElement} from "ziko"
import * as d3 from "d3"
class ZikoD3Chart extends ZikoUIElement{
    constructor(X=[], Y=[],xMin=-10, xMax=10, yMin=-10, yMax=10){
        super("div", "d3")
        this.size("400px", "300px");
        Object.assign(this.cache,{
            stemData : [],
            scatterData : []
        })
        this.init(xMin, xMax, yMin, yMax);
        this.plot(X, Y);
        
    }
    init(xMin, xMax, yMin, yMax){
        const margin={
            top:20,
            right:20,
            left:40,
            bottom:20
        }
        this.svg = d3.select(this.element)
        .append("svg")
        .attr("width", this.width + margin.left + margin.right)
        .attr("height", this.height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

        this.xInit = d3.scaleLinear()
        .domain([xMin, xMax])
        .range([0, this.width]);

        this.yInit = d3.scaleLinear()
        .domain([yMin, yMax]) // Y-axis range
        .range([this.height, 0]);

        this.svg.append("g")
        .attr("transform", `translate(0,${this.height})`)
        .call(d3.axisBottom(this.xInit));
        
        this.svg.append("g").call(d3.axisLeft(this.yInit));
        return this;
    }
    plot(x = d3.range(-10, 10.1, 0.1), y = x){
        const line = d3.line()
        .x(d => this.xInit(d.x))
        .y(d => this.yInit(d.y))
        let data = new Array(x.length).fill(null).map((_,i)=>Object.assign({x:x[i],y:y[i]}))
        this.data = data;
        this.svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2)
        .attr("d", line);
        return this;
    }
    stem(x = d3.range(-10, 10.1, 0.1), y = x, useStore) {
        let data = x.map((xi, i) => ({ x: xi, y: y[i] }));
        if(useStore){
            this.cache.stemData.push(...data);
            data = this.cache.stemData;
        }
        const stems = this.svg.selectAll(".stem")
            .data(data);
        stems
            .attr("x1", d => this.xInit(d.x))
            .attr("x2", d => this.xInit(d.x))
            .attr("y1", this.yInit(0))
            .attr("y2", d => this.yInit(d.y));
        stems.enter()
            .append("line")
            .attr("class", "stem")
            .attr("x1", d => this.xInit(d.x))
            .attr("x2", d => this.xInit(d.x))
            .attr("y1", this.yInit(0))
            .attr("y2", d => this.yInit(d.y))
            .attr("stroke", "black")
            .attr("stroke-width", 2);
        stems.exit().remove();
        const circles = this.svg.selectAll(".stem-circle")
            .data(data);
        circles
            .attr("cx", d => this.xInit(d.x))
            .attr("cy", d => this.yInit(d.y));
        circles.enter()
            .append("circle")
            .attr("class", "stem-circle")
            .attr("cx", d => this.xInit(d.x))
            .attr("cy", d => this.yInit(d.y))
            .attr("r", 3)
            .attr("fill", "red");
        circles.exit().remove();
        return this;
    }
    scatter(x = [], y = [], radius = 3, color = "red") {
        this.svg.selectAll(".scatter-circle").remove();
        let data = new Array(x.length).fill(null).map((_,i)=>Object.assign({x:x[i],y:y[i]}))
        const circles = this.svg.selectAll(".scatter-circle")
            .data(data);
        circles
            .attr("cx", d => this.xInit(d.x))
            .attr("cy", d => this.yInit(d.y))
            .attr("fill", color)
            .attr("r", radius);
        circles.enter()
            .append("circle")
            .attr("class", "scatter-circle")
            .attr("cx", d => this.xInit(d.x))
            .attr("cy", d => this.yInit(d.y))
            .attr("r", radius)
            .attr("fill", color);
        circles.exit().remove();
        return this;
    }
}

const d3Chart=()=>new ZikoD3Chart()
window.d3Chart = d3Chart;
window.d3=d3
export{
    d3Chart
}