const concierge = {
  fetchMenu() {
    let outcome = {
      'content': 'Jerk Chicken',
      'isOkay': true
    }

    return outcome
  },
  fetchOpeningHours() {
    let outcome = {
      'content': 'All day err day',
      'isOkay': true
    }

    return outcome
  },
  tryToHandleRequest(message) {
    if (message === 'Menu?') {
      return this.fetchMenu()
    } else if (message === 'Open?') {
      return this.fetchOpeningHours()
    } else {
      let outcome = {
        'content': null,
        'isOkay': false
      }
      return outcome
    }
  }
}

export default concierge
