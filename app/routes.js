import MetaHandler from './request-handlers/meta.handler';
import MessageHandler from './request-handlers/message.handler';
import {Router} from 'express';
import settings from './config/settings';

const routes = new Router();
const version = settings.apiVersion;

const messageCleanser = function (req, res, next) {
    req.body.Body = req
        .body
        .Body
        .trim();
    next()
}

routes.get(`${version}/health`, MetaHandler.index);
routes.post(`${version}/inbox`, messageCleanser, MessageHandler.processMessage);

export default routes;
