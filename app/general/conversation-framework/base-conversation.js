class BaseConversation {

  constructor (participantIds, context) {
    this.participantIds = participantIds
    this.messages = []
    this.startedAt = new Date()
    this.context = context
  }

  getLastMessage () {
    return this.messages[this.messages.length - 1]
  }

  addMessage (message) {
    this
      .messages
      .push(message)
  }
}

export default BaseConversation
