/**
 * Created by Angelo Robson on 17/11/2014.
 */
(function(){
    'use strict';

    angular.module('SGV')
        .factory('LoginFactory', ['$window', '$http', '$location', function($window, $http, $location){

            function autenticar($scope) {

                var autenticaUsuario = function (){
                    return angular.toJson({
                        "email" : $scope.email,
                        "senha" : $scope.senha
                    });
                };
                
                var jsonUsuario = autenticaUsuario();
                
                console.log(jsonUsuario);

                $http.post('/sgv/rest/usuario/autenticar', jsonUsuario)
                    .success(function(data){
                    
                    	
                    	
                    	if (data.indStatus != null && data.indStatus == "U") {
                    		
                    		localStorage.setItem('usuario', angular.toJson({
            					sequencial: data.sequencial,
            					nome: data.nome
            				    
            				}));
                    		
                    		

                        		
                      		
                      		

                      		
							
                    		$location.path('main');
                    		
						}else if (data.indStatus != null && data.indStatus == "A") {
							alert("Admin");
							
						}else {
							
							alert("Senha incorreta");
						}

                    })
                    .error(function(data){

                        alert("Algo Ruim Aconteceu! Verifique sua conexão de internet " );

                    });
                
            }

            return {

                autenticar: autenticar
            }

        }]);

}());
