export const orderRequestMakesSense = (message) => true;
export const orderConfirmationMakesSense = (message) => true;
export const orderEditRequestMakesSense = (message) => true;
export const placeOrder = (message) => true;
export const preConfirmOrder = (message) => true;
export const finalConfirmOrder = (message) => true;
export const addNote = (message) => true;
export const updateOrder = (message) => true;
export const cancelOrder = (message) => true;

const waiter = {};

waiter.addNote;
waiter.cancelOrder;
waiter.finalConfirmOrder;
waiter.orderConfirmationMakesSense;
waiter.orderEditRequestMakesSense;
waiter.orderRequestMakesSense;
waiter.placeOrder;
waiter.preConfirmOrder;
waiter.updateOrder;

export default waiter;