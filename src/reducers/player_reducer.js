import { PLAY, PAUSE } from '../actions';

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

    default:
      return state;
  }
};
