import React, { Component } from 'react';
import { connect } from 'react-redux';

import { play, pause } from '../../actions';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  playSong = () => {
    const { index, workers } = this.props.audio;

    if (index < 0) {
      // TODO: handle no song loaded
      return;
    }

    this.props.play();
    workers[index].play();
  }

  pauseSong = () => {
    const { index, workers } = this.props.audio;

    if (index < 0) {
      // TODO: handle no song loaded
      return;
    }

    this.props.pause();
    workers[index].pause();
  }

  playOrPause = () => {
    const { status } = this.props;

    if (status === 'playing') return this.pauseSong();
    if (status === 'paused') return this.playSong();
  }

  render() {
    const { status } = this.props;
    const icon = status === 'paused' ? 'fa fa-play' : 'fa fa-pause';

    return (
      <div className="controls">
        <div className="control cbtn random">
          <i className="fa fa-random" aria-hidden="true" />
        </div>
        <div className="control cbtn previous">
          <i className="fa fa-step-backward" aria-hidden="true" />
        </div>
        <div className="control cbtn play" onClick={this.playOrPause}>
          <i className={icon} aria-hidden="true" />
        </div>
        <div className="control cbtn next">
          <i className="fa fa-step-forward" aria-hidden="true" />
        </div>
        <div className="control cbtn repeat">
          <i className="fa fa-repeat" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    audio: state.audio,
    status: state.player.status,
  };
}

export default connect(mapStateToProps, { play, pause })(Controls);
