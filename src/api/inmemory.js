import { QueryEngine } from '@comunica/query-sparql'
import { SparqlEndpoint } from '@/api/sparql.js'
import { stringToStore } from '../helpers/rdf-parse'
import { SparqlStore } from '@/api/sparql.js'

class InMemory extends SparqlStore {
  constructor (data) {
    super()
    this.data = data

    this.type = 'query_update'
    this.capability = {
      query: true,
      update: true,
      quit: false
    }
  }

  async initialize () {
    this.queryEngine = new QueryEngine()
    const trig_data = this.data

    return new Promise(resolve => {
      stringToStore(trig_data).then((result) => {
        this.sources = [result]
        this.destination = [result]
        console.log("Set source and destination")
        resolve()
      })
    })
  }
}

export { InMemory }
