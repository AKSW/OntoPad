# OntoPad

OntoPad is a simple editor for RDF data, e.g. Resources, Classes, and Properties. On top of the simple RDF layer it provides ways to visually interact with SHACL shapes.

OntoPad is designed to run in you web browser (with JavaScript support) and to be connected to a SPARQL Endpoint. To be able to share the data you create it works best with the [Quit Store](https://github.com/AKSW/QuitStore) (actually currently only supported SPARQL Endpoint cf. [#18](https://github.com/AKSW/OntoPad/issues/18)).

To build the code and get it running in your development environment you need a recent version of `node` (node.js) and `npm` (https://nodejs.org/).
You can also get it running in a docker environment with our docker image [`aksw/ontopad`](https://hub.docker.com/r/aksw/ontopad).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

Now the OntoPad should be locally available at `http://localhost:8080/` or some other port, if port `8080` is used already.

### Compiles and minifies for production
```
npm run build
```

This will set `APP_CONFIG` to `null`. To set `APP_CONFIG` now the configuration can be injected. If `APP_CONFIG` remains `null` OntoPad will fail to load, this might change in the future ([#19](https://github.com/AKSW/OntoPad/issues/19)).

#### Inject configuration

You can adjust `src/config/config.json` or set the following environment variables

- `QUIT_URL` the URL of a running [Quit Store](https://github.com/AKSW/QuitStore)
- `SPARQL_QUERY` the URL of a SPARQL Query Endpoint (currently only Quit Store cf. [#18](https://github.com/AKSW/OntoPad/issues/18))
- `SPARQL_UPDATE` the URL of a SPARQL Update Endpoint (currently only Quit Store cf. [#18](https://github.com/AKSW/OntoPad/issues/18))
- `PRESELECTED_GRAPH_IRI` the IRI of the RDF Graph to select per default
- `PRESELECTED_RESOURCE_IRI` the IRI of the RDF Resource to select per default

Now run the following to inject the configuration:

```
node docker-inject-config.js
```

### Compile and build for serving locally
```
NODE_ENV=dev npm run build
```

(`NODE_ENV` just must not be `production`.)
This includes the default configuration from `src/config/config.json` to set `APP_CONFIG`.
This configuration expects the SPARQL-Endpoint to be a [Quit Store](https://github.com/AKSW/QuitStore) running at `http://localhost:5000`.

The result can be served with a local HTTP server

```
cd dist
python3 -m http.server 8080
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
