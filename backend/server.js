// Added inline documentation for better maintainability
const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

/**
 * Converts an integer to a Roman numeral.
 * @param {number} num - The integer to convert.
 * @returns {string} - The Roman numeral representation.
 */
function toRoman(num) {
    const val = [
      1000, 900, 500, 400,
      100, 90, 50, 40,
      10, 9, 5, 4,
      1
    ];
    const syb = [
      'M', 'CM', 'D', 'CD',
      'C', 'XC', 'L', 'XL',
      'X', 'IX', 'V', 'IV',
      'I'
    ];
    let romanNumeral = '';
    for (let i = 0; i < val.length; i++) {
      while (num >= val[i]) {
        romanNumeral += syb[i];
        num -= val[i];
      }
    }
    return romanNumeral;
}

app.use(cors());

/**
 * API endpoint to convert an integer to a Roman numeral.
 * Query parameter: query (integer between 1 and 3999)
 */
app.get('/romannumeral', (req, res) => {
  const { query } = req.query;

  // Validate input
  if (!query || isNaN(query) || query < 1 || query > 3999) {
    return res.status(400).send('Invalid input. Please provide an integer between 1 and 3999.');
  }

  const romanNumeral = toRoman(parseInt(query));
  res.json({ input: query, output: romanNumeral });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
