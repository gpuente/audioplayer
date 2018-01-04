import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="nav">
        <div className="menu cbtn">
          <i className="fa fa-angle-down" aria-hidden="true" />
        </div>
        <div className="title">
          <div className="origin">Playing from your library</div>
          <div className="artist">{ this.props.artist }</div>
        </div>
        <div className="playlist cbtn">
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
      </div>
    );
  }
}


Navbar.propTypes = {
  artist: PropTypes.string,
};

Navbar.defaultProps = {
  artist: 'none',
};

function mapStateToProps(state, ownProps) {
  if (!state.playlist.currentSong) return ownProps;

  return {
    artist: state.playlist.currentSong.artist,
  };
}

export default connect(mapStateToProps)(Navbar);
