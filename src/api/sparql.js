import axios from 'axios'

class SparqlEndpoint {
  constructor (queryEndpoint, updateEndpoint) {
    this.HTTPQuery = axios.create({ baseURL: queryEndpoint })
    this.type = 'query_only'
    this.capability = {
      query: true,
      update: false,
      quit: false
    }
    if (updateEndpoint) {
      this.HTTPUpdate = axios.create({ baseURL: updateEndpoint })
      this.type = 'query_update'
      this.capability.update = true
    }
  }

  query (queryString, defaultGraph = undefined, data = false) {
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

  update (updateString) {
    return this.HTTPUpdate.post('', updateString, {
      headers: {
        'Content-Type': 'application/sparql-update',
        Accept: 'application/sparql-results+json'
      }
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
