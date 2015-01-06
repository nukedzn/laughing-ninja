
var path  = require( 'path' );
var http  = require( 'http' );
var debug = require('debug')('server:core');
var conf  = require( './conf/server' );
var app   = require( './app/app' );

// update app settings
app.set( 'port', conf.port );

// server
var server = http.createServer(app);
server.listen( conf.port );
server.on( 'error' , onError );
server.on( 'listening', onListening );


function onError( error ) {

	if ( error.syscall !== 'listen' ) {
		throw error;
	}

	switch ( error.code ) {
		case 'EACCES':
			console.error( 'not enough permissions to bind to port ' + conf.port );
			process.exit( 1 );
			break;

		case 'EADDRINUSE':
			console.error( 'port ' + conf.port + ' already in use' );
			process.exit( 1 );
			break;

		default:
			throw error;
	}

}


function onListening() {
	debug( 'listening on port ' + server.address().port );
}

