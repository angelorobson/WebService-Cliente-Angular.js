/**
 * 
 */
(function(){

    'use strict';

    angular.module('SGV')
        .controller('CadVacinaCtrl', ['$scope', 'CadVacinaFabrica', function($scope, CadVacinaFabrica){

             $scope.salvarVacina = function(){

                 CadVacinaFabrica.salvarVacina($scope).then(function(dados){
                     alert(dados);
                 },

                     function(){
                     alert('erro');
                 });

             };

        }]);


}());