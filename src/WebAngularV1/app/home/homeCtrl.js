var app;
(function (app) {
    var home;
    (function (home) {
        var HomeCtrl = (function () {
            function HomeCtrl(constantService, dataService) {
                this.constantService = constantService;
                this.dataService = dataService;
            }
            HomeCtrl.prototype.getDuplicateChars = function () {
                var _this = this;
                var url = this.constantService.apiUrI + "findduplicates";
                this.dataService.get(url, this.home)
                    .then(function (result) {
                    _this.home.TextValue = result.TextValue;
                });
            };
            HomeCtrl.$inject = ['constantService', 'dataService'];
            return HomeCtrl;
        })();
        angular.module('vinnyApp')
            .controller('HomeCtrl', HomeCtrl);
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
