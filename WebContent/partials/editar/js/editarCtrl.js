(function () {
    'use strict';

    angular.module('SGV')
        .controller('EditarCtrl', ['$scope', '$routeParams', '$location', 'EditarFabrica', function ($scope, $routeParams, $location, EditarFabrica) {
            
        	EditarFabrica.listarVacina($routeParams.sequencial).then(function(data){
                
//       	console.log("Sequencial: " + data.sequencial + "\n" + "CodUsuario: " + data.codUsuario + "\n" + "Nome: " + data.nome + "\n" + "Lote: " +  data.lote + "\n" + "Data: " + data.data);
//       
       	$scope.vacina = data;
            },

                function(){
                alert('erro');
            });
			
        	
        	$scope.atualizar = function() {
        		
        		EditarFabrica.atualizar($routeParams.sequencial, $scope.vacina).then(function(retorno){
                    alert(retorno);
                },

                    function(){
                    alert('erro');
                });
        		
        		
			};

        }]);

}());