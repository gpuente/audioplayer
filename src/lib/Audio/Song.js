import { updateTimeAudio, updateCurrentTimeAudio } from '../../actions';
import { dispatch } from '../../store';

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

  audio.onpause = () => console.log('onpause');
  // audio.ontimeupdate = () => console.log(audio.currentTime);

  return audio;
}
