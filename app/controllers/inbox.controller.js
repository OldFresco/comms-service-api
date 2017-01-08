import BaseController from './base.controller';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class InboxController extends BaseController {
    constructor() {
        super();
        this.processMessage = this
            .processMessage
            .bind(this);
    }

    processMessage(req, res) {
        res.json({message: req.body});

    }
}

export default new InboxController();