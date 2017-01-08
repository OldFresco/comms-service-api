import MetaController from './controllers/meta.controller';
import InboxController from './controllers/inbox.controller';
import {Router} from 'express';
import settings from './config/settings';

const routes = new Router();
const version = settings.apiVersion;

routes.get(`${version}/health`, MetaController.index);
routes.post(`${version}/inbox`, InboxController.processMessage);

export default routes;
