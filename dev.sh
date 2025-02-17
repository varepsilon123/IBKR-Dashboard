#!/bin/zsh

function ibkr-dev() {
    # Default to development mode if not specified
    local mode=${2:-"development"}
    
    # Export NODE_ENV so Docker Compose can access it
    export NODE_ENV=$mode
    
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
        "rebuild-frontend")
            BUILD_MODE=$mode docker compose up --build --no-deps frontend
            ;;
        *)
            echo "Usage: ./dev.sh [start|build|daemon|stop|logs|rebuild-frontend] [development|production]"
            echo "Example: ./dev.sh rebuild-frontend production"
            ;;
    esac
}

ibkr-dev $1 $2 