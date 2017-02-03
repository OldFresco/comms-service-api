class Memory {

  constructor (cache) {
    this.cache = cache
  }

  stubMethod () {
    this.cache.rpush(['frameworks', 'angularjs', 'backbone'], function (err, reply) {
      console.log(reply) // prints 2
    })
  }
}

export default Memory