import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="nav">
        <div className="menu">
          <i className="fa fa-angle-down" aria-hidden="true" />
        </div>
        <div className="title">
          <div className="origin">Playing from your library</div>
          <div className="artist">Toto</div>
        </div>
        <div className="playlist">
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default Navbar;
