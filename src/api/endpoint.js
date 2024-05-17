import { SparqlEndpoint } from '@/api/sparql.js'
import { QuitStore } from '@/api/quitstore.js'

const EndpointFactory = {
  create (configuration) {
    if (configuration.quit_url) {
      return new QuitStore(configuration.quit_url)
    } else {
      return new SparqlEndpoint(configuration.query_url, configuration.update_url)
    }
  }
}

export { EndpointFactory }
