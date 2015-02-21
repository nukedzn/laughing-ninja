
// modules
var path    = require( 'path' );
var express = require( 'express' );
var morgan  = require( 'morgan' );
var hbs     = require( './hbs' );
var routes  = require( './routes' );

var app = express();

// view engine
app.engine( 'html', hbs.engine );
app.set( 'views', path.join( __dirname, '/views' ) )
app.set( 'view engine', 'html' );

// misc
app.use( express.static( 'public/' ) );

// logging
if ( app.get( 'env' ) === 'production' ) {
	app.use( morgan( 'combined' ) );
} else {
	app.use( morgan( 'dev' ) );
}

// routes
app.use( '/', routes );


// 404s as an error handler
app.use( function ( req, res, next ) {
	var err    = new Error( 'Not Found' );
	err.status = 404;
	next( err );
} );


// error handlers
app.use( function ( err, req, res, next ) {
	res.status( err.status || 500 );
	res.render( 'error', {
		message : err.message,
		error   : ( app.get( 'env' ) === 'development' ) ? err : {}
	} );
} );

module.exports = app;

