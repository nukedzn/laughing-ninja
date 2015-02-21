
// app configs
var configs = {

	mongoose : {
		uri : ( process.env[ 'MONGOOSE_URI' ] ) ? process.env[ 'MONGOOSE_URI' ] : 'mongodb://localhost/laughing-ninja'
	}

}

module.exports = configs;

