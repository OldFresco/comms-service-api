require('es6-promise').polyfill()

import Conversation from '../general/conversation-framework/conversation'
import BaseHandler from './base.handler'
import Memory from '../services/food-order-processing/capabilities/memory'
import Waiter from '../services/food-order-processing/workers/waiter'
import cache from '../caching'
import disambiguator from '../services/food-order-processing/capabilities/message-disambiguation/deterministic-disambiguator'

class MessageHandler extends BaseHandler {
  constructor() {
    super()
    this.processMessage = this
      .processMessage
      .bind(this)
  }

  processMessage(req, res) {
    const message = req.body.Body
    const senderId = req.body.senderId
    const sender = {
      id : senderId
    }

    // Setup memory
    let memory = new Memory(cache)

    // Setup Brain
    let brain = {
      disambiguator: disambiguator,
      memory: memory
    }

    // Setup waiter worker
    let waiter = new Waiter(brain)
    let convo = null

    // See if waiter remembers sender
    if (waiter.brain.memory.recalls(sender)){
      convo = waiter.brain.memory.recallConversationWith(sender)
    } else {
      convo = new Conversation(['me',sender.id])
      waiter.brain.memory.memorize(sender)
    }

    console.log(convo)

    waiter.brain.memory.add(convo, message)

    // Map to action based on input and current conversation context
    let outcome = waiter.actOnMessage(message, convo)

    // Let app output response
    res.json({response: outcome})
  }
}

export default new MessageHandler()
