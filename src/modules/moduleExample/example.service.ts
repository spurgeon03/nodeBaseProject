import { Result } from './example.model';
const results: Array<Result> = [];

class ExamplesService {
	async getAllExamples() {
		return new Promise((resolve, reject) => {
			if (results.length === 0) {
				reject('No exiten registros');
			}

			resolve(results);
		});
	}

	async getById(id: number) {
		return 'get by id' + id;
	}

	async createExample(name: string) {
		return new Promise((resolve, reject) => {
			try {
				const newResult = new Result(name);
				results.push(newResult);
				resolve(newResult);
			} catch (error) {
				reject('No hemos podido crear el ejemplo');
			}
		});
	}

	async updateExample() {
		return 'update example';
	}

	async deleteExample() {
		return 'delete example';
	}
}

export default ExamplesService;
