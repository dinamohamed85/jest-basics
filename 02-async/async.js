const axios = require('axios');

// async api : http request to fetch some data using get(url) request
// json placeholder api 

// method 1 using async await 

const fetchData = async (id) => {
	// fetch one object
	const results = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	return results.data;
};

// method 2 using promises
// fetch one object

/*const fetchData = (id) => 
	axios
		.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
		.then(results => results.data)
		.catch(err => 'error');*/


module.exports = fetchData;
