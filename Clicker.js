export class Clicker {
    DELAY = 50
    ELEMENT_IDS = []
    ELEMENT_CLASS = []
    run = false

    constructor(options = {}) {
        this.ELEMENT_IDS = options.elementIDs
        this.ELEMENT_CLASS = options.elementClasses
        this.DELAY = options.delay || this.DELAY
    }

    async start() {
        this.run = true

        let elementsByClass = Array.from(document.getElementsByClassName(this.ELEMENT_CLASS))
        let elementsByIds = this.ELEMENT_IDS.map((id) => document.getElementById(id))

        let elements = elementsByClass.concat(elementsByIds)

        elements.forEach((element) => {
            try {
                if (element instanceof HTMLElement) element.click()
            } catch (e) {
                console.error(`Error hovering element ${element.id}:`, e)
            }
        })

        await new Promise(resolve => setTimeout(resolve, this.DELAY))
        if (this.run) this.start()
    }

    stop() {
        this.run = false
    }
}
