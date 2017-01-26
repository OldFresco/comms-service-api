require('es6-promise').polyfill()

import BaseHandler from './base.handler'
import Waiter from '../service-modules/food-order-processing/workers/waiter'
import disambiguate from '../service-modules/food-order-processing/capability-modules/message-disambiguati' +
  'on/deterministic-disambiguator'
import BaseConversation from '../shared-service-modules/conversation-framework/base-conversation'

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
    let brain = {}

    brain.disambiguate = disambiguate

    let waiter = new Waiter(null, brain)
    let convo = waiter.recognizesSender(senderId)
      ? waiter.recallConvesation(senderId)
      : new BaseConversation([
        'waiter', senderId
      ], 'NEW_CONVO')

    let outcome = waiter.actOnMessage(message, convo)

    res.json({response: outcome})
  }
}

export default new MessageHandler()
