FROM node:10-alpine

WORKDIR /management

COPY package*.json ./
RUN npm i

COPY . .

CMD ["node","app.js"]