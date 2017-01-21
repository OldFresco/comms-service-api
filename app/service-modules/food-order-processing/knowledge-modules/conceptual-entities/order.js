class Order {

  constructor (state) {
    this.state = state
    this.content = []
    this.extraNotes = ''
  }

  hasBeenPlaced () {
    return this.state === 'PLACED'
  }

  hasBeenPreConfirmed () {
    return this.state === 'PRE_CONFIRMED'
  }

  hasBeenFinallyConfirmed () {
    return this.state === 'FINALLY_CONFIRMED'
  }

  hasExtraNotes () {
    return this.extraNotes !== ''
  }

  addOrder (orderItems) {
    this.content = orderItems
  }

  addOrderItem (orderItem) {
    this.content.push(orderItem)
  }

  removerOrderItem (orderItemId, quantity) {
    // go through content array
    // for each item in array, get the item's id see if it matches
    // if it matches reduce the number of items by quantity specified
    // don't let it be less than zero
  }

  exchangeOrderItem (oldOrderItem, newOrderItem) {
    // go through content array
    // for each iterm in array get the item's id see if it matches
    // if it matches replace old item's props with new item's props

  }
}

export default Order;
