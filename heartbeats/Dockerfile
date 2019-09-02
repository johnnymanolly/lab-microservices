FROM node:10-alpine

WORKDIR /heartbeats

COPY package*.json ./
RUN npm i

COPY . .

CMD ["node","app.js"]