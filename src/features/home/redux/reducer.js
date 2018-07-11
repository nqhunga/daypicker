import initialState from './initialState';
import { reducer as selectMonthReducer } from './selectMonth';
import { reducer as getCurrentDateReducer } from './getCurrentDate';
import { reducer as processDateReducer } from './processDate';
import { reducer as selectDateReducer } from './selectDate';
import { reducer as toggleStartInputReducer } from './toggleStartInput';
import { reducer as toggleEndInputReducer } from './toggleEndInput';
import { reducer as submitDayStartReducer } from './submitDayStart';
import { reducer as submitDayEndReducer } from './submitDayEnd';
import { reducer as changeEventNameReducer } from './changeEventName';

const reducers = [
  selectMonthReducer,
  getCurrentDateReducer,
  processDateReducer,
  selectDateReducer,
  toggleStartInputReducer,
  toggleEndInputReducer,
  submitDayStartReducer,
  submitDayEndReducer,
  changeEventNameReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
