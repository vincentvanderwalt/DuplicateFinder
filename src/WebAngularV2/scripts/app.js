/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require("angular2/angular2");
ng.Component({
    selector: 'vinny-app'
});
ng.View({
    template: "<h1>Hello{{name}}</h1>"
});
var AppComponent = (function () {
    function AppComponent() {
        this.name = "Vinny";
    }
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
