(function(){

	'use strict';

	angular.module('SGV', ['ngRoute', 'ngAnimate'])
	.config(['$routeProvider', function($routeProvider){

		$routeProvider
		.when('/', {

			controller: 'LoginCtrl',
			templateUrl: 'partials/login/login.html'
		})
		.when('/main', {

			controller: 'MainCtrl', 
			templateUrl: 'partials/main/main.html'
		})
		.when('/cad-vacina', {

			controller: 'CadVacinaCtrl',
			templateUrl:'partials/cad-vacina/cad-vacina.html'

		})
		.when('/listar-vacina', {

			controller: 'ListarVacinaCtrl',
			templateUrl: 'partials/listar-vacina/listar-vacina.html'

		})
		.when('/cad-usuario', {

			controller: 'CadUsuarioCtrl',
			templateUrl: 'partials/cad-usuario/cad-usuario.html'

		})
		.when('/editar/:sequencial', {

			controller: 'EditarCtrl',
			templateUrl: 'partials/editar/editar.html'

		})
		.otherwise('/');

	}]);
	
	
	

}());
