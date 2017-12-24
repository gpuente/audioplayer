import React, { Component } from 'react';
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

  handleSeek = (e) => {
    this.setState({ updateTimeInput: false });

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
            onInput={this.handleSeek}
          />
        </div>
        <div className="end">{ end }</div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    currentTime: state.audio.currentTime,
    endTime: state.audio.endTime,
  };
}

export default connect(mapStateToProps, { seekAudio })(TimeControls);
