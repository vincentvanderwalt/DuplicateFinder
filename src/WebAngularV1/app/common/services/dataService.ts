module app.common.services {

    interface IDataService {
        get(resource: string, entity: app.domain.IHomeModel): ng.IPromise<app.domain.IHomeModel>;
    }

    export class DataService implements IDataService {

        private httpService: ng.IHttpService;
        private qService: ng.IQService;
        private httpProvider: ng.IHttpProvider;
        

        static $inject = ['$http', '$q'];
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
            
            delete this.httpService.defaults.headers.common['X-Requested-With'];
            
        }

        get(resource: string, entity: app.domain.IHomeModel): ng.IPromise<app.domain.IHomeModel> {
            var self = this;
            var deferred = self.qService.defer();
            
            self.httpService.post(resource, entity)
                .then(function (result) {
                    deferred.resolve(result.data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

    }

    angular.module('vinnyApp')
        .service('dataService', DataService);
} 
