require('es6-promise').polyfill()

import BaseHandler from './base.handler'
import Waiter from '../service-modules/food-order-processing/workers/waiter'
import disambiguate from '../service-modules/food-order-processing/capability-modules/message-disambiguation/deterministic-disambiguator'

class MessageHandler extends BaseHandler {
  constructor () {
    super()
    this.processMessage = this
      .processMessage
      .bind(this)
  }

  processMessage (req, res) {
    const message = req.body.Body
    const brain = {}

    brain.disambiguate = disambiguate

    let waiter = new Waiter(null, brain)
    let outcome = waiter.actOnMessage(message)
    
    res.json({response: outcome})
  }
}

export default new MessageHandler()
