FROM node:10-alpine

WORKDIR /entities

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node","app.js"]