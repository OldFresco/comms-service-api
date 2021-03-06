import BaseHandler from './base.handler'
import settings from '../configuration/settings'

class HealthCheckHandler extends BaseHandler {
  check (req, res) {
    res.json({
      version: settings.version,
      health: 'ok'
    })
  }
}

export default new HealthCheckHandler()
