import React, { Component } from 'react';

class TimeControls extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="timeControls">
        <div className="start">1:54</div>
        <div className="scroll">
          <input type="range" />
        </div>
        <div className="end">3:47</div>
      </div>
    );
  }
}

export default TimeControls;
