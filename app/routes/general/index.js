const root = require(__base + 'routes/general/root')
const time = require(__base + 'routes/general/server-time')

module.exports = {
	root: (req, res) => {
		root(req, res)
	},
	getTime: (req, res) => {
		time(req, res)
	}
}
