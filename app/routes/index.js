
module.exports = function ( router ) {

	router.get( '/', function ( req, res ) {
		res.render( 'app', { title : 'My Awesome App!!!' } );
	} );

};

