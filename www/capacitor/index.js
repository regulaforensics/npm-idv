import { exec } from './internal/bridge'

export class IDV {
    static get instance() { return IDV._instance }
    static _instance = new IDV()
}
