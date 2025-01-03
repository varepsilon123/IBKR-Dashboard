#!/bin/zsh

function ibkr-dev() {
    # Default to development mode if not specified
    local mode=${2:-development}
    
    case $1 in
        "start")
            BUILD_MODE=$mode docker compose up
            ;;
        "build")
            BUILD_MODE=$mode docker compose up --build
            ;;
        "daemon")
            BUILD_MODE=$mode docker compose up -d
            ;;
        "stop")
            docker compose down
            ;;
        "logs")
            docker compose logs -f
            ;;
        *)
            echo "Usage: ./dev.sh [start|build|daemon|stop|logs] [development|production]"
            echo "Example: ./dev.sh build production"
            ;;
    esac
}

ibkr-dev $1 $2 