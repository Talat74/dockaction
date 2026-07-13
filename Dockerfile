FROM node:20

WORKDIR /dockaction

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node" , "./app.js"]
