import selectors from '../index';

describe('App Selector', () => {
  test('call appSelector ', () => {
    const state = { app: {} };
    const app = selectors.appSelector(state);
    expect(app).toEqual(state.app);
  });
});
