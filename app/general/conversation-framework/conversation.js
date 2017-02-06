class Conversation {

  constructor (participants, context) {
    this.participants = participants
    this.messages = []
    this.startedAt = new Date()
    this.context = context
    this.convoId = 'convoId'
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

export default Conversation
