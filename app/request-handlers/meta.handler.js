import BaseHandler from './base.handler';
import settings from '../config/settings';

class MetaHandler extends BaseHandler {
  index(req, res) {
		res.json({
			version : settings.version,
			health: 'ok'
		});
	}
}

export default new MetaHandler();