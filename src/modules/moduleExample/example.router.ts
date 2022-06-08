import express from 'express';
import ExampleController from './example.controller';

class ExampleRouter {
	start() {
		const router = express.Router();

		router.get('/', ExampleController.getExamples);
		router.get('/:id', ExampleController.getById);
		router.post('/', ExampleController.createExample);
		router.delete('/:id', ExampleController.deleteExample);
		router.put('/:id', ExampleController.updateExample);

		return router;
	}
}

export default ExampleRouter;
