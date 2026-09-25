FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

EXPOSE 3000

# Source is bind-mounted by docker-compose; the compose command runs `npm run dev`
CMD ["npm", "run", "dev", "--", "--host"]
