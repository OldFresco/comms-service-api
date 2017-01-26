import BaseWorker from '../../../shared-service-modules/service-worker-framework/base-worker'

class Waiter extends BaseWorker {

  constructor (memoryModule, brainnModule) {
    super()
    this.brain = brainnModule
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
