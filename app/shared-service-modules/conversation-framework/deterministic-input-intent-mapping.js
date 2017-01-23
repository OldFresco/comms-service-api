import IntentBuilder from './intent-builder'

class DeterminsticInputIntentMapping {
    constructor() {
        this.inputIntentMap = {}
    }

    addMapping(input, intentValue) {
        this.inputIntentMap[input] = new IntentBuilder()
            .intentIs(intentValue)
            .withCertainty(1.0)
            .build()
    }

    addMappings(intentValue, inputs) {
        inputs.map((input) => {
            this.inputIntentMap[input] = new IntentBuilder()
            .intentIs(intentValue)
            .withCertainty(1.0)
            .build()
        })
    }
}

export default DeterminsticInputIntentMapping;