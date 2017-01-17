import NONE from './generic-message-intents'

class BaseConversationContext {
    constructor(Id = 'guid', hasStarted = true, hasEnded = false, messageIntentHistory = []) {
        this.Id = Id;
        this.hasStarted = hasStarted;
        this.hasEnded;
        this.messageIntentHistory;
    }

    getLastMessageIntent() {
        if (this.messageIntentHistory > 0) {
            return this.messageIntentHistory[this.messageIntentHistory.length - 1]
        } else {
            return NONE;
        }
    }

    addMessageIntent(messageIntent) {
        this
            .messageIntentHistory
            .push(messageIntent);
    }
}

export default new BaseConversationContext();