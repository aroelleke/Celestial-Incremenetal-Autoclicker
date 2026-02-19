import { Clicker } from "./Clicker"
import { Hover } from "./Hoverer"
import { ClickElementIDs, HoverElementIDs } from "./data"


let ClickerRef = new Clicker(ClickElementIDs)
let HoverRef = new Hover(HoverElementIDs)

export function start() {
    ClickerRef.start()
    HoverRef.start()
}

export function stop() {
    ClickerRef.stop()
    HoverRef.stop()
}

start()

console.log("Autoclicker loaded and started, enter 'stop()' in the console to stop it and 'start()' to restart it again.")