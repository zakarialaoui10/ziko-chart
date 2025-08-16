import { ZikoChart } from "./__chart__.js";
class ZikoRadarChart extends ZikoChart{
    constructor(){
        super({ type : 'rada'})
    }
}


const Radar = () => new ZikoRadarChart()
export{
    ZikoRadarChart,
    Radar
}