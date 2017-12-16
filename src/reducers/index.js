import { combineReducers } from 'redux';

import playerReducer from './player_reducer';
import playlistReducer from './playlist_reducer';

const rootReducer = combineReducers({
  player: playerReducer,
  playlist: playlistReducer,
});

export default rootReducer;
