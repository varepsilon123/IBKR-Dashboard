# IBKR-Dashboard
A React-based frontend for managing and visualizing interactions with the IBKR API, leveraging iBeam in Docker for seamless integration and connectivity.

## Docker Setup

### Prerequisites
- Docker and Docker Compose installed
- IBKR Trader Workstation (TWS) or IB Gateway running locally

### Running with Docker
1. Build and start the containers:

bash
docker-compose up --build

<!-- 2. Access the dashboard at `http://localhost:3000` -->

### Development
- Frontend runs on port 3000
- iBeam API runs on port 5000

# React readme
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
