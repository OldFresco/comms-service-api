import bodyParser from 'body-parser'
import cors from 'cors'
import errorHandler from 'errorhandler'
import express from 'express'
import helmet from 'helmet'
import methodOverride from 'method-override'
import morgan from 'morgan'
import redis from 'redis'
import routes from './routes/routes.js'
import settings from './configuration/settings'

let client = redis.createClient()
let app = express()

client.on('connect', function () {
  // eslint-disable-next-line no-console  
  console.log('    Woo Hoo! Redis connected!\n')
})
// Adds some security best practices
app.use(helmet())
app.use(cors())

// Logger
if (!settings.envs.test) {
  app.use(morgan('dev'))
}

// Properly Decode JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Add all HTTP methods
app.use(methodOverride())

// Mount API routes
app.use('/', routes)

// Only use error handler in development
if (settings.envs.development) {
  app.use(errorHandler())
}

app.listen(settings.port, () => {
  // eslint-disable-next-line no-console
  console.log(`
    Port: ${settings.port}
    Env: ${app.get('env')}
    
    Keep on rockin' in the free world!
  `)
})

export default app
