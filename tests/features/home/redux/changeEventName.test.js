import {
  HOME_CHANGE_EVENT_NAME,
} from '../../../../src/features/home/redux/constants';

import {
  changeEventName,
  reducer,
} from '../../../../src/features/home/redux/changeEventName';

describe('home/redux/changeEventName', () => {
  it('returns correct action by changeEventName', () => {
    expect(changeEventName()).toHaveProperty('type', HOME_CHANGE_EVENT_NAME);
  });

  it('handles action type HOME_CHANGE_EVENT_NAME correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_CHANGE_EVENT_NAME }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
