module.exports = {
	port: process.env.PORT || 1337,
	baseURL: 'http://localhost:1337/',
	dbURL: 'mongodb://localhost:27017',
	parse: {
		databaseURL: process.env.DATABASE_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/dev',
		cloud: process.env.CLOUD_CODE_MAIN || __base + 'libs/parse-server/cloud/main.js',
		appID: process.env.APP_ID || 'myAppId',
		masterKey: process.env.MASTER_KEY || 'myMasterKey',
		serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',
		mountPath: process.env.PARSE_MOUNT || '/parse',
		liveClassNames: ['Posts', 'Comments']
	},
	email: {
		host: process.env.EMAIL_HOST || 'smtp.zoho.com',
		port: process.env.EMAIL_PORT || 587,
		user: process.env.EMAIL_USER || 'webmaster@finnirv.com',
		pass: process.env.EMAIL_PASS || 'finpass2015',
		service: process.env.EMAIL_SERVICE || 'Zoho'
	}
}
