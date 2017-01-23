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

class DeterminsticInputIntentMapping {
  constructor () {
    this.inputIntentMap = {}
  }

  addMapping (input, value) {
    this.inputIntentMap.input = new IntentBuilder()
      .intentIs(value)
      .withCertainty(1.0)
      .build()
  }
}

const defineDeterminsticInputIntentMapping = () => {

  let inputIntentMap = new DeterminsticInputIntentMapping()

  inputIntentMap.addMapping('Menu?', 'VIEW_MENU')
  inputIntentMap.addMapping('Menu please', 'VIEW_MENU')
  inputIntentMap.addMapping('What food do you have?', 'VIEW_MENU')
  inputIntentMap.addMapping('What\'s on?', 'VIEW_MENU')
  inputIntentMap.addMapping('Open?', 'VIEW_OPENING_TIMES')
  inputIntentMap.addMapping('Closed?', 'VIEW_OPENING_TIMES')
  inputIntentMap.addMapping('You open?', 'VIEW_OPENING_TIMES')
  inputIntentMap.addMapping('You closed?', 'VIEW_OPENING_TIMES')
  inputIntentMap.addMapping('Wait?', 'VIEW_CURRENT_WAITING_TME')
  inputIntentMap.addMapping('What\'s the wait?', 'VIEW_CURRENT_WAITING_TME')
  inputIntentMap.addMapping('How long?', 'VIEW_CURRENT_WAITING_TME')
  inputIntentMap.addMapping('Ready', 'READY_TO_ORDER')
  inputIntentMap.addMapping('I\'m ready to order', 'READY_TO_ORDER')
  inputIntentMap.addMapping('No thanks', 'CANCEL_ORDER')
  inputIntentMap.addMapping('Nvm', 'CANCEL_ORDER')
  inputIntentMap.addMapping('Peace', 'CANCEL_ORDER')
  inputIntentMap.addMapping('Yea', 'POSITIVE_CONFIRMATION')
  inputIntentMap.addMapping('No', 'NEGATIVE_CONFIRMATION')

  return inputIntentMap
}

const disambiguate = (message) => {
  const deterministicIntentMap = defineDeterminsticInputIntentMapping()

  return deterministicIntentMap[message] || null
}

export default disambiguate
