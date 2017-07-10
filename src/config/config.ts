import { sync } from 'glob';
import { union } from 'lodash';

export default class Config {
	static port: number = 3000;
	static routes: string = './dist/routes/**/*.js';
	static models: string = './dist/models/**/*.js';

	static globFiles(location: string): string[] {
		return union([], sync(location));
	}
}