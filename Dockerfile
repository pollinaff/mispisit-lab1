FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY server.js ./
COPY actions ./actions
COPY routes ./routes
COPY views ./views
COPY data ./data

EXPOSE 8080

CMD ["npm", "start"]
