import React from "react";

class wordFrequency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      frequencies: null,
    };

    this.generate = this.generate.bind(this);
  }

  generate() {
    var words = this.state.text.replace(/[.,///"?!()]/g, "").split(/\s/);
    var freqMap = {};
    words.forEach(function (w) {
      w = w.toLowerCase();
      if (!freqMap[w]) {
        freqMap[w] = 0;
      }
      freqMap[w] += 1;
    });

    let freqList = [];

    for (var key in freqMap) freqList.push([key, freqMap[key]]);

    freqList.sort((a, b) => (a[1] < b[1] ? 1 : -1));

    this.setState({ frequencies: freqList });
  }

  render() {
    return (
      <div className="center nice-border">
        <label>text</label>
        <textarea
          type="textarea"
          value={this.state.text}
          onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
        ></textarea>

        <br></br>
        <button onClick={this.generate}>Get Frequencies</button>
        {this.state.frequencies ? (
          <pre className="nice-border">
            {JSON.stringify(this.state.frequencies, null, 4)}
          </pre>
        ) : null}
      </div>
    );
  }
}

export default wordFrequency;
