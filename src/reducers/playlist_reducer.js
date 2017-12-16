import { FETCH_PLAYLIST } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PLAYLIST:
      return {
        index: 0,
        tracks: [...action.payload],
      };
    default:
      return state;
  }
};
