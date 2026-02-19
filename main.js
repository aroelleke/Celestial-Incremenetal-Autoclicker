import { Clicker } from "./Clicker"
import { Hover } from "./Hoverer"
import { ClickElementClassNames, ClickElementIDs, HoverElementIDs } from "./data"


const ClickerRef = new Clicker({ elementIds: ClickElementIDs, elementClasses: ClickElementClassNames })
const HoverRef = new Hover({ elementClass: HoverElementIDs })

const start = () => {
    ClickerRef.start()
    HoverRef.start()
}

const stop = () => {
    ClickerRef.stop()
    HoverRef.stop()
}

window.start = start
window.stop = stop

console.log("Autoclicker loaded and started, enter 'stop()' in the console to stop it and 'start()' to restart it again.")