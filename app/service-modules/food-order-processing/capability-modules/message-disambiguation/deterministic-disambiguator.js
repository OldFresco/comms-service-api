import DeterminsticInputIntentMapping from '../../../../shared-service-modules/conversation-framework/deterministic-input-intent-mapping'

const defineDeterminsticInputIntentMapping = () => {

  let inputIntentMap = new DeterminsticInputIntentMapping()

  inputIntentMap.addMapping('hi', 'GREETING')
  inputIntentMap.addMapping('yo', 'GREETING')
  inputIntentMap.addMapping('hey', 'GREETING')
  inputIntentMap.addMapping('hello', 'GREETING')

  inputIntentMap.addMapping('help!', 'GREETING')
  inputIntentMap.addMapping('help please!', 'GREETING')
  inputIntentMap.addMapping('please hekp me', 'GREETING')
  inputIntentMap.addMapping('how do I use this thing?', 'GREETING')

  inputIntentMap.addMapping('menu?', 'VIEW_MENU')
  inputIntentMap.addMapping('menu please', 'VIEW_MENU')
  inputIntentMap.addMapping('what food do you have?', 'VIEW_MENU')
  inputIntentMap.addMapping('what\'s on?', 'VIEW_MENU')

  inputIntentMap.addMapping('open?', 'VIEW_OPENING_TIMES')
  inputIntentMap.addMapping('closed?', 'VIEW_OPENING_TIMES')
  inputIntentMap.addMapping('you open?', 'VIEW_OPENING_TIMES')
  inputIntentMap.addMapping('you closed?', 'VIEW_OPENING_TIMES')

  inputIntentMap.addMapping('wait?', 'VIEW_CURRENT_WAITING_TME')
  inputIntentMap.addMapping('what\'s the wait?', 'VIEW_CURRENT_WAITING_TME')
  inputIntentMap.addMapping('how long?', 'VIEW_CURRENT_WAITING_TME')

  inputIntentMap.addMapping('ready!', 'READY_TO_ORDER')
  inputIntentMap.addMapping('i\'m ready to order', 'READY_TO_ORDER')

  inputIntentMap.addMapping('no thanks!', 'CANCEL_ORDER')
  inputIntentMap.addMapping('nvm', 'CANCEL_ORDER')
  inputIntentMap.addMapping('peace', 'CANCEL_ORDER')
  inputIntentMap.addMapping('bye', 'CANCEL_ORDER')

  inputIntentMap.addMapping('yea', 'POSITIVE_CONFIRMATION')
  inputIntentMap.addMapping('yea, that\'s fine', 'POSITIVE_CONFIRMATION')
  inputIntentMap.addMapping('ok, that\'s fine', 'POSITIVE_CONFIRMATION')
  inputIntentMap.addMapping('ok', 'POSITIVE_CONFIRMATION')
  inputIntentMap.addMapping('no', 'NEGATIVE_CONFIRMATION')
  inputIntentMap.addMapping('nah', 'NEGATIVE_CONFIRMATION')

  return inputIntentMap
}

const disambiguate = (message) => {
  const deterministicIntentMap = defineDeterminsticInputIntentMapping()

  return deterministicIntentMap[message] || null
}

export default disambiguate
