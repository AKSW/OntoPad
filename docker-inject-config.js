/**
* The script is used in preparation to statically serve the application in /dist
*
* Injects front-end configuration properties in dist/index.html after building. This is used for Docker Images where the configuration file is provided only after the Vue app is compiled.
* Adapted from <https://medium.com/@marius.dras/dockerize-a-vue-app-with-a-configuration-file-a77cd98c879b>
*/
const fs = require('fs');
const htmlFile = './dist/index.html';
const configFile = './src/config/config.json';

if (!fs.existsSync(htmlFile)) {
  console.warn(`The project is not compiled (${htmlFile} is missing for post-compilation config injection)`);
  return;
}

const html = fs.readFileSync(htmlFile).toString();
let config;
if ('QUIT_UPDATE' in process.env && 'QUIT_QUERY' in process.env){
  console.log('No local config file found construct config from environment variables.');
  config = {
    "query_url": process.env.QUIT_QUERY,
    "update_url": process.env.QUIT_UPDATE,
    "graph_iri": process.env.PRESELECTED_GRAPH_IRI,
    "resource_iri": process.env.PRESELECTED_RESOURCE_IRI
  }
} else if (fs.existsSync(configFile)) {
  console.log(`Local config file found use it: ${configFile}`);
  config = require(configFile);
} else {
  console.warn(`Configuration is missing for post-compilation config injection. Provide ${configFile} or QUIT_UPDATE and QUIT_QUERY environment variables.`);
}
const configVariablePattern = /<script>const APP_CONFIG = null;<\/script>/g;
const newConfigVariable = '<script>const APP_CONFIG = ' + JSON.stringify(config) + ';</script>';
const injectedHtml = html.replace(configVariablePattern, newConfigVariable);

fs.writeFileSync(htmlFile, injectedHtml);
