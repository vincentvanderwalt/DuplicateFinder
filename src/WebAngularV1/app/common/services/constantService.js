var app;
(function (app) {
    var common;
    (function (common) {
        var services;
        (function (services) {
            var ConstantService = (function () {
                function ConstantService() {
                    this.apiUrI = 'http://localhost:2000/api/';
                }
                return ConstantService;
            })();
            services.ConstantService = ConstantService;
            angular.module('vinnyApp')
                .service('constantService', ConstantService);
        })(services = common.services || (common.services = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
