<p align="center">
    <a href="https://opensource.org/licenses/Apache-2.0">
        <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"/> 
    </a>
</p>

# IBKR-Dashboard
A React-based frontend for managing and visualizing interactions with the IBKR API, leveraging iBeam in Docker for seamless integration and connectivity.

This project utilizes **iBeam**, a powerful tool for interacting with the IBKR Client Portal API, allowing for efficient data retrieval and management. By running iBeam within a **Docker** container, the application ensures a consistent and isolated environment, simplifying the setup process and enhancing portability. This setup allows users to easily connect to the IBKR Client Portal, facilitating a smooth experience for managing their trading activities and data visualization.

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
- `./dev.sh rebuild-frontend [mode]` - Rebuild the frontend service without affecting iBeam
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

## Additional Resources

For detailed instructions on how to add TLS certificates and enable HTTPS in your IBeam setup, please refer to the following documentation:

- [Inputs and Outputs](https://github.com/Voyz/ibeam/wiki/Inputs-And-Outputs): Learn about the required input files and how to configure them for your IBeam deployment.
- [TLS Certificates and HTTPS](https://github.com/Voyz/ibeam/wiki/TLS-Certificates-and-HTTPS): Understand how to provide custom TLS certificates and configure HTTPS for secure communication.

These resources will help you ensure that your IBeam setup is secure and properly configured.