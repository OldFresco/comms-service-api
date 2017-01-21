import UNKNOWN from './labels/message-sentiments'

class BaseMessage {

  constructor (content = '' , sentiment = UNKNOWN) {
    this.content = content
    this.sentiment = sentiment
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
