class Memory {

  constructor (cache) {
    this.cache = cache
  }

  memorize (sender) {
    let deserializedSender = JSON.stringify(sender)

    this.cache.set(sender.id, deserializedSender)
  }

  add (convo, message) {
    this.cache.rpush([convo.id, message], (err, reply) => {
      // eslint-disable-next-line no-console          
      console.log(reply)
    })

    this.cache.expire(convo.id, 500)    
  }
  
  recalls (sender) {
    return this.cache.get(sender.id, function (err, reply) {
      // eslint-disable-next-line no-console  
      console.log(reply)
    })
  }

  recallConversationWith (sender) {
    let knownSender = this.cache.get(sender.id, function (err, reply) {
      // eslint-disable-next-line no-console  
      console.log(reply)
    })

    return knownSender.convesationId
  }

  stubMethod () {
    this.cache.rpush(['frameworks', 'angularjs', 'backbone'], function (err, reply) {
      // eslint-disable-next-line no-console    
      console.log(reply) // prints 2
    })
    this.cache.expire('frameworks', 30)
  }
}

export default Memory
