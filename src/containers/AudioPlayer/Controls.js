import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getValidIndex } from '../../utils/helpers';
import {
  play,
  pause,
  changeSong,
  changeRepeatState,
  changeRandom,
} from '../../actions';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  playSong = () => {
    this.props.play();
  }

  pauseSong = () => {
    this.props.pause();
  }

  playOrPause = () => {
    const { status } = this.props;

    if (status === 'playing') return this.pauseSong();
    if (status === 'paused') return this.playSong();
  }

  nextSong = () => {
    const {
      currentSongIndex: index,
      playlistLength: length,
    } = this.props;

    const i = getValidIndex(index, 1, length);
    this.props.changeSong(i);
  }

  prevSong = () => {
    const {
      currentSongIndex: index,
      playlistLength: length,
    } = this.props;

    const i = getValidIndex(index, -1, length);
    this.props.changeSong(i);
  }

  repeat = () => {
    const { repeat } = this.props;
    let nextState = 'none';

    if (repeat === 'none') nextState = 'playlist';
    if (repeat === 'playlist') nextState = 'song';

    this.props.changeRepeatState(nextState);
  }

  random = () => {
    const { random } = this.props;
    this.props.changeRandom(!random);
  }

  render() {
    const { status, repeat, random } = this.props;
    const icon = status === 'paused' ? 'fa fa-play' : 'fa fa-pause';
    const repeatClass = `control cbtn repeat ${repeat !== 'none' ? 'cbtnActive' : ''}`;
    const repeatOneClass = `repeatOne ${repeat !== 'song' ? 'hideElement' : ''}`;
    const randomClass = `control cbtn random ${random ? 'cbtnActive' : ''}`;

    return (
      <div className="controls">
        <div className={randomClass} onClick={this.random}>
          <i className="fa fa-random" aria-hidden="true" />
        </div>
        <div className="control cbtn previous" onClick={this.prevSong}>
          <i className="fa fa-step-backward" aria-hidden="true" />
        </div>
        <div className="control cbtn play" onClick={this.playOrPause}>
          <i className={icon} aria-hidden="true" />
        </div>
        <div className="control cbtn next" onClick={this.nextSong}>
          <i className="fa fa-step-forward" aria-hidden="true" />
        </div>
        <div className={repeatClass} onClick={this.repeat}>
          <i className="fa fa-repeat" aria-hidden="true" />
          <div className={repeatOneClass}>1</div>
        </div>
      </div>
    );
  }
}


Controls.propTypes = {
  play: PropTypes.func,
  pause: PropTypes.func,
  changeSong: PropTypes.func,
  changeRandom: PropTypes.func,
  changeRepeatState: PropTypes.func,
  audio: PropTypes.object,
  status: PropTypes.string,
  repeat: PropTypes.string,
  random: PropTypes.bool,
  currentSongIndex: PropTypes.number,
  playlistLength: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    audio: state.audio,
    status: state.player.status,
    repeat: state.player.repeat,
    random: state.player.random,
    currentSongIndex: state.playlist.index,
    playlistLength: state.playlist.length,
  };
}

const actionCreators = {
  play,
  pause,
  changeSong,
  changeRandom,
  changeRepeatState,
};

export default connect(mapStateToProps, actionCreators)(Controls);
