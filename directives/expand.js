angular.module('app', [])
.controller('expandController', function($scope) {
    $scope.title = 'Click me to expand';
    $scope.text = 'Hi there folks, I am the content'
        + ' that was hidden but is now shown.';
}).directive('expand', function(){
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope: {title : '=expandTitle'},
        template: '<div>' +
            '<div class="title" ng-click="toggle()">{{title}}</div>' +
            '<div class="body" ng-show="showMe" ng-transclude></div>' +
            '</div>',
        link : function(scope, element, attrs){
            scope.showMe = false;
            scope.toggle = function toggle () {
                scope.showMe = !scope.showMe;
            }
        }       
    }
});
