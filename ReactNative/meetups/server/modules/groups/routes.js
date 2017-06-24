import { Router } from 'express';
import * as GroupController from './controller';

const routes = new Router();

routes.post('/groups/new', GroupController.createGroup);
routes.post('/groups/:groupId/meetups/new', GroupController.createGroupMeetup);
routes.get('/groups/:groupId/getGroupMeetups', GroupController.getGroupMeetups);

export default routes;
