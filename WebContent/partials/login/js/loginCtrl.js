/**
 * Created by Angelo Robson on 14/11/2014.
 */

(function(){
    'use strict';

    angular.module('SGV')
        .controller('LoginCtrl',  ['$scope', 'LoginFactory', function($scope, LoginFactory){
   
        	 
        	
       $scope.autenticar = function(){
    	 

           LoginFactory.autenticar($scope);
       };

        }]);

}());
