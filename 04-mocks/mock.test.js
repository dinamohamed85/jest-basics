
const axios = require('axios');

const fetchData = async (id) => {
	console.log('called');
	const results = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	return results;
};

// [1, 2, 3, 4, 5].forEach((item) => {

// });

function forEach(items, callback) {
	for (
		let index = 0;
		index < items.length;
		index++
	) {
		callback(items[index]);
	}
}

// const mock = (x) => 42 + x;

it('mock callback', () => {

	// create mock function in jest
	const mockCallback = jest.fn((x) => 42 + x);

	forEach([0, 1], mockCallback);

	// calls = [call1 , call2]
	expect(mockCallback.mock.calls.length).toBe(2);

	expect(mockCallback.mock.calls[0][0]).toBe(0);

	expect(mockCallback.mock.calls[1][0]).toBe(1);

	// results = [ result1 , result2 ]
	expect(mockCallback.mock.results[0].value).toBe(
		42
	);
});

it('return mock', () => {
	const mock = jest.fn();

	mock
		.mockReturnValueOnce(true)
		.mockReturnValueOnce(false);

	const results = mock();
	const results2 = mock();

	expect(results).toBe(true);
	expect(results2).toBe(false);
});

it('mock modules or custom functions', async () => {
	// spy on get method that in axios object 
	// get method will return object
	jest.spyOn(axios, 'get').mockReturnValueOnce({
		id: 1,
		todo: 'Do youtube1',
	});

	const results = await fetchData(1);

	expect(results.todo).toBe('Do youtube1');
});
