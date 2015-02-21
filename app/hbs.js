
var path   = require( 'path' );
var exphbs = require( 'express-handlebars' );

var hbs = exphbs.create({
	defaultLayout : 'main',
	extname       : 'html',
	layoutsDir    : 'app/views/layouts',
	partialsDir   : 'app/views/partials'
});

module.exports = hbs;

