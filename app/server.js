import bodyParser from 'body-parser'
import cache from './caching'
import cors from 'cors'
import errorHandler from 'errorhandler'
import express from 'express'
import helmet from 'helmet'
import methodOverride from 'method-override'
import morgan from 'morgan'
import routes from './routes/routes.js'
import settings from './configuration/settings'

let app = express()

//Test to check cache works as expected
cache.set('TestKey', '    TestValue successfuly set & retrieved from cache\n')
cache.get('TestKey', function (err, reply) {
  // eslint-disable-next-line no-console  
  console.log(reply)
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
    === App Server ===

    Connected on:
    
    Port: ${settings.port}
    Env: ${app.get('env')}
    
  `)
})

export default app
