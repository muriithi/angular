var appModule = angular.module('app', []);

appModule.directive('hello', function() {
    return{
        restrict : 'E',
        template : "<div>Hi! There</div>",
        replace : true        
    };
});