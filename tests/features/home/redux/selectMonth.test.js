import {
  HOME_SELECT_MONTH,
} from '../../../../src/features/home/redux/constants';

import {
  selectMonth,
  reducer,
} from '../../../../src/features/home/redux/selectMonth';

describe('home/redux/selectMonth', () => {
  it('returns correct action by selectMonth', () => {
    expect(selectMonth()).toHaveProperty('type', HOME_SELECT_MONTH);
  });

  it('handles action type HOME_SELECT_MONTH correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_SELECT_MONTH }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
