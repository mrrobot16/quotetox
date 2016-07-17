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
var detox_model_1 = require('../../models/detox.model');
// Services
var detox_service_1 = require('../../services/detox.service');
var DetoxComponent = (function () {
    function DetoxComponent(detox_service) {
        this.detox_service = detox_service;
    }
    DetoxComponent.prototype.ngOnInit = function () {
        this.detox = new detox_model_1.Detox();
        this.today = new Date();
        this.get_detox();
    };
    DetoxComponent.prototype.get_detox = function () {
        var _this = this;
        var detoxes = this.detox_service.get_detox();
        return detoxes.then(function (detox) {
            _this.detoxes = detox;
            var last_time = _this.detoxes[_this.detoxes.length - 1].last_time.split('-');
            _this.detox.drug_name = _this.detoxes[_this.detoxes.length - 1].drug_name;
            _this.detox.last_time = new Date(last_time[0], last_time[1] - 1, last_time[2]);
            _this.detox.tox_free = Math.floor(((_this.today - _this.detox.last_time) / (864 * Math.pow(10, 5))));
        });
    };
    DetoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detox-component',
            template: "\n    <p>Days {{detox.drug_name}} Free: {{detox.tox_free}}</p>\n  <!--  <p>Remember why you want this number to go up</p> -->\n    <!--  <button (click)=\"get_detox()\">Remember Why</button> -->\n  ",
            styleUrls: ['detox.css'],
            providers: []
        }), 
        __metadata('design:paramtypes', [detox_service_1.DetoxService])
    ], DetoxComponent);
    return DetoxComponent;
}());
exports.DetoxComponent = DetoxComponent;
