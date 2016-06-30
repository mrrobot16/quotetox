import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { QuotetoxClientAppComponent } from '../app/quotetox-client.component';

beforeEachProviders(() => [QuotetoxClientAppComponent]);

describe('App: QuotetoxClient', () => {
  it('should create the app',
      inject([QuotetoxClientAppComponent], (app: QuotetoxClientAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'quotetox-client works!\'',
      inject([QuotetoxClientAppComponent], (app: QuotetoxClientAppComponent) => {
    expect(app.title).toEqual('quotetox-client works!');
  }));
});
