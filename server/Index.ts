import * as express from 'express';

export default class Index {
	public static handler(): express.RequestHandler {
		const router = express.Router();
		const self = new this();
		router.get('/', self.index);
		return router;
	}

	public index(req: express.Request, res: express.Response) {
		res.json({ result: true });
	}
}
