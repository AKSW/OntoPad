import { parse } from 'yaml'

/*
This file is just responsible to export the config that is set in the index.html
As the linter does not know about APP_CONFIG the line has to be ignored.
To use the config do `import config from '@/config'`.

See also <https://medium.com/@marius.dras/dockerize-a-vue-app-with-a-configuration-file-a77cd98c879b>
*/
// let APP_CONFIG = {
//   "endpoint": {
//     "quit_url":"http://localhost:6000"
//   },
//   "graph_iri": "http://example.org/",
//   "resource_iri": "http://example.org/Resource"
// }

// let APP_CONFIG = {
//   "endpoint": {
//     "query_url":"http://localhost:5000/sparql",
//     "update_url":"http://localhost:5000/sparql"
//   },
//   "graph_iri": "http://example.org/",
//   "resource_iri": "http://example.org/Resource"
// }

let APP_CONFIG = parse(document.querySelector('#ontopad_configuration').text)

// eslint-disable-next-line
export default APP_CONFIG
