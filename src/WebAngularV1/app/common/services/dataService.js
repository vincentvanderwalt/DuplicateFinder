var app;
(function (app) {
    var common;
    (function (common) {
        var services;
        (function (services) {
            var DataService = (function () {
                function DataService($http, $q) {
                    this.httpService = $http;
                    this.qService = $q;
                    delete this.httpService.defaults.headers.common['X-Requested-With'];
                }
                DataService.prototype.get = function (resource, entity) {
                    var self = this;
                    var deferred = self.qService.defer();
                    self.httpService.post(resource, entity)
                        .then(function (result) {
                        deferred.resolve(result.data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                DataService.$inject = ['$http', '$q'];
                return DataService;
            })();
            services.DataService = DataService;
            angular.module('vinnyApp')
                .service('dataService', DataService);
        })(services = common.services || (common.services = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
