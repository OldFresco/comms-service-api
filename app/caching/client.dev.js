import redis from  'redis-mock'

let cachingClient = redis.createClient()

cachingClient.on('error', (err) => {
  // eslint-disable-next-line no-console      
  console.log('   Error connecting to Redis cache :(' + err)
})

cachingClient.on('connect', () => {
  // eslint-disable-next-line no-console  
  console.log('    Woo Hoo! Redis connected!\n')
})

export default cachingClient