import { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";

const RandomNumbers = () => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(10);
  const [arraySize, setArraySize] = useState(10);

  const [values, setValues] = useState<number[]>([]);

  const generate = () => {
    let values = [];

    for (let i = 0; i < arraySize; i++) {
      const v = Math.floor(Math.random() * (high - low)) + low;
      values.push(v);
    }

    setValues(values);
  };

  return (
    <div className="center nice-border">
      <Stack spacing={3}>
        <TextField
          variant="outlined"
          label="min"
          value={low}
          type="number"
          onChange={(e) => {
            setLow(parseInt(e.target.value));
          }}
        />

        <TextField
          variant="outlined"
          label="max"
          value={high}
          type="number"
          onChange={(e) => {
            setHigh(parseInt(e.target.value));
          }}
        />

        <TextField
          variant="outlined"
          label="arraySize"
          type="number"
          value={arraySize}
          onChange={(e) => {
            setArraySize(parseInt(e.target.value));
          }}
        />

        <Button onClick={() => generate()} variant={"outlined"}>
          Generate
        </Button>
        {values ? (
          <div className="nice-border">[{values.join(", ")}]</div>
        ) : null}
      </Stack>
    </div>
  );
};

export default RandomNumbers;
