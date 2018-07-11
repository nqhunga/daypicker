import {
  HOME_PROCESS_DATE,
} from '../../../../src/features/home/redux/constants';

import {
  processDate,
  reducer,
} from '../../../../src/features/home/redux/processDate';

describe('home/redux/processDate', () => {
  it('returns correct action by processDate', () => {
    expect(processDate()).toHaveProperty('type', HOME_PROCESS_DATE);
  });

  it('handles action type HOME_PROCESS_DATE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_PROCESS_DATE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
