import { QueryEngine } from '@comunica/query-sparql'

// URL matcher function that matches both origin and path
const createUrlMatcher = (sources) => {
  const authMap = new Map()

  sources.forEach(source => {
    if (source.auth && source.value) {
      try {
        const url = new URL(source.value)
        const fullUrl = url.origin + url.pathname
        authMap.set(fullUrl, source.auth)
      } catch (_e) {
        console.warn(`Invalid URL for source: ${source.value}`)
      }
    }
  })

  return (requestUrl) => {
    try {
      const url = typeof requestUrl === 'string' ? new URL(requestUrl) : new URL(requestUrl.url)
      const fullUrl = url.origin + url.pathname
      return authMap.get(fullUrl)
    } catch (_e) {
      return null
    }
  }
}

// Smart fetch function that applies auth only to specific URLs
// I have decided to implement basic auth with a custom fetch function instead of comunicas basic auth
// (https://comunica.dev/docs/query/advanced/basic_auth/) because a custom fetch function would also allow
// to implement oidc.
// TODO: at some point implement https://www.npmjs.com/package/digest-fetch as described in:
// https://github.com/comunica/comunica/issues/1600#issuecomment-3253823823
const createSmartFetch = (getAuthForUrl) => {
  return async (input, init = {}) => {
    const authConfig = getAuthForUrl(input)

    if (authConfig) {
      const headers = new Headers(init.headers)
      const credentials = btoa(`${authConfig.username}:${authConfig.password}`)
      headers.set('Authorization', `Basic ${credentials}`)

      return fetch(input, {
        ...init,
        headers
      })
    }

    // No auth needed for this URL
    return fetch(input, init)
  }
}

// the endpoint can be a URL as string or an object:
// {type: "sparql", value: "url", auth: {}} type and auth are optional
const normalizeSource = (endpoint) => {
    if (typeof endpoint === 'string' || endpoint instanceof String) {
      return [{ type: 'sparql', value: endpoint }]
    } else {
      // ensure the type is always set.
      return [{ type: 'sparql', ...endpoint }]
    }
}

class SparqlStore {
  constructor () {
    this.type = 'query_only'
    this.capability = {
      query: true,
      update: false,
      quit: false
    }
    this.sources = []
    this.destination = []
    this.getAuthForUrl = null
  }

  async initialize () {

  }

  query_bindings (queryString) {
    console.log(`Send bindings query (${queryString}) via comunica to ${this.sources}`);
    const context = {
      sources: this.sources
    }

    // Add fetch function if available
    if (this.fetchFunction) {
      context.fetch = this.fetchFunction
    }

    return this.queryEngine.queryBindings(queryString, context)
  }

  query_quads (queryString) {
    console.log(`Send quads query (${queryString}) via comunica to ${this.sources}`);
    const context = {
      sources: this.sources
    }

    if (this.fetchFunction) {
      context.fetch = this.fetchFunction
    }

    return this.queryEngine.queryQuads(queryString, context)
  }

  query (queryString) {
    console.log(`Send any query (${queryString}) via comunica to ${this.sources}`);
    const context = {
      sources: this.sources
    }

    if (this.fetchFunction) {
      context.fetch = this.fetchFunction
    }

    return this.queryEngine.query(queryString, context)
  }

  update (updateString) {
    console.log(`Send update query (${updateString}) via comunica to ${this.sources}`);
    const context = {
      sources: this.destination
    }

    if (this.fetchFunction) {
      context.fetch = this.fetchFunction
    }

    return this.queryEngine.queryVoid(updateString, context)
  }

  get queryUrl() {
    return this.sources[0].value
  }

  get updateUrl () {
    return this.destination[0].value
  }

  get authForUrl () {
    return this.getAuthForUrl
  }
}

class SparqlEndpoint extends SparqlStore {
  constructor (queryEndpoint, updateEndpoint) {
    super()
    this.queryEndpoint = queryEndpoint
    this.updateEndpoint = updateEndpoint

    this.type = 'query_only'
    this.capability = {
      query: true,
      update: false,
      quit: false
    }
    if (updateEndpoint) {
      this.type = 'query_update'
      this.capability.update = true
    }
  }

  async initialize () {
    this.fetchFunction = null
    this.queryEngine = new QueryEngine()

    const sources = normalizeSource(this.queryEndpoint)
    const destination = this.updateEndpoint ? normalizeSource(this.updateEndpoint) : []

    // Create smart fetch function if any source has auth
    const remotes = [...sources, ...destination]

    if(remotes.some(source => source.auth)) {
      this.getAuthForUrl = createUrlMatcher(remotes)
      this.fetchFunction = createSmartFetch(this.getAuthForUrl)
    }

    this.sources = sources.map(remote => {
      delete remote.auth
      return remote
    })

    this.destination = destination.map(remote => {
      delete remote.auth
      return remote
    })
  }
}


export { SparqlEndpoint, SparqlStore }
