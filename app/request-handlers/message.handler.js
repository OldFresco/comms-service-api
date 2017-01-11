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

        //Define blank convo context for new convo
        const freshConvoContext = ConversationContext;

        // set the current convo context according to session cookie or assume new if no
        // cookie present
        let currentConvoContext = req.session
            ? req.session.currentConvoContext
            : {
                ...freshConvoContext
            };

        //Exctract the message
        const message = req.body.Body;
        let messageSentiment = '';

        //If user needs something we can do at any time return early
        if (message === 'Menu') {

            let menuItems = concierge.fetchMenu();
            res.json({response: menuItems});
        } else if (message === 'Open?') {

            let openingHoursDetail = concierge.fetchOpeningHours();
            res.json({response: openingHoursDetail});
        } else {

            // If we don't get a quick fire request, try and figure out what the user means
            // based on his/her pervious message sentiment
            if (currentConvoContext.previousMessageSentiment === '') {
                messageSentiment = 'GREETING';
            } else if (currentConvoContext.previousMessageSentiment === 'GREETING') {
                // expecting current message sentiment to be to place order
                if (waiter.orderRequestMakesSense(message)) {
                    messageSentiment = 'PLACE_ORDER';
                } else {
                    messageSentiment = 'COMPREHENSION_FAILURE';
                }
            } else if (currentConvoContext.previousMessageSentiment === 'PLACE_ORDER') {
                // expecting current message sentiment to be either to pre confirm order or
                // update the order
                if (waiter.orderConfirmationMakesSense(message)) {
                    messageSentiment = 'PRE_CONFIRM_ORDER';
                } else if (waiter.orderEditRequestMakesSense(message)) {
                    messageSentiment = 'UPDATE_ORDER';
                } else {
                    messageSentiment = 'COMPREHENSION_FAILURE';
                }
            } else if (currentConvoContext.previousMessageSentiment === 'PRE_CONFIRM_ORDER') {
                // expecting order to have been pre-confirmed
                if (waiter.orderConfirmationMakesSense(message)) {
                    messageSentiment = 'FINAL_CONFIRM_ORDER';
                } else {
                    messageSentiment = 'COMPREHENSION_FAILURE';
                }
            }

            // Having figured out what the user needs, do what we need to do
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