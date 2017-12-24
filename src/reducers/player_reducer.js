import { PLAY, PAUSE, CHANGE_REPEAT_STATE } from '../actions';

const defaultState = {
  status: 'paused',
  random: false,
  repeat: 'none',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        status: 'playing',
      };

    case PAUSE:
      return {
        ...state,
        status: 'paused',
      };

    case CHANGE_REPEAT_STATE:
      return {
        ...state,
        repeat: action.payload,
      };

    default:
      return state;
  }
};
