import { FETCH_PLAYLIST, CHANGE_SONG } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PLAYLIST:
      return {
        index: 0,
        currentSong: { ...action.payload[0] },
        length: action.payload.length,
        tracks: [...action.payload],
      };

    case CHANGE_SONG:
      return {
        ...state,
        currentSong: { ...state.tracks[action.payload] },
        index: action.payload,
      };

    default:
      return state;
  }
};
