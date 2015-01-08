// ng-app.js

var app = angular.module( 'app.name', [ 'ngRoute', 'app.crtls' ] );

// routes
app.config( [ '$routeProvider',
	function ( $routeProvider ) {
		$routeProvider
		.when( '/', {
			templateUrl : '/ng/partials/home.html',
			controller  : 'mainctrl'
		} )
		.otherwise( {
			redirectTo  : '/'
		} );
	} ]
);


// controllers
var crtls = angular.module( 'app.crtls', [] );

crtls.controller( 'mainctrl', [ '$scope',
	function ( $scope ) {
		// main controller
	} ]
);

