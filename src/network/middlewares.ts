import { Application } from 'express';
import bodyParser from 'body-parser';

const middlewares = function (server: Application) {
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
};

export default middlewares;