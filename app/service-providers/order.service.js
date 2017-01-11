const waiter = {
    tryToInferSentiment(currentConvoContext, message) {
        // If we don't get a quick fire request, try and figure out what the user means
        // based on his/her pervious message sentiment
        if (currentConvoContext.previousMessageSentiment === 'UNKNOWN') {
            return 'GREETING';
        } else if (currentConvoContext.previousMessageSentiment === 'GREETING') {
            // expecting current message sentiment to be to place order
            if (this.orderRequestMakesSense(message)) {
                return 'PLACE_ORDER';
            } else {
                return 'COMPREHENSION_FAILURE';
            }
        } else if (currentConvoContext.previousMessageSentiment === 'PLACE_ORDER') {
            // expecting current message sentiment to be either to pre confirm order or
            // update the order
            if (this.orderConfirmationMakesSense(message)) {
                return 'PRE_CONFIRM_ORDER';
            } else if (this.orderEditRequestMakesSense(message)) {
                return 'UPDATE_ORDER';
            } else {
                return 'COMPREHENSION_FAILURE';
            }
        } else if (currentConvoContext.previousMessageSentiment === 'PRE_CONFIRM_ORDER') {
            // expecting order to have been pre-confirmed
            if (this.orderConfirmationMakesSense(message)) {
                return 'FINAL_CONFIRM_ORDER';
            } else {
                return 'COMPREHENSION_FAILURE';
            }
        }
    },
    orderRequestMakesSense(message) {
        return true;
    },
    orderConfirmationMakesSense(message) {
        return true;
    },
    orderEditRequestMakesSense(message) {
        return true;
    },
    placeOrder(message) {
        return true;
    },
    preConfirmOrder(message) {
        return true;
    },
    finalConfirmOrder(message) {
        return true;
    },
    addNote(message) {
        return true;
    },
    updateOrder(message) {
        return true;
    },
    cancelOrder(message) {
        return true;
    }
};

export default waiter;