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
var DetoxService = (function () {
    function DetoxService(http) {
        this.http = http;
    }
    DetoxService.prototype.get_detox = function () {
        return this.get();
    };
    DetoxService.prototype.post_detox = function () {
    };
    DetoxService.prototype.update_detox = function () {
    };
    DetoxService.prototype.delete_detox = function () {
    };
    DetoxService.prototype.get = function () {
        this.detoxes = this.http.get('detoxes')
            .toPromise()
            .then(function (res) {
            return res.json();
        });
        return this.detoxes;
    };
    DetoxService.prototype.post = function () {
    };
    DetoxService.prototype.put = function () {
    };
    DetoxService.prototype.delete = function () {
    };
    DetoxService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DetoxService);
    return DetoxService;
}());
exports.DetoxService = DetoxService;
