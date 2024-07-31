import axios from 'axios'
import { QueryEngine } from '@comunica/query-sparql'
import dedent from 'dedent-js'

class SparqlEndpoint {
  constructor (queryEndpoint, updateEndpoint) {
    this.queryEngine = new QueryEngine()
    this.sources = [{ type: 'sparql', value: queryEndpoint }]
    // this.sources = [{
    //   type: 'serialized',
    //   value: dedent(`
    //   @prefix foaf: <http://xmlns.com/foaf/0.1/> .
    //   @prefix ex: <http://example.org/> .
    //   @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    //   @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    //   graph ex: {
    //     <http://example.org/some> a rdf:Class .
    //     <http://example.org/bla> a <http://example.org/some> ;
    //       rdfs:label "hi" .
    //     ex:Norman a foaf:Person ;
    //       foaf:name "Norman" .
    //     ex:Natanael a foaf:Person ;
    //       foaf:name "Natanael" .
    //     ex:Sascha a foaf:Person ;
    //       foaf:name "Sascha" ;
    //       foaf:knows ex:Norman, ex:Natanael .
    //   }
    //   `),
    //   mediaType: 'application/trig',
    //   baseIRI: 'http://example.org/',
    // },]
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
