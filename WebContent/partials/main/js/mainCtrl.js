(function() {
	
	'use strict';
	
	angular.module('SGV')
	.controller('MainCtrl', ['$scope', function($scope) {
		
		
		var usuario = JSON.parse(localStorage.getItem('usuario')); // pega o json de usuários
		
		$scope.usuario = usuario.nome;
		
		$scope.valor = true;
		
	}]);
	
	
}());