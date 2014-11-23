(function() {

	'use strict';

	angular.module('SGV')
	.controller('ListarVacinaCtrl', ['$scope', 'ListarVacinaFabrica', '$location', function($scope, ListarVacinaFabrica, $location) {

		ListarVacinaFabrica.listarVacinas().then(function(vacinas){
			$scope.vacinas = vacinas;

			$scope.total = vacinas.length;

//			angular.forEach(data, function (item) {
//			console.log(item.sequencial + "\n" + item.codUsuario + "\n" + item.nome + "\n" + item.lote + "\n" + item.data);
//			});

		},
		function(){
			alert('erro');
		}); 

		$scope.editar = function(sequencial){

			$location.path('editar/' + sequencial);

		};

		$scope.excluir = function(sequencial){

			ListarVacinaFabrica.excluir(sequencial).then(function(retorno){
				alert(retorno);
			},

			function(){
				alert('erro');
			});


			setTimeout(function(){

				ListarVacinaFabrica.listarVacinas().then(function(vacinas){
					$scope.vacinas = vacinas;
					$scope.total = vacinas.length;

				},
				function(){
					alert('erro');
				}); 

			}, 100);

		};


	}]);




}());