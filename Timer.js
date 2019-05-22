import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Demo from '../components/Demo';



class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Demo></Demo>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

// ReactDOM.render(
//   <Timer />,
//   document.getElementById('timer-example')
// );
export default Timer;