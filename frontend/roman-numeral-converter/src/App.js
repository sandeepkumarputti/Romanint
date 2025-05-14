import React, { useState } from 'react';
import { Provider, defaultTheme, TextField, Button, Heading, Text, Switch } from '@adobe/react-spectrum';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(null);
  const [error, setError] = useState('');
  const [conversionCount, setConversionCount] = useState(0); // Metric: track conversions
  const [colorScheme, setColorScheme] = useState('light'); // Light/Dark mode toggle

  /**
   * Handles input change and updates the state.
   * @param {string} value - The new input value.
   */
  const handleChange = (value) => {
    setInput(value);
  };

  /**
   * Submits the input to the backend API for conversion.
   * Handles success and error responses.
   */
  const handleSubmit = async () => {
    console.log(`User submitted input: ${input}`); // Log user input
    try {
      const startTime = performance.now(); // Trace: start timing
      const response = await fetch(`http://localhost:8080/romannumeral?query=${input}`);
      const data = await response.json();
      const endTime = performance.now(); // Trace: end timing
      console.log(`API response time: ${endTime - startTime}ms`); // Log API response time

      setOutput(data.output);
      setError('');
      setConversionCount((prev) => prev + 1); // Increment conversion count
    } catch (err) {
      console.error('Error during conversion:', err); // Log error
      setError('Invalid input or server error.');
      setOutput(null);
    }
  };

  /**
   * Toggles the color scheme between light and dark modes.
   */
  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Provider theme={defaultTheme} colorScheme={colorScheme}>
      <div className={`container ${colorScheme}`}>
        <div className={`card ${colorScheme}`}>
          <Heading level={1} marginBottom="size-200" UNSAFE_className="title">
            Roman Numeral Converter
          </Heading>
          <TextField
            label="Enter an integer (1–3999)"
            type="number"
            minValue={1}
            maxValue={3999}
            value={input}
            onChange={handleChange}
            width="100%"
            marginBottom="size-200"
            UNSAFE_className="input"
          />
          <Button variant="cta" onPress={handleSubmit} width="100%" UNSAFE_className="btn">
            Convert
          </Button>
          {output && (
            <Text marginTop="size-400" UNSAFE_style={{ color: colorScheme === 'dark' ? 'green' : 'green' }} UNSAFE_className="result">
              Roman Numeral: {output}
            </Text>
          )}
          {output && (
            <Text marginTop="size-200" UNSAFE_className="conversion-count" UNSAFE_style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}>
              Conversions: {conversionCount}
            </Text>
          )}
          {error && (
            <Text marginTop="size-200" UNSAFE_style={{ color: colorScheme === 'dark' ? 'lightcoral' : 'red' }} UNSAFE_className="error">
              {error}
            </Text>
          )}
          <Switch isSelected={colorScheme === 'dark'} onChange={toggleColorScheme} marginTop="size-400">
            Toggle Dark Mode
          </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default App;