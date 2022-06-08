import express, { Application } from 'express';
import middlewares from './network/middlewares';
import routes from './network/routes';
class Server {
	app: Application;

	constructor(private port: number) {
		this.app = express();
		middlewares(this.app);
		routes(this.app);
	}

	public start() {
		this.app.listen(this.port, () => {
			console.log('running server at: ' + this.port);
		});
	}
}

export default Server;
