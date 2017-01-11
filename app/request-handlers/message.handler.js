require('es6-promise').polyfill();
require('isomorphic-fetch');

import BaseHandler from './base.handler';
import concierge from '../service-providers/concierge.service';
import waiter from '../service-providers/order.service';
import ConversationContext from '../models/conversation-context';
import utilities from '../service-providers/general.service';

class MessageHandler extends BaseHandler {
    constructor() {
        super();
        this.processMessage = this
            .processMessage
            .bind(this);
    }

    processMessage(req, res) {

        const newConvoContext = ConversationContext;

        let currentConvoContext = req.session
            ? req.session.currentConvoContext
            : {
                ...newConvoContext
            };

        const message = req.body.Body;
        let messageSentiment = '';

        let outcome = concierge.handleRequest(message);

        if (outcome) {
            res.json({response: outcome});
        } else {
            messageSentiment = waiter.inferSentiment(currentConvoContext, message);

            switch (messageSentiment) {
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