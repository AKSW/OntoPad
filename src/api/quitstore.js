import axios from 'axios'
import { SparqlEndpoint } from '@/api/sparql.js'

class QuitStore extends SparqlEndpoint {
  constructor (storeUrl) {
    super(storeUrl + '/sparql', storeUrl + '/sparql')
    this.type = 'quit'
    this.HTTPGit = axios.create({ baseURL: storeUrl })
    this.capability.quit = true
  }

  push () {
    return this.HTTPGit.post('/push', new URLSearchParams({
      dst: 'master',
      refspec: 'master:master',
      remote: 'origin',
      src: 'master'
    }),
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Accept: 'text/plain'
      }
    })
  }

  pull () {
    return this.HTTPGit.post('/pull', new URLSearchParams({
      dst: 'master',
      refspec: 'master:master',
      remote: 'origin',
      src: 'master'
    }),
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Accept: 'text/plain'
      }
    })
  }

  get quitUrl () {
    return this.HTTPGit.defaults.baseURL
  }
}

export { QuitStore }
