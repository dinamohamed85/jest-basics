const axios = require('axios');

// async api : http request to fetch some data using get(url) request
// json placeholder api 
const fetchData = async (id) => {
	// fetch one object
	const results = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	return results.data;
};

module.exports = fetchData;
