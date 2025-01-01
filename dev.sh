#!/bin/zsh

function ibkr-dev() {
    case $1 in
        "start")
            docker compose up
            ;;
        "build")
            docker compose up --build
            ;;
        "daemon")
            docker compose up -d
            ;;
        "stop")
            docker compose down
            ;;
        "logs")
            docker compose logs -f
            ;;
        *)
            echo "Usage: ./dev.sh [start|build|daemon|stop|logs]"
            ;;
    esac
}

ibkr-dev $1 