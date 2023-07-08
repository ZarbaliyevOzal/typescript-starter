FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g typescript ts-node

COPY . .

EXPOSE 3000

CMD ["npm", "run", "prod"]

