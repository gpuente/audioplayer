import React, { Component } from 'react';

import PlayBar from './PlayBar';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="audio-player">
        <PlayBar />
      </div>
    );
  }
}

export default AudioPlayer;
