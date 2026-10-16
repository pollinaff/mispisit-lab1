FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY server.js ./
COPY db ./db
COPY actions ./actions
COPY routes ./routes
COPY views ./views

EXPOSE 8080

CMD ["npm", "start"]
