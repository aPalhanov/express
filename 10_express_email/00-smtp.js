const nodemailer = require('nodemailer')

const credentials = require('./credentials')

const mailTransport = nodemailer.createTransport({
	host: 'smtp.yandex.ru',
	auth: {
		user: credentials.sendgrid.user,
		pass: credentials.sendgrid.password,
	},
})

async function go() {
	try {
		const result = await mailTransport.sendMail({
			from: '"Риксом-M" <mail.riksom@yandex.ru>',
			to: 'palhanov@gmail.com',
			subject: 'Your Meadowlark Travel Tour',
			text: 'Thank you for booking your trip with Meadowlark Travel.  ' +
				'We look forward to your visit!',
		})
		console.log('mail sent successfully: ', result)
	} catch (err) {
		console.log('could not send mail: ' + err.message)
	}
}

go()
