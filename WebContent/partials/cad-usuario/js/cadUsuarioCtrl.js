/**
 * Created by Angelo Robson on 14/11/2014.
 */

(function(){
    'use strict';

    angular.module('SGV')
        .controller('CadUsuarioCtrl',  ['$scope', 'CadUsuarioFabrica', function($scope, CadUsuarioFabrica){

       $scope.salvarUsuario = function(){


    	   CadUsuarioFabrica.salvarUsuario($scope).then(function(dados){
               alert(dados);
           },

               function(){
               alert('erro');
           });;
       };

        }]);

}());
