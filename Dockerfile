FROM node:alpine:latest
WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
RUN apk update
RUN apk add chromium
# CMD ["npm", "run", "build", "&&", "npm", "run", "start" ]