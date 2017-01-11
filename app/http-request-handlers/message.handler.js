require('es6-promise').polyfill();
require('isomorphic-fetch');

import BaseHandler from './base.handler';
import concierge from '../service-providers/concierge.service';
import waiter from '../service-providers/order.service';
import utilities from '../service-providers/general.service';

import CONVERSATION_CONTEXT from '../models/conversation-context';

class MessageHandler extends BaseHandler {
    constructor() {
        super();
        this.processMessage = this
            .processMessage
            .bind(this);
    }

    processMessage(req, res) {
        const message = req.body.Body;
        const newConvoContext = CONVERSATION_CONTEXT;

        let currentConvoContext = req.session
            ? req.session.currentConvoContext
            : {
                ...newConvoContext
            };
        let estimatedMessageSentiment = 'UNKNOWN';
        let outcome = concierge.tryToHandleRequest(message);

        if (outcome.isOkay) {
            res.json({response: outcome.content});
        } else {
            estimatedMessageSentiment = waiter.tryToInferSentiment(currentConvoContext, message);

            switch (estimatedMessageSentiment) {
                case 'PLACE_ORDER':
                    waiter.placeOrder(message);
                    break;
                case 'PRE_CONFIRM_ORDER':
                    waiter.preConfirmOrder(message);
                    break;
                case 'FINAL_CONFIRM_ORDER':
                    waiter.finalConfirmOrder(message);
                    break;
                case 'ADD_NOTE':
                    waiter.addNote(message);
                    break;
                case 'UPDATE_ORDER':
                    waiter.updateOrder(message);
                    break;
                case 'CANCEL_ORDER':
                    waiter.cancelOrder(message);
                    break;
                case 'GREETING':
                    concierge.fetchMenu();
                    break;
                case 'SEE_MENU':
                    concierge.fetchMenu();
                    break;
                case 'COMPREHENSION_FAILURE':
                    utilities.failureHandler(message);
                    break;
                default:
                    utilities.baseHandler(message);
            }
        }
    }
}

export default new MessageHandler();