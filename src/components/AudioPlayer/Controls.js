import React, { Component } from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="controls">
        <div className="control cbtn random">
          <i className="fa fa-random" aria-hidden="true" />
        </div>
        <div className="control cbtn previous">
          <i className="fa fa-step-backward" aria-hidden="true" />
        </div>
        <div className="control cbtn play">
          <i className="fa fa-play" aria-hidden="true" />
        </div>
        <div className="control cbtn next">
          <i className="fa fa-step-forward" aria-hidden="true" />
        </div>
        <div className="control cbtn repeat">
          <i className="fa fa-repeat" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default Controls;
