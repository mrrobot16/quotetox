"use strict";
var testing_1 = require('@angular/core/testing');
var quotetox_client_component_1 = require('../app/quotetox-client.component');
testing_1.beforeEachProviders(function () { return [quotetox_client_component_1.QuotetoxClientAppComponent]; });
testing_1.describe('App: QuotetoxClient', function () {
    testing_1.it('should create the app', testing_1.inject([quotetox_client_component_1.QuotetoxClientAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'quotetox-client works!\'', testing_1.inject([quotetox_client_component_1.QuotetoxClientAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('quotetox-client works!');
    }));
});
//# sourceMappingURL=../quotetox-client.component.spec.js.map