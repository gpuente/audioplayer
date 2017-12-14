import React, { Component } from 'react';

class PlayBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="play-bar">

        <button className="play-bar-btn">
          <i className="fas fa-random" />
        </button>

        <button className="play-bar-btn">
          <i className="fas fa-backward" />
        </button>

        <button className="play-bar-btn play-btn">
          <i className="fas fa-play" />
        </button>

        <button className="play-bar-btn">
          <i className="fas fa-forward" />
        </button>

        <button className="play-bar-btn">
          <i className="fas fa-redo-alt" />
        </button>

      </div>
    );
  }
}

export default PlayBar;
