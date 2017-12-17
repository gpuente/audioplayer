import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchPlaylist } from '../../actions';

import Navbar from './Navbar';
import CoverFlow from './CoverFlow';
import SongInfo from './SongInfo';
import TimeControls from './TimeControls';
import Controls from './Controls';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchPlaylist();
  }

  render() {
    return (
      <div className="backgroud" style={{ background: this.props.color }}>
        <Helmet>
          <meta name="theme-color" content={this.props.color} />
        </Helmet>
        <div className="layer">
          <div className="playerContainer">
            <Navbar />
            <CoverFlow />
            <SongInfo />
            <TimeControls />
            <Controls />
          </div>
        </div>
      </div>
    );
  }
}


AudioPlayer.propTypes = {
  color: PropTypes.string,
};

AudioPlayer.defaultProps = {
  color: '#00649F',
};


function mapStateToProps(state, ownProps) {
  if (!state.playlist.currentSong) return ownProps;

  return {
    color: state.playlist.currentSong.color,
  };
}

export default connect(mapStateToProps, { fetchPlaylist })(AudioPlayer);
