/**
 * 
 */
/**
 * Created by Angelo Robson on 17/11/2014.
 */
(function(){
    'use strict';

    angular.module('SGV')
        .factory('CadUsuarioFabrica', ['$window', '$http', '$q', '$location', function($window, $http, $q, $location){

             
             function salvarUsuario($scope) {

                 var usuario = function (){
                     return angular.toJson({
                         "nome":   $scope.nome +" "+$scope.sobreNome,
                         "email" : $scope.email,
                         "senha" : $scope.senha
                     });
                 };

                 var usuarioJson = usuario();

                 console.log(usuarioJson);

                 var retorno = $q.defer();
                 
                 $http.post('/sgv/rest/usuario/salvar', usuarioJson)
                     .success(function(data){
                    	 retorno.resolve('Cadastrado com sucesso!');

                              $scope.nome = "";
                              $scope.email = "";
                              $scope.senha = "";
                              $scope.repetirSenha = "";
                              $location.path('/');

                     })
                     .error(function(data){

                         alert("Algo Ruim Aconteceu! Verifique sua conexão de internet " );

                     });
                 
                 return retorno.promise;

             }
             return {

            	 salvarUsuario: salvarUsuario
             };
                

           

        }]);

}());
