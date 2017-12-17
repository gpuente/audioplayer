import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
          <div className="songName">{ this.props.songName }</div>
          <div className="artist">{ this.props.artist }</div>
        </div>
        <div className="more cbtn">
          <i className="fa fa-ellipsis-v" aria-hidden="true" />
        </div>
      </div>
    );
  }
}


SongInfo.propTypes = {
  artist: PropTypes.string,
  songName: PropTypes.string,
};

SongInfo.defaultProps = {
  artist: 'none',
  songName: 'none',
};


function mapStateToProps(state, ownProps) {
  if (!state.playlist.currentSong) return ownProps;

  return {
    artist: state.playlist.currentSong.artist,
    songName: state.playlist.currentSong.song,
  };
}

export default connect(mapStateToProps)(SongInfo);
