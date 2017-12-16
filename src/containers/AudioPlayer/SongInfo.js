import React, { Component } from 'react';

class SongInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="songInfo">
        <div className="save cbtn">
          <i className="fa fa-check" aria-hidden="true" />
        </div>
        <div className="info">
          <div className="songName">Georgy Porgy</div>
          <div className="artist">Toto</div>
        </div>
        <div className="more cbtn">
          <i className="fa fa-ellipsis-v" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default SongInfo;
