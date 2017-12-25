import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import { changeSongIndex } from '../../actions';

const settings = {
  className: 'center',
  arrows: false,
  centerMode: true,
  infinite: true,
  centerPadding: '30px',
  slidesToShow: 1,
  focusOnSelect: true,
};

class CoverSlick extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    this.slider.slickGoTo(nextProps.index);
  }

  handleChange = (newIndex) => {
    this.props.changeSongIndex(newIndex);
  }

  renderCovers = () => {
    const { tracks } = this.props;

    return _.map(tracks, track => (
      <div key={track.id}>
        <img src={track.cover} alt="" />
      </div>
    ));
  }

  render() {
    const { index } = this.props;

    return (
      <div className="coverslick">
        <Slider
          {...settings}
          afterChange={this.handleChange}
          initialSlide={index}
          ref={(ref) => { this.slider = ref; }}
        >
          { this.renderCovers() }
        </Slider>
      </div>
    );
  }
}


CoverSlick.propTypes = {
  index: PropTypes.number,
  tracks: PropTypes.array,
  changeSongIndex: PropTypes.func,
};


function mapStateToProps(state) {
  return {
    index: state.playlist.index,
    tracks: state.playlist.tracks,
  };
}

export default connect(mapStateToProps, { changeSongIndex })(CoverSlick);
