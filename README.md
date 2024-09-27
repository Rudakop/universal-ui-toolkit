# Universal UI Toolkit
A cross-platform UI toolkit that demonstrates the use of both React and Flutter for creating versatile and accessible user interfaces. This project consists of two main parts:
1. **React Web Application**: A web-based UI toolkit using React, designed to provide reusable components and API integration.
2. **Flutter Desktop Application**: A desktop application using Flutter, showcasing a similar UI toolkit for Windows, macOS, and Linux.


## Project Overview

The Universal UI Toolkit is aimed at providing a consistent and accessible user experience across both web and desktop platforms using two separate frameworks: React for the web and Flutter for desktop. The project demonstrates how to share design principles and components across multiple platforms using a unified codebase approach.

## Features

- **React**
  - Reusable UI components following best practices for accessibility.
  - API integration using custom hooks.
  - Responsive design with theming support.

- **Flutter Desktop app**
  - Reusable Flutter widgets with desktop-specific optimizations.
  - Similar UI structure to the React web app for consistency.
  - Platform-specific features and styling.

## Getting Started

### Prerequisites

- **For React**
  - Node.js (v14 or higher)
  - npm or yarn package manager

- **For Flutter Desktop app**
  - Flutter SDK (v3.0 or higher) with desktop support enabled
  - Visual Studio with "Desktop development with C++" workload (Windows)
  - Xcode (macOS)

### Installation

1. **Clone the Repository:**
   `bash`
   `git clone https://github.com/Rudakop/universal-ui-toolkit`
   `cd universal-ui-toolkit`
2. **Install Dependencies for React**
`cd react-web`
`npm install`
 or
`yarn install`

3. **Install Dependencies for Flutter Desktop Application:**
`cd ../flutter-desktop`
`flutter pub get`

### Running the React Web Application

## Navigate to the react-web directory:
`cd react-web`

## Start the development server:
`npm start`
 or
`yarn start`
Open your browser and go to http://localhost:3000 to view the app.

### Running the Flutter Desktop Application
## Navigate to the flutter-desktop directory:
`cd flutter-desktop`

## Run the application on your desired platform:

## Windows:
`flutter run -d windows`
## macOS:
`flutter run -d macos`
## Linux:
`flutter run -d linux`

### Project Structure

1. **Root Directory (`universal-ui-toolkit/`):**
   - Contains general project files like the main `README.md` and `.gitignore` files.

2. **React Web Application (`react-web/`):**
   - **public/**: Contains static assets like images, favicon, and the main `index.html`.
   - **src/**: Contains the source code for the React application.
     - **components/**: Reusable UI components.
     - **hooks/**: Custom React hooks.
     - **styles/**: Stylesheets or CSS-in-JS configurations.
     - **utils/**: Utility functions.
     - **App.tsx**: The main component of the React application.
     - **index.tsx**: Entry point of the React app.
   - **package.json**: NPM dependencies and scripts for the React application.
   - **tsconfig.json**: TypeScript configuration.
   - **README.md**: Documentation specific to the React project.

3. **Flutter Desktop Application (`flutter-desktop/`):**
   - **lib/**: Contains the main source code for the Flutter application.
     - **widgets/**: Reusable Flutter widgets.
     - **main.dart**: Entry point of the Flutter application.
   - **pubspec.yaml**: Flutter configuration file for dependencies and assets.

4. **General Files:**
   - **.gitignore**: Specifies files and directories to ignore in the repository.
   - **README.md**: Main documentation for the whole project.
   - **LICENSE**: License information for the repository.

### Markdown Tips for Project Structure
### Contributing
Contributions are welcome! Please follow these steps to contribute to the project:

### License
This project is licensed under the MIT License - see the LICENSE file for details.
