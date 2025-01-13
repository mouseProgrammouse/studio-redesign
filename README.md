# Tanyusha Atelier’s official website

This repository contains the source code for Tanyusha Atelier’s official website.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version **22.3.0** or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/mouseProgrammouse/studio-redesign.git
   ```
2. Install dependencies:
   ```
   cd studio-redesign
   npm install
   ```

## Scripts

### Development

Start the server in development mode with automatic reloads using nodemon.
`npm run start-dev`

Watch for changes in the client-side code.
`npm run dev:client`

Watch for changes in the server-side code.
`npm run dev:server`

### Build

Build the entire project (minify CSS and bundle the code using Webpack).
`npm run build`

Build the client-side code.
`npm run build:client`

Build the server-side code.
`npm run build:server`

## Technologies Used

React(Frontend) + Express.js(Backend) + i18next(Internationalization)

### Code Quality

ESLint, Prettier, Husky and lint-staged Integration
