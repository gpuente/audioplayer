import { combineReducers } from 'redux';

import playerReducer from './player_reducer';
import playlistReducer from './playlist_reducer';
import audioReducer from './audio_reducer';

const rootReducer = combineReducers({
  audio: audioReducer,
  player: playerReducer,
  playlist: playlistReducer,
});

export default rootReducer;
