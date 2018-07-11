import {
  HOME_GET_CURRENT_DATE,
} from '../../../../src/features/home/redux/constants';

import {
  getCurrentDate,
  reducer,
} from '../../../../src/features/home/redux/getCurrentDate';

describe('home/redux/getCurrentDate', () => {
  it('returns correct action by getCurrentDate', () => {
    expect(getCurrentDate()).toHaveProperty('type', HOME_GET_CURRENT_DATE);
  });

  it('handles action type HOME_GET_CURRENT_DATE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_GET_CURRENT_DATE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
