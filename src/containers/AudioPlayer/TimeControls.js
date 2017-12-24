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
      seeking: false,
      seekTo: 0,
    };
  }

  componentDidUpdate() {
    const { currentTime } = this.props;
    const { updateTimeInput, seeking, seekTo } = this.state;

    if (seeking) {
      if (currentTime !== seekTo) return;

      this.setState({ seeking: false }); //TODO: check this line
    }

    if (updateTimeInput) this.timeRange.value = currentTime;
  }

  handleMouseDown = () => {
    this.setState({
      updateTimeInput: false,
      seeking: true,
    });
  }

  handleMouseUp = (e) => {
    const sec = parseInt(e.target.value, 10);

    this.props.seekAudio(sec);
    this.setState({
      updateTimeInput: true,
      seekTo: sec,
    });
  }

  handleSeek = (e) => {
    console.log(e.target.value); //TODO: delete this line
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
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
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
