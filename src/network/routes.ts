import { Application } from 'express';
import ExamplesRouter from '../modules/moduleExample/example.router';

const routes = function (server: Application) {
	server.use('/examples', new ExamplesRouter().start());
};

export default routes;
