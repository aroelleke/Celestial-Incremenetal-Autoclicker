export class Clicker {
    DELAY = 50
    ELEMENT_IDS = []
    run = false

    constructor(options = {}) {
        this.ELEMENT_IDS = options.elementIDs
        this.DELAY = options.delay || this.DELAY
    }

    async start() {
        this.run = true

        this.ELEMENT_IDS.forEach((id) => {
            let button = document.getElementById(id)

            try {
                if (button instanceof HTMLElement) button.click()
            } catch (e) {
                console.error(`Error clicking button ${button.id}:`, e)
            }
        })

        await new Promise(resolve => setTimeout(resolve, this.DELAY))
        if (this.run) this.start()
    }

    stop() {
        this.run = false
    }
}