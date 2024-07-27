import axios from 'axios'
import { QueryEngine } from '@comunica/query-sparql'

class SparqlEndpoint {
  constructor (queryEndpoint, updateEndpoint) {
    this.queryEngine = new QueryEngine()
    this.sources = [{ type: 'sparql', value: queryEndpoint }]
    this.type = 'query_only'
    this.capability = {
      query: true,
      update: false,
      quit: false
    }
    if (updateEndpoint) {
      this.destination = [{ type: 'sparql', value: updateEndpoint }]
      this.type = 'query_update'
      this.capability.update = true
    }
  }

  query_bindings (queryString) {
    console.log(`Send bindings query (${queryString}) via comunica to ${this.sources}`);
    return this.queryEngine.queryBindings(queryString, {
      sources: this.sources
    })
  }

  query_quads (queryString) {
    console.log(`Send quads query (${queryString}) via comunica to ${this.sources}`);
    return this.queryEngine.queryQuads(queryString, {
      sources: this.sources
    })
  }

  query (queryString) {
    console.log(`Send any query (${queryString}) via comunica to ${this.sources}`);
    return this.queryEngine.query(queryString, {
      sources: this.sources
    })
  }

  update (updateString) {
    console.log(`Send update query (${updateString}) via comunica to ${this.sources}`);
    return this.queryEngine.queryVoid(updateString, {
      sources: this.destination
    })
  }

  get quitUrl () {
    return this.sources[0].value
  }

  get updateUrl () {
    return this.destination[0].value
  }
}

export { SparqlEndpoint }
