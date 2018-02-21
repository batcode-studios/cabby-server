// Parse server Import
const ParseServer = require('parse-server').ParseServer

// Parse Instance and Parse Live Query Export
module.exports = {
	parseAPI: (consts) => {
		return new ParseServer({
			databaseURI: consts.parse.databaseURL,
			cloud: consts.parse.cloud,
			appId: consts.parse.appID,
			masterKey: consts.parse.masterKey,
			serverURL: consts.parse.serverURL,
			liveQuery: {
				classNames: consts.parse.liveClassNames
			},
			appName: 'Finball',
			publicServerURL: consts.parse.serverURL,
			verifyUserEmails: false,
			emailAdapter: {
				module: 'simple-parse-smtp-adapter',
				options: {
					fromAddress: consts.email.user,
					user: consts.email.user,
					password: consts.email.pass,
					host: consts.email.host,
					service: consts.email.service,
					isSSL: false, //True or false if you are using ssl
					port: consts.email.port, //SSL port or another port
					name: 'finballapp.com', //  optional, used for identifying to the server
					//Somtimes the user email is not in the 'email' field, the email is search first in
					//email field, then in username field, if you have the user email in another field
					//You can specify here
					emailField: 'username',
					templates: {
						//This template is used only for reset password email
						resetPassword: {
							//Path to your template
							template: __base + 'public/views/email/reset-password',
							//Subject for this email
							subject: 'Reset your password'
						},
						verifyEmail: {
							template: __base + 'public/views/email/verify-email',
							subject: 'Verify Email'
						}
					}
				}
			},
			auth: {
				firebase: 'parse-server-firebase-auth-adapter',
				databaseURL: 'https://cabby-69572.firebaseio.com',
				credential: __base + 'utils/firebase-credential.json'
			}
		})
	},
	liveQuery: (app) => {
		return ParseServer.createLiveQueryServer(app)
	}
}
