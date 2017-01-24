class Waiter {

  constructor (memoryModule, messageDisambiguationModule) {
    this.memory= memoryModule
    this.brain= messageDisambiguationModule
  }

  recognizesSender(senderId) {}

  understandsMessage(message) {}

  recallLastUserMessage() {}

  recallConvesation() {}

  recallLastAction() {}

  processMessage(message) {}

  greetUser() {}



}

export default Waiter
