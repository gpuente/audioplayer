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

  if (state.audio.index < 0) return;
  if (typeof songI !== 'number') return;

  const { workers, index } = state.audio;
  const { currentSong } = state.playlist;
  const { status } = state.player;

  workers[index].src = currentSong.url;
  workers[index].load();
  if (status === 'playing') workers[index].play();
};

export default (dispatch, diff, newState, prevState) => {
  onPlaySong(diff, newState);
  onPauseSong(diff, newState);
  onChangeSong(diff, newState);
};
