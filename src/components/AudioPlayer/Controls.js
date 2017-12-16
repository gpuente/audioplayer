import React, { Component } from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="controls">
        <div className="control random">
          <i className="fa fa-random" aria-hidden="true" />
        </div>
        <div className="control previous">
          <i className="fa fa-step-backward" aria-hidden="true" />
        </div>
        <div className="control play">
          <i className="fa fa-play" aria-hidden="true" />
        </div>
        <div className="control next">
          <i className="fa fa-step-forward" aria-hidden="true" />
        </div>
        <div className="control repeat">
          <i className="fa fa-repeat" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default Controls;
