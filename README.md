# System Monitor NJS

A simple Node.js application that displays real-time system information in the terminal.

## Features

- Displays user and host information.
- Provides details about the operating system, architecture, and kernel version.
- Shows system uptime in a human-readable format.
- Displays memory usage (used, total, and percentage).
- Provides CPU information, including model, core count, and load averages.
- Displays the current shell, terminal, Node.js version, and NPM version.
- Updates system information every second.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [NPM](https://www.npmjs.com/) (comes with Node.js)
- [Nodemon](https://www.npmjs.com/package/nodemon) (installed as a dependency)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. The terminal will display real-time system information, refreshing every second.

## File Structure

- `index.js`: Main application file.
- `package.json`: Project metadata and dependencies.
- `.gitignore`: Specifies files and directories to ignore in version control.
- `.vscode/settings.json`: VS Code-specific settings.

## License

This project is licensed under the ISC License.
