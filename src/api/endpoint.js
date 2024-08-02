import { SparqlEndpoint } from '@/api/sparql.js'
import { QuitStore } from '@/api/quitstore.js'
import { InMemory } from '@/api/inmemory.js'

const EndpointFactory = {
  async create (configuration) {
    const stores = []
    for (let i = 0; i < configuration.sources.length; i++) {
      let store
      let source = configuration.sources[i]
      if (source.data) {
        store = new InMemory(source.data)
      } else if (source.quit_url) {
        store = new QuitStore(source.quit_url)
      } else if (source.query_url) {
        store = new SparqlEndpoint(source.query_url, source.update_url)
      }
      await store.initialize()
      stores.push(store)
    }
    console.log("initialized")
    return stores
  }
}

export { EndpointFactory }
