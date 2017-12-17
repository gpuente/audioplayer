import _ from 'lodash';

const onPlaySong = (diff, state) => {
  const status = _.get(diff, 'after.player.status');
  if (status !== 'playing') return;

  const { workers, index } = state.audio;
  workers[index].play();
};

const onPauseSong = (diff, state) => {
  const status = _.get(diff, 'after.player.status');
  if (status !== 'paused') return;

  const { workers, index } = state.audio;
  workers[index].pause();
};

const onChangeSong = (diff, state) => {
  const songI = _.get(diff, 'after.playlist.index');
  if (!songI) return;

  const { workers, index } = state.audio;
  const { tracks } = state.playlist;
  const { status } = state.player;

  workers[index].src = tracks[songI].url;
  if (status === 'playing') workers[index].play();
};

export default (dispatch, diff, newState, prevState) => {
  onPlaySong(diff, newState);
  onPauseSong(diff, newState);
  onChangeSong(diff, newState);
};
