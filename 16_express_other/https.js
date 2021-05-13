const https = require('https')
const fs = require('fs')
const express = require('express')
const expressHandlebars = require('express-handlebars')
const handlers = require('./lib/handlers')

const { credentials } = require('./config')

const app = express()

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
	defaultLayout: 'main',
	helpers: {
		section: function (name, options) {
			if (!this._sections) this._sections = {}
			this._sections[name] = options.fn(this)
			return null
		},
	},
}))
app.set('view engine', 'handlebars')


// usually at top of file
// ...the rest of your application configuration

//openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout meadowlark.pem -out meadowlark.crt
const options = {
	key: fs.readFileSync(__dirname + '/ssl/meadowlark.pem'),
	cert: fs.readFileSync(__dirname + '/ssl/meadowlark.crt'),
}
const port = process.env.PORT || 3000


app.get('/', handlers.home)



https.createServer(options, app).listen(port, () => {
	console.log(`Express started in ${app.get('env')} mode ` +
		`on port + ${port}.`)
})