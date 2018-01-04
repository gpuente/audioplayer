import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import { seekAudio } from '../../actions';

momentDurationFormatSetup(moment);

class TimeControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateTimeInput: true,
    };
  }

  componentDidUpdate() {
    const { currentTime } = this.props;
    const { updateTimeInput } = this.state;


    if (updateTimeInput) this.timeRange.value = currentTime;
  }

  startSeek = () => {
    this.setState({ updateTimeInput: false });
  }

  endSeek = (e) => {
    const sec = parseInt(e.target.value, 10);
    this.props.seekAudio(sec);
    this.setState({ updateTimeInput: true });
  }

  render() {
    const { currentTime, endTime } = this.props;
    const start = moment.duration(currentTime, 'seconds').format('mm:ss', { trim: false });
    const end = moment.duration(endTime, 'seconds').format('mm:ss', { trim: false });

    return (
      <div className="timeControls">
        <div className="start">{ start }</div>
        <div className="scroll">
          <input
            ref={(ref) => { this.timeRange = ref; }}
            type="range"
            min="0"
            max={endTime}
            defaultValue={currentTime}
            onMouseDown={this.startSeek}
            onMouseUp={this.endSeek}
            onTouchStart={this.startSeek}
            onTouchEnd={this.endSeek}
          />
        </div>
        <div className="end">{ end }</div>
      </div>
    );
  }
}


TimeControls.propTypes = {
  currentTime: PropTypes.number,
  endTime: PropTypes.number,
  seekAudio: PropTypes.func,
};


function mapStateToProps(state) {
  return {
    currentTime: state.audio.currentTime,
    endTime: state.audio.endTime,
  };
}

export default connect(mapStateToProps, { seekAudio })(TimeControls);
