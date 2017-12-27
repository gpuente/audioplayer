import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import { changeSongIndex } from '../../actions';

class CoverSlick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: 'center',
      arrows: false,
      centerMode: true,
      infinite: false,
      centerPadding: '30px',
      slidesToShow: this.calculateSlidesToShow(),
      focusOnSelect: true,
      touchThreshold: 50,
      speed: 100,
      draggable: true,
    };
  }
  componentDidMount() {
    window.addEventListener('resize', () => { // eslint-disable-line
      this.setState({ slidesToShow: this.calculateSlidesToShow() });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.slider.slickGoTo(nextProps.index);
  }

  handleChange = (newIndex) => {
    this.props.changeSongIndex(newIndex);
  }

  calculateSlidesToShow = () => {
    const { innerWidth } = window; // eslint-disable-line

    return innerWidth > 414 ? 3 : 1;
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
          {...this.state}
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
