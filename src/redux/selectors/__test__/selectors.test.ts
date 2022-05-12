import {currencySelectors} from "../index";

describe('App Selector', () => {
  test('call appSelector ', () => {
    const state = { app: {} };
    const app = currencySelectors(state);
    expect(app).toEqual(state.app);
  });
});
