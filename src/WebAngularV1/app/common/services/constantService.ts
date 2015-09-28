module app.common.services {
    interface IConstant {
        apiUrI: string
    }

    export class ConstantService implements IConstant {
        apiUrI: string;

        constructor() {
            this.apiUrI = 'http://localhost:2000/api/';
        }
    }

    angular.module('vinnyApp')
        .service('constantService', ConstantService)
}