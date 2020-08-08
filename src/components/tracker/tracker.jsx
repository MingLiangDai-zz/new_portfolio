import React from "react";

class Tracker extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.tick();
  }

  tick = () => {
    this.setState({ count: this.state.count + 1 });
    setTimeout(this.tick, 1000);
  };

  render() {
    return <div className="tracker">{this.state.count}</div>;
  }
}

export default Tracker;
