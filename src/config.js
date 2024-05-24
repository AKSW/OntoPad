/*
This file is just responsible to export the config that is set in the index.html
As the linter does not know about APP_CONFIG the line has to be ignored.
To use the config do `import config from '@/config'`.

See also <https://medium.com/@marius.dras/dockerize-a-vue-app-with-a-configuration-file-a77cd98c879b>
*/
let APP_CONFIG = {
  "endpoint": {
    "quit_url":"http://localhost:5000"
  },
  "graph_iri": "http://example.org/",
  "resource_iri": "http://example.org/Resource"
}

// eslint-disable-next-line
export default APP_CONFIG
