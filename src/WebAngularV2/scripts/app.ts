/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, bootstrap, View} from "angular2/angular2";

ng.Component({
    selector: 'vinny-app'
})

ng.View({
        template: "<h1>Hello{{name}}</h1>"
})  
     
class AppComponent {
    name: string;
    constructor() {
        this.name = "Vinny";
    }
}

bootstrap(AppComponent);