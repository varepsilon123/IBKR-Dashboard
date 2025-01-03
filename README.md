<p align="center">
    <a href="https://opensource.org/licenses/Apache-2.0">
        <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"/> 
    </a>
</p>

# IBKR-Dashboard
A React-based frontend for managing and visualizing interactions with the IBKR API, leveraging iBeam in Docker for seamless integration and connectivity.

## Prerequisites
- Docker Desktop
- Node.js 20.12.0 (managed via .nvmrc)

## Initial Setup

1. Clone the repository and install dependencies
```bash
git clone https://github.com/varepsilon123/IBKR-Dashboard.git
cd IBKR-Dashboard
```

2. Create environment file

Use the env.list.example. DO NOT share your information.

3. Make the development script executable
```bash
chmod +x dev.sh
```

## Development Commands

The project includes a development script (`dev.sh`) with the following commands:

- `./dev.sh build [mode]` - Build/rebuild the Docker containers
  - Use when first setting up the project
  - When changing Dockerfile or docker-compose.yml
  - When updating dependencies in package.json
  - Optional [mode]: development (default) or production

- `./dev.sh start [mode]` - Start the development environment
  - Main command for daily development
  - Shows real-time logs in terminal
  - Enables hot-reloading for React code in development mode
  - Optional [mode]: development (default) or production

- `./dev.sh daemon [mode]` - Run containers in background
- `./dev.sh stop` - Stop all containers
- `./dev.sh logs` - View container logs

Examples:
```bash
# Start in development mode (default)
./dev.sh start

# Build for production
./dev.sh build production

# Run in production mode
./dev.sh start production
```

### Development
- Frontend runs on port 3000
- iBeam API runs on port 5055

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Important Notes

- Ensure TWS or IB Gateway is running before starting the containers
- Keep your env.list file secure and never commit it to version control
- The frontend container uses volume mounting for hot-reloading during development

## Troubleshooting

If you encounter issues:
1. Ensure Docker Desktop is running
2. Verify your env.list credentials
3. Try rebuilding with `./dev.sh build`