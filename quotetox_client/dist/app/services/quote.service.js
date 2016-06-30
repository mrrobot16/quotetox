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
var quotes_dict_service_1 = require('./quotes-dict.service');
var QuoteService = (function () {
    function QuoteService(http, quote_dict) {
        this.http = http;
        this.quote_dict = quote_dict;
    }
    QuoteService.prototype.get_quotes_dict = function () {
        this.quotes = this.quote_dict.get_quotes();
        this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)].quote;
        return this.quote;
    };
    QuoteService.prototype.get_quote = function () {
    };
    QuoteService.prototype.postQuote = function () {
    };
    QuoteService.prototype.updateQuote = function () {
    };
    QuoteService.prototype.deleteQuote = function () {
    };
    QuoteService.prototype.get = function () {
    };
    QuoteService.prototype.post = function () {
    };
    QuoteService.prototype.put = function () {
    };
    QuoteService.prototype.delete = function () {
    };
    QuoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, quotes_dict_service_1.QuoteDictService])
    ], QuoteService);
    return QuoteService;
}());
exports.QuoteService = QuoteService;
