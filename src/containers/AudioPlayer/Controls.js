import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getValidIndex } from '../../utils/helpers';
import { play, pause, changeSong } from '../../actions';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  playSong = () => {
    const { index } = this.props.audio;

    if (index < 0) {
      // TODO: handle no song loaded
      return;
    }

    this.props.play();
  }

  pauseSong = () => {
    const { index } = this.props.audio;

    if (index < 0) {
      // TODO: handle no song loaded
      return;
    }

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

  render() {
    const { status } = this.props;
    const icon = status === 'paused' ? 'fa fa-play' : 'fa fa-pause';

    return (
      <div className="controls">
        <div className="control cbtn random">
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
        <div className="control cbtn repeat">
          <i className="fa fa-repeat" aria-hidden="true" />
        </div>
      </div>
    );
  }
}


Controls.propTypes = {
  play: PropTypes.func,
  pause: PropTypes.func,
  changeSong: PropTypes.func,
  audio: PropTypes.object,
  status: PropTypes.string,
  currentSongIndex: PropTypes.number,
  playlistLength: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    audio: state.audio,
    status: state.player.status,
    currentSongIndex: state.playlist.index,
    playlistLength: state.playlist.length,
  };
}

export default connect(mapStateToProps, { play, pause, changeSong })(Controls);
