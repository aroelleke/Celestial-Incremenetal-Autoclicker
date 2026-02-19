export class Hover {
    DELAY = 50
    ELEMENT_CLASS = ""
    run = false

    constructor(options = {}) {
        this.ELEMENT_CLASS = options.elementClass
        this.DELAY = options.delay || this.DELAY
    }

    hover(element) {
        try {
            const enterEvent = new MouseEvent('mouseenter', {
                bubbles: true,
                cancelable: true,
                view: window
            })

            element.dispatchEvent(enterEvent)
        } catch (e) {
            console.error(`Error hovering element ${element.id}:`, e)
        }
    }

    async start() {
        this.run = true

        let elements = document.getElementsByClassName(this.ELEMENT_CLASS)

        for (let i = 0; i < elements.length; i++) {
            let element = elements.item(i)
            try {
                if (element instanceof HTMLElement) this.hover(element)
            } catch (e) {
                console.error(`Error hovering element ${element.id}:`, e)
            }
        }

        await new Promise(resolve => setTimeout(resolve, this.DELAY))

        if (this.run) this.start()
    }

    stop() {
        this.run = false
    }
}