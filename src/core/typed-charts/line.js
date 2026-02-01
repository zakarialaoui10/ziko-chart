import { UIChart } from "../chart.js";
import { LineController } from "chart.js";

export const LineChart = ({data}) => new UIChart({data, type : 'line', controllers : [LineController]})