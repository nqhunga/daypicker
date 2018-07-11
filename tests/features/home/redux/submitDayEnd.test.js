import {
  HOME_SUBMIT_DAY_END,
} from '../../../../src/features/home/redux/constants';

import {
  submitDayEnd,
  reducer,
} from '../../../../src/features/home/redux/submitDayEnd';

describe('home/redux/submitDayEnd', () => {
  it('returns correct action by submitDayEnd', () => {
    expect(submitDayEnd()).toHaveProperty('type', HOME_SUBMIT_DAY_END);
  });

  it('handles action type HOME_SUBMIT_DAY_END correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_SUBMIT_DAY_END }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
