import IntentBuilder from './intent-builder'

class DeterminsticInputIntentMapping {
  constructor() {
    this.inputIntentMap = {}
  }

  addMapping(input, value) {
    this.inputIntentMap.input = new IntentBuilder()
      .intentIs(value)
      .withCertainty(1.0)
      .build()
  }
}

export default DeterminsticInputIntentMapping;