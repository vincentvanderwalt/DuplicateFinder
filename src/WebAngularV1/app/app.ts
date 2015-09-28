module app {
    class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "templates/home/default.html",
                    controller:"HomeCtrl as vm"
                })
                .otherwise({ redirectTo: '/' });
        }
    }
    Config.$inject = ['$routeProvider'];
    var mainApp = angular.module('vinnyApp', ['ngRoute']);
    mainApp.config(Config);

}