import { describe, it, expect, beforeEach } from 'vitest'

import { QueryEngine } from '@comunica/query-sparql'
import rdf from '@rdfjs/data-model'
import { Store } from 'n3'
import { promisifyEventEmitter } from 'event-emitter-promisify';
import TripleToQuad from 'rdf-transform-triple-to-quad'
import { Readable } from 'readable-stream';


describe('RDF Store with comunica backend', () => {
  // beforeEach(() => {
  //   // creates a fresh pinia and makes it active
  //   // so it's automatically picked up by any useStore() call
  //   // without having to pass it to it: `useStore(pinia)`
  //   setActivePinia(createPinia())
  // })

  // it('init', () => {
  //   const store = useRdfStore()
  //   // expect(store.sparqlEndpoint.queryEngine).exists()
  // })

  it('gets a resource with a construct query and write the triples to a store', async () => {
    let resourceUri = "http://example.org/Norman"
    let graph = "http://example.org/"
    let datasetClause = `from <${graph}>`

    const queryString = `construct {<${resourceUri}> ?p ?o} ${datasetClause} where {<${resourceUri}> ?p ?o}`

    let queryEndpoint = "http://localhost:5000/sparql"
    let queryEngine = new QueryEngine()
    let sources = [{ type: 'sparql', value: queryEndpoint }]
    console.log(`Send quads query (${queryString}) via comunica to ${sources}`);
    const tripleStream = await queryEngine.queryQuads(queryString, {
      sources: sources
    })

    console.log(tripleStream)
    let store = new Store()
    expect(store.size).toBe(0)
    await promisifyEventEmitter(store.import(tripleStream))
    expect(store.size).toBe(1)
    console.log(store)
  })

  it('gets a resource with a construct query and convert triples to quads', async () => {
    let resourceUri = "http://example.org/Resource"
    let graph = "http://example.org/"
    let datasetClause = `from <${graph}>`

    const queryString = `construct {<${resourceUri}> ?p ?o} ${datasetClause} where {<${resourceUri}> ?p ?o}`

    let queryEndpoint = "http://localhost:5000/sparql"
    let queryEngine = new QueryEngine()
    let sources = [{ type: 'sparql', value: queryEndpoint }]
    console.log(`Send quads query (${queryString}) via comunica to ${sources}`);
    const tripleStream = Readable.from(await queryEngine.queryQuads(queryString, {
      sources: sources
    }))

    console.log(tripleStream)
    console.log(Object.prototype.toString.call(tripleStream))
    const graph_node = rdf.namedNode(graph)
    tripleStream.pipe(new TripleToQuad(graph_node))
  })

  it('gets some bindings', async () => {
    let graph = "http://example.org/"
    let datasetClause = `from <${graph}>`

    const queryString = `select ?a ?b ${datasetClause} where { { ?a ?p ?o } union {?b ?p ?o } }`

    let queryEndpoint = "http://localhost:5000/sparql"
    let queryEngine = new QueryEngine()
    let sources = [{ type: 'sparql', value: queryEndpoint }]

    const bindingsStream = await queryEngine.queryBindings(queryString, {
      sources: sources
    })

    console.log(bindingsStream)
    console.log(Object.prototype.toString.call(bindingsStream))
    console.log(await bindingsStream.toArray())

  })

})
