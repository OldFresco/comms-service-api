class FoodOrderProcessingDisambiguationModule {

  constructor () {}

  run () {
    return 'UNKNOWN'
  }
}

const disambiguate = (message) => {
  const disambiguationAlgorithm = new FoodOrderProcessingDisambiguationModule()

  return disambiguationAlgorithm.run(message) || null
}

export default disambiguate
