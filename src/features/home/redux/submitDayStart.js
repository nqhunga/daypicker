// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_SUBMIT_DAY_START,
} from './constants';

export function submitDayStart(date) {
  return {
    type: HOME_SUBMIT_DAY_START,
    data: date
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_SUBMIT_DAY_START:
      return {
        ...state,
        selectedStart: action.data,
        selectedDate: null
      };

    default:
      return state;
  }
}
