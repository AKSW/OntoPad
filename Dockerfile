FROM node:lts-alpine

# Check https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
