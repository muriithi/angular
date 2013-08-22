var myApp = angular.module('myApp',[]);
 
myApp.controller('HelloController', ['$scope', function($scope) {
$scope.greeting ={text : 'hello!'};
}]);