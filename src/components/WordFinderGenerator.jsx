import { useState, useEffect } from "react";
import { Button, TextField, Grid, Paper, Typography } from "@mui/material";
import { jsPDF } from "jspdf";
import { useLocation } from "react-router-dom";

const WordFinderGenerator = () => {
  const [words, setWords] = useState("");
  const [puzzle, setPuzzle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const wordsParam = searchParams.get("words");
    if (wordsParam) {
      setWords(wordsParam);
      generatePuzzle(wordsParam);
    }
  }, [location]);

  // Add console logs for debugging
  useEffect(() => {
    console.log("Location changed:", location);
    console.log("Current words:", words);
    console.log("Current puzzle:", puzzle);
  }, [location, words, puzzle]);

  const generatePuzzle = (inputWords = words) => {
    const wordList = inputWords.split(",").map(word => word.trim().toUpperCase());
    const size = 15; // Puzzle size (15x15 grid)
    const grid = Array(size).fill().map(() => Array(size).fill(''));

    // Place words in the grid
    wordList.forEach(word => {
      let placed = false;
      while (!placed) {
        const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        const row = Math.floor(Math.random() * size);
        const col = Math.floor(Math.random() * size);

        if (canPlaceWord(grid, word, row, col, direction)) {
          placeWord(grid, word, row, col, direction);
          placed = true;
        }
      }
    });

    // Fill empty spaces with random letters
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (grid[i][j] === '') {
          grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
    }

    // Convert grid to string
    const puzzleString = grid.map(row => row.join(' ')).join('\n');
    setPuzzle(puzzleString);
  };

  const canPlaceWord = (grid, word, row, col, direction) => {
    if (direction === 'horizontal' && col + word.length > grid.length) return false;
    if (direction === 'vertical' && row + word.length > grid.length) return false;

    for (let i = 0; i < word.length; i++) {
      const currentRow = direction === 'horizontal' ? row : row + i;
      const currentCol = direction === 'horizontal' ? col + i : col;
      if (grid[currentRow][currentCol] !== '' && grid[currentRow][currentCol] !== word[i]) {
        return false;
      }
    }
    return true;
  };

  const placeWord = (grid, word, row, col, direction) => {
    for (let i = 0; i < word.length; i++) {
      const currentRow = direction === 'horizontal' ? row : row + i;
      const currentCol = direction === 'horizontal' ? col + i : col;
      grid[currentRow][currentCol] = word[i];
    }
  };

  const downloadPuzzleAsPDF = () => {
    const doc = new jsPDF();
    const lines = puzzle.split('\n');
    const fontSize = 18;
    const lineHeight = fontSize * 0.5;
    const margin = 20;
    let y = margin;

    doc.setFontSize(16);
    const title = "Vocabulary Puzzle!";
    const titleWidth = doc.getStringUnitWidth(title) * 16 / doc.internal.scaleFactor;
    const titleX = (doc.internal.pageSize.width - titleWidth) / 2;
    doc.text(title, titleX, y);
    y += lineHeight * 2;

    // Add words to find at the top
    doc.setFontSize(fontSize);
    doc.setFont("courier", "bold");
    const wordsArray = words.split(",").map(word => word.trim());
    const wordsToFind = wordsArray.join(" ");
    const textWidth = doc.getStringUnitWidth(wordsToFind) * fontSize / doc.internal.scaleFactor;
    const centerX = (doc.internal.pageSize.width - textWidth) / 2;
    
    if (textWidth > doc.internal.pageSize.width - 40) {
      // If text is too wide, wrap it
      const maxWidth = doc.internal.pageSize.width - 40;
      const lines = doc.splitTextToSize(wordsToFind, maxWidth);
      doc.text(lines, 20, y);
      y += lineHeight * (lines.length + 1);
    } else {
      // If text fits, center it
      doc.text(wordsToFind, centerX, y);
      y += lineHeight * 2;
    }

    doc.setFont("courier", "normal");
    lines.forEach(line => {
      const lineWidth = doc.getStringUnitWidth(line) * fontSize / doc.internal.scaleFactor;
      const lineX = (doc.internal.pageSize.width - lineWidth) / 2;
      doc.text(line, lineX, y);
      y += lineHeight;
    });

    doc.save("word_finder_puzzle.pdf");
  };

  return (
    <div className="center nice-border">
      <h2>Word Finder Puzzle Generator</h2>
      <p>Enter a list of words separated by commas:</p>
      <TextField
        variant="outlined"
        label="Word List"
        multiline
        rows={4}
        value={words}
        onChange={(e) => setWords(e.target.value)}
        sx={{ width: { sx: "90%", md: "50%" }, marginBottom: 2 }}
      />
      <br />
      <Button onClick={() => generatePuzzle()} variant="contained" color="primary">
        Generate Puzzle
      </Button>
      {puzzle && (
        <Grid container direction="column" alignItems="center" style={{ marginTop: 20 }}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} style={{ padding: 20, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Vocabulary Puzzle!
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {words}
              </Typography>
              <pre style={{ 
                whiteSpace: 'pre-wrap', 
                fontFamily: 'monospace', 
                display: 'inline-block', 
                textAlign: 'left',
                fontSize: '14px',
                letterSpacing: '2px',
                lineHeight: '1.5'
              }}>
                {puzzle}
              </pre>
            </Paper>
          </Grid>
          <Grid item style={{ marginTop: 10 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={downloadPuzzleAsPDF}
            >
              Download as PDF
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default WordFinderGenerator;
