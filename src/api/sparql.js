import axios from 'axios'
import querystring from 'querystring'

export const SparqlEndpoint = {
  create (queryEndpoint, updateEndpoint) {
    let HTTPQuery = axios.create({ baseURL: queryEndpoint })
    let HTTPUpdate = axios.create({ baseURL: updateEndpoint })

    return {
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
        return HTTPQuery.post('/sparql', queryString, {
          params: params,
          headers: {
            'Content-Type': 'application/sparql-query',
            Accept: acceptType
          }
        })
      },
      update (updateString) {
        return HTTPUpdate.post('/sparql', updateString, {
          headers: {
            'Content-Type': 'application/sparql-update',
            Accept: 'application/sparql-results+json'
          }
        })
      },
      push () {
        return HTTPUpdate.post('/push', querystring.stringify({
          dst: 'master',
          refspec: 'master:master',
          remote: 'origin',
          src: 'master'
        }),
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Accept: 'application/sparql-results+json'
          }
        })
      },
      changeQueryUrl (queryUrl) {
        HTTPQuery = axios.create({ baseURL: queryUrl })
      },
      changeUpdateUrl (updateUrl) {
        HTTPUpdate = axios.create({ baseURL: updateUrl })
      },
      getQueryUrl () {
        HTTPQuery.baseURL
      },
      getUpdateUrl () {
        HTTPUpdate.baseURL
      }
    }
  }
}
