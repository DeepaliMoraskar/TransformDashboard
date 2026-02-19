# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# TransformerDashboard

A React + Vite application that displays transformer data with search, filtering, and interactive charts. Toggle visibility of transformers and visualize voltage readings over time.

---

## Table of Contents

- [Prerequisites](#prerequisites)  
- [Libraries](#libraries-used)  
- [Setup Steps](#setup-steps)  
- [Running the Application](#running-the-application)  
- [Building for Production](#building-for-production)  
- [Linting](#linting)  
- [Project Structure](#project-structure)  
- [Usage](#usage)  
- [Troubleshooting](#troubleshooting)  
- [License](#license)  

---

## Prerequisites

- **Node.js** v14 or higher installed: [Download here](https://nodejs.org/)  
- npm (comes with Node.js) or yarn installed:  
  - [Install Yarn](https://yarnpkg.com/getting-started/install) (optional)

## Libraries Used

This project leverages several key libraries and tools:

- **React**  
  A popular JavaScript library for building user interfaces with components and hooks.

- **Vite**  
  A fast frontend build tool and development server that supports modern JavaScript features and offers lightning-fast hot module replacement (HMR).

- **Chart.js**  
  A flexible and simple JavaScript charting library used to render interactive line charts for transformer voltage readings.

- **react-chartjs-2**  
  React wrapper for Chart.js that provides React components to easily integrate Chart.js charts within React applications.

- **@tanstack/react-query**  
  Powerful data fetching and state management library for React, used to fetch and cache transformer data efficiently.

- **Zod**  
  A TypeScript-first schema validation library used for validating and parsing data structures (optional, depending on your use in hooks).

- **ESLint**  
  A pluggable linting utility for JavaScript and TypeScript to enforce consistent code style and catch potential issues.

- **TypeScript**  
  A strongly-typed superset of JavaScript that adds static typing, enhancing code quality and developer experience.

---

Each of these libraries contributes to building a robust, maintainable, and performant React application for monitoring transformer data visually.


---

## Setup Steps

Follow these steps to get the project up and running on your local machine:

### 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/yourusername/transformeddashboard.git
cd transformeddashboard

### 2. Install Dependencies

Using npm:

```bash
npm install

## 🐳 Docker Build & Run

To build and run the app in a Docker container:

### Build the Docker image:

```bash
docker build -t transformerdashboard .

docker run -p 8080:80 transformerdashboard

Then open your browser at:
👉 http://localhost:8080


