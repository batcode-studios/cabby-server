global.__base = __dirname + '/'

const express = require('express')
const path = require('path')

const app = express()
const consts = require(__base + 'utils/consts')

require(__base + 'libs/morgan')(app)
require(__base + 'libs/body-parser')(app)
require(__base + 'libs/parse-server')(app, consts)

app.use('/public', express.static(path.join(__base, '/public')))

require(__base + 'routes')(app)

app.listen(consts.port, () => {
	console.log(`Finball Parse Server running in http://localhost:${consts.port}`)
})
