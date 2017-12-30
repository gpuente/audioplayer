import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchPlaylist } from '../../actions';
import {
  requireLandscapeStyle,
  isMobileDevice,
  getOrientation,
} from '../../utils/helpers';

import Navbar from './Navbar';
import CoverFlow from './CoverFlow';
import CoverSlick from './CoverSlick';
import SongInfo from './SongInfo';
import TimeControls from './TimeControls';
import Controls from './Controls';


class AudioPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orientation: getOrientation(),
      isMobile: isMobileDevice(),
    };
  }

  componentDidMount() {
    this.props.fetchPlaylist();

    window.addEventListener('orientationchange', () => { // eslint-disable-line
      this.setState({ orientation: getOrientation() });
    });
  }

  render() {
    const { isMobile, orientation } = this.state;
    const landscapeClass = requireLandscapeStyle(isMobile, orientation) ? 'landscape' : '';

    return (
      <div className="backgroud" style={{ background: this.props.color }}>
        <Helmet>
          <meta name="theme-color" content={this.props.color} />
          <title>{`${this.props.songTitle} | ${this.props.artist}`}</title>
        </Helmet>
        <div className="layer">
          <div className={`playerContainer ${landscapeClass}`}>
            <Navbar />
            {/* <CoverFlow /> */}
            <CoverSlick />
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
    songTitle: state.playlist.currentSong.song,
    artist: state.playlist.currentSong.artist,
  };
}

export default connect(mapStateToProps, { fetchPlaylist })(AudioPlayer);
