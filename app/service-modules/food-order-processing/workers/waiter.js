import BaseWorker from '../../../shared-service-modules/service-worker-framework/base-worker'

class Waiter extends BaseWorker {

  constructor (memoryModule, messageDisambiguationModule) {
    super()
    this.brain = {}
    this.brain.disambiguate = messageDisambiguationModule
    this.memory = memoryModule
  }

  recognizesSender (senderId) {
    if (senderId)
      return true
  }

  understandsMessage (message) {
    if (message)
      return true
  }

  recallLastUserMessage () {
    return 'last message'
  }

  recallConvesation () {
    return 'convoId'
  }

  recallLastAction () {
    return 'last action'
  }

  actOnMessage (message) {
    if (message) {
      let estimatedMessageIntent = this
        .brain
        .disambiguate(message)

      switch (estimatedMessageIntent) {
        case 'GREETING':
          this.greetSender(estimatedMessageIntent)
          break
        default:
          this.expressLackOfComprehension(estimatedMessageIntent)

      }
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
