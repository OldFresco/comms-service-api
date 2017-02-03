require('es6-promise').polyfill()

import BaseConversation from '../general/conversation-framework/base-conversation'
import BaseHandler from './base.handler'
import Memory from '../services/food-order-processing/capabilities/memory'
import Waiter from '../services/food-order-processing/workers/waiter'
import cache from '../caching'
import disambiguator from '../services/food-order-processing/capabilities/message-disambiguation/deterministic-disambiguator'

class MessageHandler extends BaseHandler {
  constructor () {
    super()
    this.processMessage = this
      .processMessage
      .bind(this)
  }

  processMessage (req, res) {
    const message = req.body.Body
    const senderId = req.body.senderId

    // Setup memory
    let memory = new Memory(cache)

    // Setup Brain
    let brain = {
      disambiguator : disambiguator,
      memory : memory
    }

    // Setup waiter worker
    let waiter = new Waiter(brain)

    // See if waiter remembers sender and hence conversation
    let convo = waiter.recognizesSender(senderId)
      ? waiter.recallConvesation(senderId)
      : new BaseConversation([
        'waiter', senderId
      ], 'NEW_CONVO')

    // Map to action based on input
    let outcome = waiter.actOnMessage(message, convo)

    // Let app output response
    res.json({response: outcome})
  }
}

export default new MessageHandler()
