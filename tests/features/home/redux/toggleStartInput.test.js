import {
  HOME_TOGGLE_START_INPUT,
} from '../../../../src/features/home/redux/constants';

import {
  toggleStartInput,
  reducer,
} from '../../../../src/features/home/redux/toggleStartInput';

describe('home/redux/toggleStartInput', () => {
  it('returns correct action by toggleStartInput', () => {
    expect(toggleStartInput()).toHaveProperty('type', HOME_TOGGLE_START_INPUT);
  });

  it('handles action type HOME_TOGGLE_START_INPUT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_TOGGLE_START_INPUT }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
