import { Clicker } from "./Clicker"
import { Hover } from "./Hoverer"
import { ClickElementClassNames, ClickElementIDs, HoverElementIDs } from "./data"


const ClickerRef = new Clicker({ elementIDs: ClickElementIDs, elementClasses: ClickElementClassNames })
const HoverRef = new Hover({ elementClass: HoverElementIDs })

const startAutoplay = () => {
    ClickerRef.start()
    HoverRef.start()
}

const stopAutoplay = () => {
    ClickerRef.stop()
    HoverRef.stop()
}

window.startAutoplay = startAutoplay
window.stopAutoplay = stopAutoplay

console.log("Autoclicker loaded and started, enter 'stop()' in the console to stop it and 'start()' to restart it again.")