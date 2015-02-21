
'use strict';

var debug    = require( 'debug' )( 'app:models' );
var fs       = require( 'fs' );
var path     = require( 'path' );
var mongoose = require( 'mongoose' );


var Models = function ( options ) {

	if ( process.env.NODE_ENV !== 'production' ) {
		mongoose.set( 'debug', true );
	}

	debug( options );
	mongoose.connect( options.uri );

}


Models.prototype.load = function () {

	var base = path.join( __dirname, 'models' );

	var files = fs.readdirSync( base );
	files.forEach( function ( file ) {

		debug( 'loading models from file: ' + file );

		try {
			require( path.join( base, file ) );
		} catch ( e ) {
			debug( 'error: ' + e );
		}

	} );

}


module.exports = function ( options ) {
	return new Models( options );
}

