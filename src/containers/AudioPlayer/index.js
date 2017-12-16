import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <div className="layer">
        <div className="playerContainer">
          <Navbar />
          <CoverFlow />
          <SongInfo />
          <TimeControls />
          <Controls />
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchPlaylist })(AudioPlayer);
