/// <reference types="jsdom" />
export = ChartJs;
declare class ChartJs extends EventEmitter {
    constructor(width?: number, height?: number, hardcodedPlugins?: any[]);
    height: number;
    width: number;
    loadWindow(hardcodedPlugins: any): void;
    window: import("jsdom").DOMWindow;
    canvas: HTMLCanvasElement;
    ctx: globalThis.CanvasRenderingContext2D;
    makeChart(chartConfig: any): Promise<ChartJs>;
    chartConfig: any;
    drawChart(): ChartJs;
    _chart: any;
    toBlob(mime: any): Promise<any>;
    toBuffer(mime?: string): Promise<any>;
    toFile(path: any, mime?: string): Promise<void>;
}
import { EventEmitter } from "events";
