const bodyParser = require('body-parser')

module.exports = (app) => {
	app.use(bodyParser.json()) // for json data.
	app.use(bodyParser.urlencoded({
		extended: true
	})) // for url encoded
}
