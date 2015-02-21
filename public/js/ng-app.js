// ng-app.js

var app = angular.module( 'app.name', [ 'ngRoute', 'app.ctrls' ] );

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
var ctrls = angular.module( 'app.ctrls', [] );

ctrls.controller( 'mainctrl', [ '$scope',
	function ( $scope ) {
		// main controller
	} ]
);

