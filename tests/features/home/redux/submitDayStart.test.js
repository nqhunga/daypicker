import {
  HOME_SUBMIT_DAY_START,
} from '../../../../src/features/home/redux/constants';

import {
  submitDayStart,
  reducer,
} from '../../../../src/features/home/redux/submitDayStart';

describe('home/redux/submitDayStart', () => {
  it('returns correct action by submitDayStart', () => {
    expect(submitDayStart()).toHaveProperty('type', HOME_SUBMIT_DAY_START);
  });

  it('handles action type HOME_SUBMIT_DAY_START correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_SUBMIT_DAY_START }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
