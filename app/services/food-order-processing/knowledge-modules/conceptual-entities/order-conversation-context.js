import BaseConversationContext from '../../../../libraries/message-framework/base-conversation-context'

class OrderConversationContext extends BaseConversationContext {
    constructor(orderPlaced = false, orderContent = [], orderConfirmed = false, orderPreConfirmed = false) {
        super();
        this.orderPlaced = orderPlaced;
        this.orderContent = orderContent;
        this.orderConfirmed = orderConfirmed;
        this.orderPreConfirmed = orderPreConfirmed;
    }
}

export default new OrderConversationContext();