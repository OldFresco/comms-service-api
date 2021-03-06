import { merge } from 'lodash'
import path from 'path'

// Default configuations applied to all environments
const defaultConfig = {
  env: process.env.NODE_ENV,
  get envs() {
    return {
      test: process.env.NODE_ENV === 'test',
      development: process.env.NODE_ENV === 'development',
      production: process.env.NODE_ENV === 'production'
    }
  },
  apiVersion: require('../../package.json').apiVersion,
  root: path.normalize(__dirname + '/../../..'),
  port: process.env.PORT || 4567,
  ip: process.env.IP || '0.0.0.0',
  auth0: {
    secret: 'secret',
    client: 'client',
    domain: 'https://likelyloans.eu.auth0.com/'
  },
  /**
   * Security configuation options regarding sessions, authentication and hashing
   */
  security: {
    sessionSecret: process.env.SESSION_SECRET || 'i-am-the-secret-key',
    sessionExpiration: process.env.SESSION_EXPIRATION || 60 * 60 * 24 * 7, // 1 week
    saltRounds: process.env.SALT_ROUNDS || 12
  }
}

// Environment specific overrides
const environmentConfigs = {
  development: {
    security: {
      saltRounds: 4
    }
  },
  test: {
    port: 5678,
    security: {
      saltRounds: 4
    }
  },
  production: {
  }
}

// Recursively merge configurations
export default merge(defaultConfig, environmentConfigs[process.env.NODE_ENV] || {})
