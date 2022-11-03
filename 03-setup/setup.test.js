let animals = [];

beforeAll(() => {
	animals = [
		'elephant',
		'zebra',
		'bear',
		'tiger',
	];
});

beforeEach(() => {
	animals = [
		'elephant',
		'zebra',
		'bear',
		'tiger',
	];
});

afterEach(() => {
	animals = [];
});

// it will be executed last
afterAll(() => {
	animals = [];
});

describe('animals array', () => {

	// push
	it('should add animal to end of array', () => {
		animals.push('aligator');
		expect(animals[animals.length - 1]).toBe(
			'aligator'
		);
	});

	// unshift
	it('should add animal to beginning of array', () => {
		animals.unshift('monkey');
		expect(animals[0]).toBe('monkey');
	});

	it('should have initial length of 4', () => {
		expect(animals.length).toBe(4);
	});
});
