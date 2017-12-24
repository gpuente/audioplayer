import {
  UPDATE_TIME_AUDIO,
  UPDATE_CURRENT_TIME_AUDIO,
  SEEK_AUDIO,
} from '../actions';

const defaultState = {
  currentTime: 0,
  endTime: 0,
  seekTo: -1,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_TIME_AUDIO:
      return {
        ...state,
        ...action.payload,
      };

    case UPDATE_CURRENT_TIME_AUDIO:
      return {
        ...state,
        currentTime: action.payload,
      };

    case SEEK_AUDIO:
      return {
        ...state,
        seekTo: action.payload,
      };

    default:
      return state;
  }
};
