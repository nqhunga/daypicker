// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_TOGGLE_END_INPUT,
} from './constants';

export function toggleEndInput() {
  return {
    type: HOME_TOGGLE_END_INPUT,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_TOGGLE_END_INPUT:
      return {
        ...state,
        inputEnd: !state.inputEnd
      };

    default:
      return state;
  }
}
