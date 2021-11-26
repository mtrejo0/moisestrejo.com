import React from "react";

class wordFrequency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      data: null,
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

    this.setState({ data: {
      "word_count": words.length,
      "frequencies": freqList
    } });
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
        {this.state.data ? (
          <pre className="nice-border">
            {JSON.stringify(this.state.data, null, 4)}
          </pre>
        ) : null}
      </div>
    );
  }
}

export default wordFrequency;
