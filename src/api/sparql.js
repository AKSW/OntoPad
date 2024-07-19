import axios from 'axios'
import { QueryEngine } from '@comunica/query-sparql'

class SparqlEndpoint {
  constructor (queryEndpoint, updateEndpoint) {
    this.queryEngine = new QueryEngine()
    this.HTTPQuery = axios.create({ baseURL: queryEndpoint })
    this.sources = [{ type: 'sparql', value: queryEndpoint }]
    this.type = 'query_only'
    this.capability = {
      query: true,
      update: false,
      quit: false
    }
    if (updateEndpoint) {
      this.HTTPUpdate = axios.create({ baseURL: updateEndpoint })
      this.destination = [{ type: 'sparql', value: updateEndpoint }]
      this.type = 'query_update'
      this.capability.update = true
    }
  }

  query (queryString, defaultGraph = undefined, data = false) {
    console.warn("The query method is deprecated in favour of the query_comunica_bindings, query_comunica_quads, and query_comunica methods for now.");
    const params = new URLSearchParams()
    if (defaultGraph === 'quads') {
    } else if (defaultGraph !== undefined) {
      defaultGraph.forEach((element) => {
        params.append('default-graph-uri', element)
      })
    }
    let acceptType = 'application/sparql-results+json'
    if (data) {
      acceptType = 'application/n-triples'
    }
    return this.HTTPQuery.post('', queryString, {
      params: params,
      headers: {
        'Content-Type': 'application/sparql-query',
        Accept: acceptType
      }
    })
  }

  query_comunica_bindings (queryString) {
    console.log(`Send bindings query (${queryString}) via comunica to ${this.sources}`);
    return this.queryEngine.queryBindings(queryString, {
      sources: this.sources
    })
  }

  query_comunica_quads (queryString) {
    console.log(`Send quads query (${queryString}) via comunica to ${this.sources}`);
    return this.queryEngine.queryQuads(queryString, {
      sources: this.sources
    })
  }

  query_comunica (queryString) {
    console.log(`Send any query (${queryString}) via comunica to ${this.sources}`);
    return this.queryEngine.query(queryString, {
      sources: this.sources
    })
  }


  update (updateString) {
    return this.HTTPUpdate.post('', updateString, {
      headers: {
        'Content-Type': 'application/sparql-update',
        Accept: 'application/sparql-results+json'
      }
    })
  }

  update_comunica (updateString) {
    console.log(`Send update query (${updateString}) via comunica to ${this.sources}`);
    return this.queryEngine.queryVoid(updateString, {
      sources: this.sources
    })
  }

  get queryUrl () {
    return this.HTTPQuery.defaults.baseURL
  }

  get updateUrl () {
    return this.HTTPUpdate.defaults.baseURL
  }
}

export { SparqlEndpoint }
