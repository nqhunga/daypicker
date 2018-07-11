import {
  HOME_TOGGLE_END_INPUT,
} from '../../../../src/features/home/redux/constants';

import {
  toggleEndInput,
  reducer,
} from '../../../../src/features/home/redux/toggleEndInput';

describe('home/redux/toggleEndInput', () => {
  it('returns correct action by toggleEndInput', () => {
    expect(toggleEndInput()).toHaveProperty('type', HOME_TOGGLE_END_INPUT);
  });

  it('handles action type HOME_TOGGLE_END_INPUT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_TOGGLE_END_INPUT }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
