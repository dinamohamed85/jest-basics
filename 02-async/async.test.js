const fetchData = require('./async');


it('should return correct todo', () => {

	// fetchData is a async mehthod so should use promises
	fetchData(1).then((todo) => {
		expect(todo.id).toBe(1);
	});
});

// or async await 
it('should return correct todo', async () => {

	// const todo = fetchData(1);  // This won't work
	// expect(todo.id).toBe(1);

	const todo = await fetchData(1);
	expect(todo.id).toBe(1);
});
