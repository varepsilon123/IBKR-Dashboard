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

### When to Rebuild Docker

Run `./dev.sh build [mode]` when:
- Modifying `package.json` (adding/removing dependencies)
- Changing Docker-related files:
  - `docker-compose.yml`
  - `development.Dockerfile`
  - `production.Dockerfile`
- Modifying `vite.config.js`
- Changing environment variables in `env.list`

### Auto-watching Development

Run `./dev.sh start` for development with auto-watching when modifying:
- React/frontend code (`.tsx`, `.jsx`)
- Styles (`.css`)
- Assets
- Controllers
- Any other source files in `src/`

### Available Commands:
- `./dev.sh build [mode]` - Build/rebuild the Docker containers
- `./dev.sh start [mode]` - Start with auto-watching (main development command)
- `./dev.sh daemon [mode]` - Run containers in background
- `./dev.sh stop` - Stop all containers
- `./dev.sh logs` - View container logs

Optional [mode]: development (default) or production

Examples:
```bash
# Start in development mode with auto-watching
./dev.sh start

# Rebuild after dependency changes
./dev.sh build

# Build for production
./dev.sh build production
```

### Development
- Frontend runs on port 3000
- iBeam API runs on port 5055

## Important Notes

- Ensure TWS or IB Gateway is running before starting the containers
- Keep your env.list file secure and never commit it to version control
- The frontend container uses volume mounting for hot-reloading during development

## Troubleshooting

If you encounter issues:
1. Ensure Docker Desktop is running
2. Verify your env.list credentials
3. Try rebuilding with `./dev.sh build`