import _ from 'lodash';
import Song from '../lib/Audio';

const onPlaySong = (diff) => {
  const status = _.get(diff, 'after.player.status');
  if (status !== 'playing') return;

  Song.play();
};

const onPauseSong = (diff) => {
  const status = _.get(diff, 'after.player.status');
  if (status !== 'paused') return;

  Song.pause();
};

const onChangeSong = (diff, state) => {
  const songI = _.get(diff, 'after.playlist.index');
  if (typeof songI !== 'number') return;

  const { currentSong } = state.playlist;
  const { status } = state.player;

  Song.pause();
  Song.src = currentSong.url;
  Song.load();
  if (status === 'playing') Song.play();
};


const onSeekSong = (diff) => {
  const seekTo = _.get(diff, 'after.audio.seekTo');
  if (!seekTo || seekTo < 0) return;

  Song.pause();
  Song.currentTime = seekTo;
  Song.play();
};


export default (dispatch, diff, newState, prevState) => {
  onPlaySong(diff, newState);
  onPauseSong(diff, newState);
  onChangeSong(diff, newState);
  onSeekSong(diff);
};
