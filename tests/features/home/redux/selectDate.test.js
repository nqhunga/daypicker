import {
  HOME_SELECT_DATE,
} from '../../../../src/features/home/redux/constants';

import {
  selectDate,
  reducer,
} from '../../../../src/features/home/redux/selectDate';

describe('home/redux/selectDate', () => {
  it('returns correct action by selectDate', () => {
    expect(selectDate()).toHaveProperty('type', HOME_SELECT_DATE);
  });

  it('handles action type HOME_SELECT_DATE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_SELECT_DATE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
