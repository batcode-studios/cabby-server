const general = require(__base + 'routes/general')

module.exports = (app) => {
	app.get('/',
		general.root)

	app.get('/server-time',
		general.getTime)

}
