import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid, Select, MenuItem, FormControl, InputLabel, Chip } from '@mui/material';

const popularTickers = [
  'AAPL', 'MSFT', 'AMZN', 'GOOGL', 'FB', 'TSLA', 'BRK.B', 'JPM', 'JNJ', 'V',
  'PG', 'UNH', 'HD', 'BAC', 'DIS', 'ADBE', 'CMCSA', 'XOM', 'NFLX', 'NVDA',
  'CRM', 'VZ', 'INTC', 'PFE', 'CSCO', 'ABT', 'KO', 'PEP', 'WMT', 'MRK',
  'T', 'CVX', 'MA', 'MCD', 'NKE', 'WFC', 'PYPL', 'TMO', 'ABBV', 'ACN',
  'COST', 'MDT', 'LLY', 'NEE', 'ORCL', 'PM', 'UNP', 'BMY', 'HON', 'AMGN'
];

const PortfolioOptimizer = () => {
  const [selectedTickers, setSelectedTickers] = useState([]);
  const [customTicker, setCustomTicker] = useState('');
  const [optimizedPortfolio, setOptimizedPortfolio] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTickerChange = (event) => {
    setSelectedTickers(event.target.value);
    setMenuOpen(false);
  };

  const handleAddCustomTicker = () => {
    if (customTicker && !selectedTickers.includes(customTicker)) {
      setSelectedTickers([...selectedTickers, customTicker.toUpperCase()]);
      setCustomTicker('');
    }
  };

  const handleDeleteTicker = (tickerToDelete) => () => {
    setSelectedTickers((tickers) => tickers.filter((ticker) => ticker !== tickerToDelete));
  };

  const optimizePortfolio = async () => {
    if (selectedTickers.length < 2) {
      setError('Please select at least 2 tickers');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/get-tickers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tickers: selectedTickers }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch ticker data');
      }

      const data = await response.json();

      setOptimizedPortfolio({
        weights: data.weights,go to route api/get-tickers to get the data for the selected tickers
        stats: [
          data.expectedReturn,
          data.volatility,
          data.sharpeRatio
        ]
      });
    } catch (error) {
      console.error('Error optimizing portfolio:', error);
      setError('Failed to optimize portfolio. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Portfolio Optimizer
      </Typography>
      <FormControl fullWidth style={{ marginBottom: 20 }}>
        <InputLabel>Select Tickers</InputLabel>
        <Select
          multiple
          value={selectedTickers}
          onChange={handleTickerChange}
          open={menuOpen}
          onOpen={() => setMenuOpen(true)}
          onClose={() => setMenuOpen(false)}
          renderValue={(selected) => (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} onDelete={handleDeleteTicker(value)} />
              ))}
            </div>
          )}
        >
          {popularTickers.map((ticker) => (
            <MenuItem key={ticker} value={ticker}>
              {ticker}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Add Custom Ticker"
            value={customTicker}
            onChange={(e) => setCustomTicker(e.target.value.toUpperCase())}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleAddCustomTicker}
            disabled={!customTicker}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={optimizePortfolio}
        disabled={selectedTickers.length < 2 || isLoading}
      >
        {isLoading ? 'Optimizing...' : 'Optimize Portfolio'}
      </Button>
      {error && (
        <Typography color="error" style={{ marginTop: 10 }}>
          {error}
        </Typography>
      )}
      {optimizedPortfolio && (
        <div style={{ marginTop: 20 }}>
          <Typography variant="h6">Optimized Portfolio</Typography>
          <Typography>
            Weights: {optimizedPortfolio.weights.map((w, i) => `${selectedTickers[i]}: ${(w * 100).toFixed(2)}%`).join(', ')}
          </Typography>
          <Typography>
            Expected Annual Return: {(optimizedPortfolio.stats[0] * 100).toFixed(2)}%
          </Typography>
          <Typography>
            Annual Volatility: {(optimizedPortfolio.stats[1] * 100).toFixed(2)}%
          </Typography>
          <Typography>
            Sharpe Ratio: {optimizedPortfolio.stats[2].toFixed(2)}
          </Typography>
        </div>
      )}
    </Paper>
  );
};

export default PortfolioOptimizer;
