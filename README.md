<p align="center">
    <a href="https://opensource.org/licenses/Apache-2.0">
        <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"/> 
    </a>
</p>

# IBKR-Dashboard
IBKR-Dashboard is a React-based frontend client for stock analysis, designed to manage and visualize interactions with the IBKR API. It leverages iBeam in Docker for seamless integration and connectivity.

This application focuses on building dynamic tables and dashboards, providing analytical tools inspired by the strategies and criteria detailed in **Trade Like a Stock Market Wizard: How to Achieve Super Performance in Stocks in Any Market** by **Mark Minervini**.

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
- iBeam API runs on port 5000

## Important Notes

- Keep your .env file secure and never commit it to version control
- The frontend container uses volume mounting for hot-reloading during development

## Troubleshooting

If you encounter issues:
1. Ensure Docker Desktop is running
2. Verify your .env credentials
3. Try rebuilding with `./dev.sh build`
4. Check for ports

## Additional Resources

For detailed instructions on how to add TLS certificates and enable HTTPS in your IBeam setup, please refer to the following documentation:

- [Inputs and Outputs](https://github.com/Voyz/ibeam/wiki/Inputs-And-Outputs): Learn about the required input files and how to configure them for your IBeam deployment.
- [TLS Certificates and HTTPS](https://github.com/Voyz/ibeam/wiki/TLS-Certificates-and-HTTPS): Understand how to provide custom TLS certificates and configure HTTPS for secure communication.

These resources will help you ensure that your IBeam setup is secure and properly configured.

## To-do

### Styling
1. Font styles: IBM Plex Mono for data tables. Noto Sans JP by default.

### Features
2. More API integrations and a dedicated page for each
3. Start putting analysis into the application

### Analysis
#### Trend Identification
- Focus on stocks in Stage 2 of the market cycle (advancing phase).
- Confirm an uptrend by analyzing moving averages.
  - A stock is in an uptrend if it is trading above its 200-day moving average.
  - The 50-day moving average should also be above the 200-day moving average, indicating strength.

#### Fundamental Growth
- Look for stocks with consistent growth in earnings per share (EPS) and sales (20–50% growth).
- Identify improving profit margins, a sign of operational efficiency.
- Avoid companies with erratic earnings or negative trends.

#### Catalysts
- Look for external factors such as:
  - New products or innovations.
  - Major contracts or acquisitions.
  - Regulatory approvals (e.g., FDA approvals in pharmaceuticals).
- Monitor industry trends and companies likely to lead them.

#### Entry Points
- Enter after tight consolidations or base formations (e.g., cup-and-handle pattern).
- Volume should decrease during consolidation and increase significantly during a breakout.
- Buy as close as possible to the pivot point (breakout level).

#### Exit Points
- Stop-loss: Exit if the stock drops 7–8% below the purchase price.
- Profit-taking: Exit when the stock shows signs of exhaustion, e.g., parabolic price rises or declines in volume during advances.
- Use a trailing stop to lock in profits while staying in the trend.