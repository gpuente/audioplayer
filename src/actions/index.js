import mockPlaylist from '../mocks/playlist';

export const FETCH_PLAYLIST = 'FETCH_PLAYLIST';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const CHANGE_SONG = 'CHANGE_SONG';
export const UPDATE_TIME_AUDIO = 'UPDATE_TIME_AUDIO';
export const UPDATE_CURRENT_TIME_AUDIO = 'UPDATE_CURRENT_TIME_AUDIO';
export const SEEK_AUDIO = 'SEEK_AUDIO';
export const CHANGE_REPEAT_STATE = 'CHANGE_REPEAT_STATE';
export const CHANGE_RANDOM = 'CHANGE_RANDOM';


function getPlaylist() {
  return {
    type: FETCH_PLAYLIST,
    payload: mockPlaylist,
  };
}

export function fetchPlaylist() {
  return (dispatch) => {
    dispatch(getPlaylist());
  };
}

export function play() {
  return {
    type: PLAY,
    payload: 'playing',
  };
}

export function pause() {
  return {
    type: PAUSE,
    payload: 'paused',
  };
}

export function nextSong() {
  return {
    type: nextSong,
  };
}

export function changeSongIndex(newIndex) {
  return {
    type: CHANGE_SONG,
    payload: newIndex,
  };
}

export function updateTimeAudio(start, end) {
  return {
    type: UPDATE_TIME_AUDIO,
    payload: {
      currentTime: start,
      endTime: end,
    },
  };
}

export function updateCurrentTimeAudio(currentTime) {
  return {
    type: UPDATE_CURRENT_TIME_AUDIO,
    payload: currentTime,
  };
}

export function changeSong(newIndex) {
  return (dispatch) => {
    dispatch(changeSongIndex(newIndex));
    dispatch(updateTimeAudio(0, 0));
  };
}

export function seekAudio(sec) {
  return {
    type: SEEK_AUDIO,
    payload: sec,
  };
}

export function changeRepeatState(nextState) {
  return {
    type: CHANGE_REPEAT_STATE,
    payload: nextState,
  };
}

export function changeRandom(random) {
  return {
    type: CHANGE_RANDOM,
    payload: random,
  };
}
