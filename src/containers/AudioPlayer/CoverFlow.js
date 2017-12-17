import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CoverFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="coverflow">
        <img src={this.props.imgSrc} alt="" />
      </div>
    );
  }
}


CoverFlow.propTypes = {
  imgSrc: PropTypes.string,
}

CoverFlow.defaultProps = {
  imgSrc: 'http://images.coveralia.com/audio/t/Toto-Past_To_Present_1977_1990-Frontal.jpg',
};


function mapStateToProps(state, ownProps) {
  if (!state.playlist.currentSong) return ownProps;

  return {
    imgSrc: state.playlist.currentSong.cover,
  };
}

export default connect(mapStateToProps)(CoverFlow);
