var app;
(function (app) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider
                .when("/", {
                templateUrl: "templates/home/default.html",
                controller: "HomeCtrl as vm"
            })
                .otherwise({ redirectTo: '/' });
        }
        return Config;
    })();
    Config.$inject = ['$routeProvider'];
    var mainApp = angular.module('vinnyApp', ['ngRoute']);
    mainApp.config(Config);
})(app || (app = {}));
