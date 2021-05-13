module.exports = {
	"cookieSecret": "REQUIRED: RANDOM STRING",
	"redis": {
		"dev": {
			"url": "redis://localhost"
		}
	},
	"mongo": {
		"connectionString": "mongodb+srv://palhanov:724hj6@fullstack.dgb2v.mongodb.net/app?retryWrites=true&w=majority"
	},
	"authProviders": {
		"facebook": {
			"appId": "REQUIRED: Facebook App ID",
			"appSecret": "REQUIRED: Facebook App Secret"
		},
		"google": {
			"clientID": "392097640431-laq20jn8g0leqq7oe87deg4qpu1tiarj.apps.googleusercontent.com",
			"clientSecret": "Gcat0HaIi1xS22nMHVwaNDNK"
		}
	},
	"twitter": {
		"consumerApiKey": "REQUIRED: Twitter API Key",
		"apiSecretKey": "REQUIRED: Twitter API Secret Key",
	},
	"google": {
		"apiKey": "REQUIRED: Google API key"
	}
}