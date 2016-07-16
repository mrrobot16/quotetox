"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular 2 objects
var core_1 = require('@angular/core');
var detox_component_1 = require('../detox/detox.component');
var quote_component_1 = require('../quote/quote.component');
// Services
// This Service handles all Quote HTTP calls to our server
var HomeScreenComponent = (function () {
    function HomeScreenComponent() {
    }
    HomeScreenComponent.prototype.ngOnInit = function () {
    };
    HomeScreenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home-screen-component',
            template: "\n  <div class=\"container\">\n    <div class=\"home-screen\">\n    <detox-component></detox-component>\n    <quote-component></quote-component>\n    </div>\n  </div>\n  ",
            styleUrls: ['home-screen.css'],
            providers: [],
            directives: [quote_component_1.QuoteComponent, detox_component_1.DetoxComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeScreenComponent);
    return HomeScreenComponent;
}());
exports.HomeScreenComponent = HomeScreenComponent;
