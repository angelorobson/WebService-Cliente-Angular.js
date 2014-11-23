/**
 * 
 */
(function(){

    'use strict';

angular.module('SGV')
.factory('CadVacinaFabrica', ['$http', '$q', function($http, $q){

        function salvarVacina($scope) {

        	var usuario = JSON.parse(localStorage.getItem('usuario')); // pega o json de usuários
        	
        	var sequencial = usuario.sequencial;
        	
       
        	
        	 var vacina = function (){
                 return angular.toJson({
                	 "codUsuario": sequencial,
                     "nome":   $scope.nomeVacina,
                     "lote": $scope.lote,
                     "data": $scope.data
                 });
             };
             var vacinaJson = vacina();

             console.log(vacinaJson);
             
             var retorno = $q.defer();
             
             $http.post('/sgv/rest/vacina/salvar', vacinaJson)
             .success(function(data) {
            	 retorno.resolve('Vacina cadastrada com sucesso!!!');
				$scope.nomeVacina = "";
                $scope.lote = "";
                $scope.data = "";
			})
			.error(function(data) {
				alert("Não foi possível cadastrar! Verifique sua conexão de internet!");
			});
             
             return retorno.promise;

        }
        return {

            salvarVacina: salvarVacina
        };

    }]);

}());