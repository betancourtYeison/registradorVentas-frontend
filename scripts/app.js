angular.module('miAp', ['ngRoute'])

.config(function ($routeProvider) {
	$routeProvider
	.when('/', {		
		templateUrl: 'views/home.html',
	})
	.when('/verVentas', {
		controller: 'verVentasCtrl',
		templateUrl: 'views/verVentas.html'
	})
	.when('/ingresarVenta', {
		controller: 'ingresarVentasCtrl',
		templateUrl: 'views/ingresarVenta.html'
	})	
	.otherwise({ 
		redirectTo: '/' 
	})
});