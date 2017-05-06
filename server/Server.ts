import * as express from 'express';
import Index from './Index';

class Server {
	public constructor(
		private _app = express()
	){
		this._app.use('/', Index.handler());
	}

	public listen() {
		this._app.listen(process.env.PORT, () => {
			console.log(`listen on port ${process.env.PORT}`);
		});
	}
}

new Server().listen();
