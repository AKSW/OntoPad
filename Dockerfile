FROM node:12

# Check https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g http-server

EXPOSE 8080
CMD [ "http-server", "dist" ]
