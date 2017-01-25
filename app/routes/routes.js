import HealthCheckHandler from '../http-request-handlers/health-check.handler'
import MessageHandler from '../http-request-handlers/message.handler'
import { Router } from 'express'
import cleanser from '../http-request-preprocessing/message-preprocessing/cleanser'
import moderator from '../http-request-preprocessing/message-preprocessing/moderator'
import securityGuard from '../http-request-preprocessing/message-preprocessing/security-guard'
import settings from '../configuration/settings'

const routes = new Router()
const version = settings.apiVersion

routes.get(`${version}/health`, HealthCheckHandler.check)
routes.post(`${version}/inbox`, [cleanser, moderator, securityGuard], MessageHandler.processMessage)

export default routes
