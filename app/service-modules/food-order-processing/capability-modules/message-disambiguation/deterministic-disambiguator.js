const defineDeterminsticInputIntentMapping = () => {
  return {'Menu?': 'VIEW_MENU', 'Open?': 'VIEW_OPENING_TIMES', 'Wait': 'VIEW_CURRENT_WAITING_TME'}
}

const disambiguate = (message) => {
  const deterministicIntentMap = defineDeterminsticInputIntentMapping()

  return deterministicIntentMap[message] || null
}

export default disambiguate
