import express, { Application } from 'express';
import bodyParser from 'body-parser';
import routes from './network/routes';
class Server {
	app: Application;

	constructor(private port: number) {
		this.app = express();
		this.loadMiddleware();
		routes(this.app);
	}

	private loadMiddleware() {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		// this.app.use(passportLocal.initialize());
		// this.app.use(JwtStrategy.initialize());
	}

	public start() {
		this.app.listen(this.port, () => {
			console.log('running server at: ' + this.port);
		});
	}
}

export default Server;
