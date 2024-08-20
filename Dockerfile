FROM node:alpine
WORKDIR /app
RUN npm install
RUN npm run build
CMD [ "npm", "run", "start" ]