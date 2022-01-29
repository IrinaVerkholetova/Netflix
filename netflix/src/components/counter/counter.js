import React from 'react';

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
    console.log('Constructor - 1');
  }

  componentDidMount() {
    console.log('Did mount - 3');
  }

  componentDidUpdate() {
    console.log('Did update - 5 ');
  }

  componentWillUnmount() {
    console.log('Will unmount - last');
  }

  handlerPluse = () => {
    console.log('plus', this);
    this.setState((prev) => ({
      counter: prev.counter + Math.floor(Math.random() * 101),
    }));
  };

  handlerMinus = () => {
    console.log('minus', this);
    this.setState((prev) => ({
      counter: prev.counter - Math.floor(Math.random() * 101),
    }));
  };

  render() {
    console.log('Render - 2 - 4 - 6');
    return (
      <>
        {this.test}
        <div>{this.state.counter}</div>
        <button onClick={this.handlerPluse}>Click +</button>
        <button onClick={this.handlerMinus}>Click -</button>
      </>
    );
  }
}
