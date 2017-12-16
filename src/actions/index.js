import mockPlaylist from '../mocks/playlist';

export const FETCH_PLAYLIST = 'FETCH_PLAYLIST';

export function fetchPlaylist() {
  return {
    type: FETCH_PLAYLIST,
    payload: mockPlaylist,
  };
}
