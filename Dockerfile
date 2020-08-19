FROM node:12-alpine

# Check https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html

RUN npm install -g http-server
RUN apk add git

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm prune --production

EXPOSE 8080
CMD [ "http-server", "dist" ]
