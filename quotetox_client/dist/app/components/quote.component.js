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
// Models
// import {Quote} from '../models/quote.model';
// Services
// This Service handles all Quote HTTP calls to our server
var quote_service_1 = require('../services/quote.service');
var QuoteComponent = (function () {
    function QuoteComponent(quote_service) {
        this.quote_service = quote_service;
    }
    QuoteComponent.prototype.ngOnInit = function () {
        this.today = new Date();
        this.last_drink = new Date(2016, 0, 17);
        this.alcohol_free_days = Math.floor(((this.today - this.last_drink) / (864 * Math.pow(10, 5))));
        console.log("this.today: ", this.today);
        this.quote = this.quote_service.get_quotes_dict();
    };
    QuoteComponent.prototype.get_quotes = function () {
        this.quote = this.quote_service.get_quotes_dict();
    };
    QuoteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'quote-component',
            templateUrl: 'quote.component.html',
            styleUrls: ['quote.component.css'],
            providers: [quote_service_1.QuoteService]
        }), 
        __metadata('design:paramtypes', [quote_service_1.QuoteService])
    ], QuoteComponent);
    return QuoteComponent;
}());
exports.QuoteComponent = QuoteComponent;
