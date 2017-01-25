import DeterminsticInputIntentMapping from '../../../../shared-service-modules/conversation-framework/deterministic-input-intent-mapping'

const defineDeterminsticInputIntentMapping = () => {

  let inputIntentMap = new DeterminsticInputIntentMapping()

  inputIntentMap.addMappings('GREETING', [
    'hi',
    'yo',
    'hey',
    'hello',
    'help!',
    'help please!',
    'please help me',
    'how do i use this thing?'
  ])

  inputIntentMap.addMappings('VIEW_MENU', [
    'menu?', 
    'menu please', 
    'what food do you have?', 
    'what\'s on?'
  ])

  inputIntentMap.addMappings('VIEW_OPENING_TIMES', [
    'open?', 
    'closed?', 
    'you open?', 
    'you closed?'
  ])

  inputIntentMap.addMappings('VIEW_CURRENT_WAITING_TME', [
    'wait?', 
    'what\'s the wait?', 
    'how long?'
  ])

  inputIntentMap.addMappings('READY_TO_ORDER', [
    'ready!', 
    'i\'m ready to order'
  ])

  inputIntentMap.addMappings('CANCEL_ORDER', [
    'no thanks!', 
    'nvm', 
    'peace', 
    'bye'
  ])

  inputIntentMap.addMappings('POSITIVE_CONFIRMATION', [
    'yea',
    'yea, that\'s the fine',
    'ok, that\'s the fine',
    'ok'
  ])

  inputIntentMap.addMappings('NEGATIVE_CONFIRMATION', [
    'no',
    'nah'
  ])

  return inputIntentMap
}

const disambiguate = (message) => {
  const deterministicIntentMap = defineDeterminsticInputIntentMapping()

  return deterministicIntentMap.inputIntentMap[message].value || null
}

export default disambiguate
