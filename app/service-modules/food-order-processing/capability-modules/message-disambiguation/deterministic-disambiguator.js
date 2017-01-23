import DeterminsticInputIntentMapping from '../../../../shared-service-modules/conversation-framework/deterministic-input-intent-mapping'

const defineDeterminsticInputIntentMapping = () => {

  let inputIntentMap = new DeterminsticInputIntentMapping()

  inputIntentMap.addMapping('GREETING', [
    'hi',
    'yo',
    'hey',
    'hello',
    'help!',
    'help please!',
    'please help me',
    'how do i use this thing?'
  ])

  inputIntentMap.addMapping('VIEW_MENU', [
    'menu?', 
    'menu please', 
    'what food do you have?', 
    'what\'s on?'
  ])

  inputIntentMap.addMapping('VIEW_OPENING_TIMES', [
    'open?', 
    'closed?', 
    'you open?', 
    'you closed?'
  ])

  inputIntentMap.addMapping('VIEW_CURRENT_WAITING_TME', [
    'wait?', 
    'what\'s the wait?', 
    'how long?'
  ])

  inputIntentMap.addMapping('READY_TO_ORDER', [
    'ready!', 
    'i\'m ready to order'
  ])

  inputIntentMap.addMapping('CANCEL_ORDER', [
    'no thanks!', 
    'nvm', 
    'peace', 
    'bye'
  ])

  inputIntentMap.addMapping('POSITIVE_CONFIRMATION', [
    'yea',
    'yea, that\'s the fine',
    'ok, that\'s the fine',
    'ok'
  ])

  inputIntentMap.addMapping('NEGATIVE_CONFIRMATION', [
    'no',
    'nah'
  ])

  return inputIntentMap
}

const disambiguate = (message) => {
  const deterministicIntentMap = defineDeterminsticInputIntentMapping()

  return deterministicIntentMap[message] || null
}

export default disambiguate
