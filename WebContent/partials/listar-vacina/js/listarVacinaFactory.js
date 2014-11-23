(function() {

	'use strict';

	angular.module('SGV')
	.factory('ListarVacinaFabrica', ['$http', '$q', '$location', function($http, $q, $location) {

		var listarVacinas = function(data){

			var retorno = $q.defer();

			var usuario = JSON.parse(localStorage.getItem('usuario')); // pega o json de usuários

			var sequencial = usuario.sequencial;

			$http.get('/sgv/rest/vacina/listarVacinas/'+sequencial).success(function(data) {

				retorno.resolve(data);
			})
			.error(function() {

				alert("Aconteceu algo ruim! Verifique sua conexão de internet");
			}); 


			return retorno.promise;

		};

		function excluir(sequencial){

			var retorno = $q.defer();

			if(window.confirm("Tem certeza que deseja excluir o Registro: " +sequencial)){


				$http.delete('/sgv/rest/vacina/excluir/'+ sequencial)
				.success(function() {

					retorno.resolve("Vacina excluída com sucesso!!!!");



				})
				.error(function(data) {
					alert("Não foi possível cadastrar! Verifique sua conexão de internet!");
				});
				return retorno.promise;

			}else {
				
				
			}

			
			

		};

		return {

			listarVacinas: listarVacinas,
			excluir: excluir
		};

	}]);

}());