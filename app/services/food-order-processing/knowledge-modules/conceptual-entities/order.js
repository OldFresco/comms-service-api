class Order {

    constructor(state) {
        this.state = state;
        this.content;
    }

    hasBeenPlaced() {
        return this.state === 'PLACED';
    }

    hasBeenPreConfirmed() {
        return this.state === 'PRE_CONFIRMED';
    }

    hasBeenFinallyConfirmed() {
        return this.state === 'FINALLY_CONFIRMED';
    }
}

export default Order;