class IntentBuilder {
  constructor () {
    this.value = 'UNKNOWN'
    this.certainty = 1.0
  }

  intentIs (value) {
    this.value = value
    return this
  }

  withCertainty (certaintyRating) {
    this.certainty = certaintyRating
    return this
  }

  build () {
    return this
  }
}

export default IntentBuilder;