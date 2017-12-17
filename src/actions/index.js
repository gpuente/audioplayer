import mockPlaylist from '../mocks/playlist';

export const FETCH_PLAYLIST = 'FETCH_PLAYLIST';
export const LOAD_WORKER = 'LOAD_WORKER';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const CHANGE_SONG = 'CHANGE_SONG';

function loadWorker(index, url) {
  return {
    type: LOAD_WORKER,
    payload: { index, url },
  };
}

function getPlaylist() {
  return {
    type: FETCH_PLAYLIST,
    payload: mockPlaylist,
  };
}

export function fetchPlaylist() {
  return (dispatch) => {
    dispatch(getPlaylist());
    dispatch(loadWorker(0, mockPlaylist[0].url));
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

export function changeSong(newIndex) {
  return {
    type: CHANGE_SONG,
    payload: newIndex,
  };
}
