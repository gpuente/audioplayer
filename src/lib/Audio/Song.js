import { getValidIndex } from '../../utils/helpers';
import store, { dispatch } from '../../store';
import {
  updateTimeAudio,
  updateCurrentTimeAudio,
  changeSong,
  pause,
} from '../../actions';

export default function song() {
  const audio = new Audio(); //eslint-disable-line

  audio.preload = 'auto';

  audio.onloadedmetadata = () => {
    const secs = audio.duration;
    const start = 0;
    const end = Math.round(secs);

    dispatch(updateTimeAudio(start, end));
  };

  audio.onplay = function updateCurrentTime() {
    const secs = audio.currentTime;
    const currentTime = Math.round(secs);

    dispatch(updateCurrentTimeAudio(currentTime));

    if (!audio.paused) {
      setTimeout(updateCurrentTime, 100);
    }
  };

  audio.onended = () => {
    const state = store.getState();
    const { length, index } = state.playlist;
    const { repeat, random } = state.player;
    const repeatFromStart = repeat === 'playlist';
    const nextIndex = getValidIndex(index, 1, length, repeatFromStart, random);

    if (repeat === 'song') {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
      return;
    }

    if (nextIndex === index && !repeat) {
      dispatch(pause());
    } else {
      dispatch(changeSong(nextIndex));
    }
  };

  audio.onpause = () => console.log('onpause');

  return audio;
}
