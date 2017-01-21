import HealthCheckHandler from './http-request-handlers/health-check.handler'
import MessageHandler from './http-request-handlers/message.handler'
import { Router } from 'express'
import messageCleanser from './middleware/message-cleanser'
import settings from './config/settings'

const routes = new Router()
const version = settings.apiVersion

routes.get(`${version}/health`, HealthCheckHandler.check)
routes.post(`${version}/inbox`, messageCleanser, MessageHandler.processMessage)

export default routes
