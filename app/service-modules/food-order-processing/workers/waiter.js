import BaseWorker from '../../../shared-service-modules/service-worker-framework/base-worker'

class Waiter extends BaseWorker {

  constructor (memoryModule, messageDisambiguationModule) {
    super()
    this.brain = messageDisambiguationModule
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

      let outcome = 'UNKNOWN'

      switch (estimatedMessageIntent) {
        case 'GREETING':
          outcome = this.greetSender(estimatedMessageIntent)
          break
        default:
          outcome = this.expressLackOfComprehension(estimatedMessageIntent)

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
