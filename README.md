# Roman Numeral Converter

This project is a Roman Numeral Converter application that allows users to convert integers (1–3999) into Roman numerals. It consists of a backend server built with Node.js and Express, and a frontend built with React.

## Features
- Convert integers (1–3999) to Roman numerals.
- Light and dark mode toggle for better user experience.
- Tracks the number of conversions performed.
- Responsive and modern UI using Adobe React Spectrum.

## Tech Stack
- **Frontend**: React, Adobe React Spectrum
- **Backend**: Node.js, Express
- **Styling**: CSS
- **Testing**: Jest, React Testing Library

## Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)

## How to Clone the Project
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Romanint
   ```

## How to Run the Project Using Docker

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Romanint
   ```
3. Build the Docker containers:
   ```bash
   docker-compose build
   ```
4. Start the Docker containers:
   ```bash
   docker-compose up
   ```
   - The backend server will be available at `http://localhost:8080`.
   - The frontend application will be available at `http://localhost:3000`.

5. To stop the containers, press `Ctrl+C` in the terminal where `docker-compose up` is running, or run:
   ```bash
   docker-compose down
   ```

## Project Structure
```
Romanint/
├── backend/
│   ├── package.json
│   ├── Roman.js
│   ├── server.js
├── frontend/
│   ├── roman-numeral-converter/
│   │   ├── package.json
│   │   ├── public/
│   │   │   ├── index.html
│   │   │   ├── manifest.json
│   │   ├── src/
│   │   │   ├── App.css
│   │   │   ├── App.js
│   │   │   ├── index.js
│   │   │   ├── reportWebVitals.js
│   │   │   ├── setupTests.js
```

## Approach
The project is designed to provide a seamless user experience for converting integers to Roman numerals. The backend handles the conversion logic and API endpoints, while the frontend provides a user-friendly interface. The solution is modular, making it easy to maintain and extend.

## Testing
To run tests for the frontend:
1. Navigate to the frontend directory:
   ```bash
   cd frontend/roman-numeral-converter
   ```
2. Run the tests:
   ```bash
   npm test
   ```

To run tests for the backend:
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Run the tests:
   ```bash
   npm test
   ```

## Error Handling
The application includes error handling for invalid inputs, server errors, and network issues. Detailed error messages are displayed to the user to ensure clarity.

## License
This project is licensed under the MIT License.