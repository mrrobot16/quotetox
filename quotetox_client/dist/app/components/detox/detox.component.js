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
var DetoxComponent = (function () {
    function DetoxComponent() {
    }
    DetoxComponent.prototype.ngOnInit = function () {
        this.detox = new detox_model_1.Detox();
        this.today = new Date();
        this.detox.drug_name = "Alcohol";
        this.detox.last_time = new Date(2016, 0, 17);
        this.detox.tox_free = Math.floor(((this.today - this.detox.last_time) / (864 * Math.pow(10, 5))));
    };
    DetoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detox-component',
            template: "\n    <p>Days Alcohol Free: {{detox.tox_free}}</p>\n  ",
            styleUrls: ['detox.css'],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], DetoxComponent);
    return DetoxComponent;
}());
exports.DetoxComponent = DetoxComponent;
