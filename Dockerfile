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

ENV QUIT_QUERY="http://localhost:5000"
ENV QUIT_UPDATE="http://localhost:5000"
ENV PRESELECTED_GRAPH_IRI="http://example.org/"
ENV PRESELECTED_RESOURCE_IRI="http://example.org/Resource"

EXPOSE 8080
ENTRYPOINT [ "/bin/sh" ]
CMD [ "docker-entrypoint.sh" ]
