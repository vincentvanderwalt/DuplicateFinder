module app.home {
    interface IHomeViewModel {
        home: app.domain.IHomeModel;
        getDuplicateChars(): void;
    }

    class HomeCtrl implements IHomeViewModel {
        home: app.domain.IHomeModel;

        static $inject = ['constantService', 'dataService']

        constructor(private constantService: app.common.services.ConstantService, private dataService: app.common.services.DataService) { }

        getDuplicateChars(): void {
            var url = this.constantService.apiUrI + "findduplicates";
            this.dataService.get(url, this.home)
                .then((result: app.domain.IHomeModel) => {
                    this.home.TextValue = result.TextValue;
                });

        }
    }

    angular.module('vinnyApp')
        .controller('HomeCtrl', HomeCtrl);
}

