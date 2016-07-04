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
var detox_model_1 = require('../models/detox.model');
// Services
// This Service handles all Quote HTTP calls to our server
var quote_service_1 = require('../services/quote.service');
var QuoteComponent = (function () {
    function QuoteComponent(quote_service) {
        this.quote_service = quote_service;
    }
    QuoteComponent.prototype.ngOnInit = function () {
        this.detox = new detox_model_1.Detox();
        this.detox.today = new Date();
        this.detox.drug_name = "Alcohol";
        this.detox.last_time = new Date(2016, 0, 17);
        this.detox.tox_free_days = Math.floor(((this.detox.today - this.detox.last_time) / (864 * Math.pow(10, 5))));
        this.get_quotes();
    };
    QuoteComponent.prototype.get_quotes = function () {
        var _this = this;
        var quote = this.quote_service.get_quotes();
        return quote.then(function (quotes) {
            _this.quote = quotes[Math.floor(Math.random() * quotes.length)].quote;
        });
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
