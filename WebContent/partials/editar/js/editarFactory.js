/**
 * 
 */

(function() {
	
	'use strict';
	
	angular.module('SGV')
	.factory('EditarFabrica', ['$http', '$window', '$location', '$q', function($http, $window, $location, $q) {
		
		var listarVacina = function pegarVacina(sequencial) {
			
        var usuario = JSON.parse(localStorage.getItem('usuario')); // pega o json de usuários
        	
        	var codUsuario = usuario.sequencial;
			
			var retorno = $q.defer();
			
			$http.get('/sgv/rest/vacina/listarVacina/'+sequencial+'/'+codUsuario).success(function(data) {
				
				retorno.resolve(data);
				
			})
			.error(function() {

				alert("Aconteceu algo ruim! Verifique sua conexão de internet");
			}); 
			
			return retorno.promise;
        };
        
        
        function atualizar(sequencial, vacina) {
        	
        	var retorno = $q.defer();
        	
        	var valorSequencial = parseInt(sequencial);
        	
        	 var vacin = function (){
                 return angular.toJson({
                	 "sequencial": valorSequencial,
                     "nome":   vacina.nome,
                     "lote": vacina.lote,
                     "data": vacina.data
                 });
             };
             var vacinaJson = vacin();

             console.log(vacinaJson);
             
             $http.put('/sgv/rest/vacina/atualizar', vacinaJson)
             .success(function(data) {
            	 retorno.resolve("Vacina atualizada com Sucesso!!!");
				$location.path('listar-vacina');
				
			})
			.error(function(data) {
				alert("Não foi possível cadastrar! Verifique sua conexão de internet!");
			});
             
             return retorno.promise;
        	
		}
		
		return {
			
			listarVacina: listarVacina,
			atualizar: atualizar
		};
		
	}]);
	
}());
