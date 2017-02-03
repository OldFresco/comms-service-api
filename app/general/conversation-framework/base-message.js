import UNKNOWN from './labels/message-intents'

class BaseMessage {

  constructor (content = '' , intent = UNKNOWN) {
    this.content = content
    this.intents = intent
    this.senderId
  }

  getContent () {
    return this.content
  }

  getSender () {
    return this.senderId
  }
}

export default BaseMessage
