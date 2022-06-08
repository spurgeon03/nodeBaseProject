import { Request, Response } from 'express';
import ExamplesService from './example.service';
import { resSuccess, resError } from '../../network/response';
const examplesService = new ExamplesService();

class ExamplesController {
	static async getExamples(req: Request, res: Response) {
		examplesService
			.getAllExamples()
			.then((rs: any) => {
				resSuccess(req, res, rs, 200);
			})
			.catch((e) => {
				resError(req, res, e, 400);
			});
	}

	static async getById(_req: Request, res: Response) {
		const rs = await examplesService.getById(Number(_req.params.id));
		res.status(200).json(rs);
	}

	static async createExample(req: Request, res: Response) {
		examplesService
			.createExample(req.body)
			.then((rs: any) => {
				resSuccess(req, res, rs, 201);
			})
			.catch((e) => {
				resError(req, res, e, 400);
			});

		const rs = await examplesService.createExample(req.body);
		res.status(200).json(rs);
	}

	static async deleteExample(_req: Request, res: Response) {
		const rs = await examplesService.deleteExample();
		res.status(200).json(rs);
	}

	static async updateExample(_req: Request, res: Response) {
		const rs = await examplesService.updateExample();
		res.status(200).json(rs);
	}
}

export default ExamplesController;
