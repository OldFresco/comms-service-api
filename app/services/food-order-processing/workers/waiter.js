class Waiter {

  constructor (brainModule) {
    this.brain = brainModule

    //Stub method to test memory mechanism works
    this.brain.memory.stubMethod()
  }


  understandsMessage (message) {
    if (message)
      return true
  }

  actOnMessage (message) {
    if (message) {
      let estimatedMessageIntent = this
        .brain
        .disambiguator(message)

      let outcome = 'UNKNOWN'

      switch (estimatedMessageIntent) {
        case 'GREETING':
          outcome = this.greetSender()
          break
        default:
          outcome = this.expressLackOfComprehension()

      }

      return outcome
    }
  }

  greetSender () {
    return 'Hi! Was gud?'
  }

  expressLackOfComprehension () {
    return 'What?!'
  }
}

export default Waiter
