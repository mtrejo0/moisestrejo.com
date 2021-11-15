import React from "react";

class RandomNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 10,
      size: 1,
      values: null,
    };

    this.generate = this.generate.bind(this);
  }

  generate() {
    let values = [];

    for (let i = 0; i < this.state.size; i++) {
      values.push(
        Math.floor(Math.random() * (this.state.max - this.state.min)) +
          this.state.min
      );
    }

    this.setState({ values: values });
  }

  render() {
    return (
      <div className="center nice-border">
        <label>min</label>
        <input
          type="number"
          value={this.state.min}
          onChange={(e) => {
            this.setState({ min: e.target.value });
          }}
        ></input>
        <label>max</label>
        <input
          type="number"
          value={this.state.max}
          onChange={(e) => {
            this.setState({ max: e.target.value });
          }}
        ></input>
        <label>size</label>
        <input
          type="number"
          value={this.state.size}
          onChange={(e) => {
            this.setState({ size: e.target.value });
          }}
        ></input>
        <br></br>
        <button onClick={this.generate}>Generate</button>
        {this.state.values ? (
          <div className="nice-border">[{this.state.values.join(", ")}]</div>
        ) : null}
      </div>
    );
  }
}

export default RandomNumbers;
