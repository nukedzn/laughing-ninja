
var debug   = require( 'debug' )( 'app:routes' );
var express = require( 'express' );
var fs      = require( 'fs' );
var path    = require( 'path' );

var router  = express.Router();
var base    = path.join( __dirname, 'routes' );

// read routes
fs.readdir( base, function ( err, files ) {

	if (! err ) {

		files.forEach( function( file ) {

			debug ( 'loading routes from file: ' + file );

			try {
				require( path.join( base, file ) )( router );
			} catch ( e ) {
				debug( 'error: ' + e );
			}

		} );

	}

} );


module.exports = router;

