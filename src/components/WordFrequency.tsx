import { useState } from "react";

import { Button, TextField } from "@mui/material";

const example = `Lover's Complaint by William Shakespeare
FROM off a hill whose concave womb reworded
A plaintful story from a sistering vale,
My spirits to attend this double voice accorded,
And down I laid to list the sad-tuned tale;
Ere long espied a fickle maid full pale,
Tearing of papers, breaking rings a-twain,
Storming her world with sorrow's wind and rain.

Upon her head a platted hive of straw,
Which fortified her visage from the sun,
Whereon the thought might think sometime it saw
The carcass of beauty spent and done:
Time had not scythed all that youth begun,
Nor youth all quit; but, spite of heaven's fell rage,
Some beauty peep'd through lattice of sear'd age.`;

const WordFrequency = () => {
  const [text, setText] = useState(example);
  const [data, setData] = useState({});

  const generate = () => {
    var words = text.replace(/[.,///"?!()]/g, "").split(/\s/);
    var freqMap = {} as any;
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

    setData({
      word_count: words.length,
      frequencies: freqList,
    });
  };

  return (
    <div className="center nice-border">
      <p>
        Add text and press submit to get a word count and frequency dictionary!
      </p>

      <TextField
        variant="outlined"
        label="Add text"
        multiline
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ width: { sx: "90%", md: "50%" } }}
      />
      <br></br>
      <Button onClick={() => generate()} variant="outlined">
        Submit
      </Button>
      {data ? (
        <pre className="nice-border">{JSON.stringify(data, null, 4)}</pre>
      ) : null}
    </div>
  );
};

export default WordFrequency;
