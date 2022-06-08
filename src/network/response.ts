import { Request, Response } from 'express';

const resSuccess = function (_req: Request, res: Response, message = {}, status = 200) {
	res.status(status).send({
		error: '',
		body: message,
	});
};

const resError = function (_req: Request, res: Response, message = {}, status = 500) {
	res.status(status || 500).send({
		error: message,
		body: '',
	});
};

export { resSuccess, resError };
