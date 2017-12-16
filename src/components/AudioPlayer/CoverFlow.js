import React, { Component } from 'react';

class CoverFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="coverflow">
        <img src="http://images.coveralia.com/audio/t/Toto-Past_To_Present_1977_1990-Frontal.jpg" alt="" />
      </div>
    );
  }
}

export default CoverFlow;
