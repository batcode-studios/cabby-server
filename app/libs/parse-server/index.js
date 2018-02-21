const Parse = require('parse/node')
const parseImports = require(__base + '/libs/parse-server/config')

module.exports = (app, consts) => {
	app.use(consts.parse.mountPath, parseImports.parseAPI(consts))
	parseImports.liveQuery(app)
	Parse.initialize(consts.parse.appID)
	Parse.serverURL = consts.parse.serverURL
}
