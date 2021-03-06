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
var http_1 = require('@angular/http');
// Components
var home_screen_component_1 = require('./components/home-screen/home-screen.component');
// Services
var quote_service_1 = require('./services/quote.service');
var QuotetoxClientAppComponent = (function () {
    function QuotetoxClientAppComponent() {
    }
    QuotetoxClientAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'quotetox-client',
            template: '<home-screen-component></home-screen-component>',
            directives: [home_screen_component_1.HomeScreenComponent],
            providers: [quote_service_1.QuoteService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], QuotetoxClientAppComponent);
    return QuotetoxClientAppComponent;
}());
exports.QuotetoxClientAppComponent = QuotetoxClientAppComponent;
