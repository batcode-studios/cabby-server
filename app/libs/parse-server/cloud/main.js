const Parse = require('parse/node')

Parse.Cloud.define('post', (req, res) => {
	const query = new Parse.Query('Post')
	query.find()
		.then((results) => {
			res.success(results)
		})
		.catch((error) => {
			res.error(error)
		})
})
