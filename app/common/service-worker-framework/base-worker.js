class BaseWorker {

    constructor(memory) {
        this.memory = memory;
    }

    commitToMemory(event) {
        this
            .memory
            .save(event);
    }

    recall(eventId) {
        this
            .memory
            .getEvent(eventId);
    }

    recallLast() {
        this
            .memory
            .getLatest();
    }
}

export default BaseWorker;