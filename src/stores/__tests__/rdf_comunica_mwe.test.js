import { describe, it, expect } from 'vitest'

import { QueryEngine } from '@comunica/query-sparql'
import rdf from '@rdfjs/data-model'
import { Store } from 'n3'
import { promisifyEventEmitter } from 'event-emitter-promisify';
import TripleToQuad from 'rdf-transform-triple-to-quad'
import { Readable } from 'readable-stream';

describe('MWE RDF Store with comunica backend', () => {

  it('gets a resource with a construct query from a store and write the triples to a store', async () => {
    let resourceUri = "http://ex.org/Mickey"
    const queryString = `construct {<${resourceUri}> ?p ?o} where {<${resourceUri}> ?p ?o}`

    let source_store = new Store()
    expect(source_store.size).toBe(0)
    source_store.add(
      rdf.quad(
        rdf.namedNode('http://ex.org/Mickey'),
        rdf.namedNode('http://ex.org/type'),
        rdf.namedNode('http://ex.org/Mouse')
      )
    )
    expect(source_store.size).toBe(1)

    let queryEngine = new QueryEngine()

    const tripleStream = await queryEngine.queryQuads(queryString, {
      sources: [source_store]
    })

    console.log(tripleStream)
    let store = new Store()
    expect(store.size).toBe(0)
    await promisifyEventEmitter(store.import(tripleStream))
    expect(store.size).toBe(1)

  })

  it('gets a resource with a construct query from a store and convert triples to quads', async () => {
    let resourceUri = "http://ex.org/Mickey"
    let graph = "http://example.org/"
    const queryString = `construct {<${resourceUri}> ?p ?o} where {<${resourceUri}> ?p ?o}`

    let source_store = new Store()
    source_store.add(
      rdf.quad(
        rdf.namedNode('http://ex.org/Mickey'),
        rdf.namedNode('http://ex.org/type'),
        rdf.namedNode('http://ex.org/Mouse')
      )
    )

    let queryEngine = new QueryEngine()

    const tripleStream = Readable.from(await queryEngine.queryQuads(queryString, {
      sources: [source_store]
    }))

    console.log(tripleStream)
    console.log(Object.prototype.toString.call(tripleStream))

    const graph_node = rdf.namedNode(graph)
    tripleStream.pipe(new TripleToQuad(graph_node))
  })

  it('gets some bindings with a union and unbound variables', async () => {
    let resourceUri = "http://ex.org/Mickey"
    let graph = "http://example.org/"
    const queryString = `select ?a ?b where { { ?a ?p ?o } union {?b ?p ?o } }`

    let source_store = new Store()
    source_store.add(
      rdf.quad(
        rdf.namedNode('http://ex.org/Mickey'),
        rdf.namedNode('http://ex.org/type'),
        rdf.namedNode('http://ex.org/Mouse')
      )
    )

    let queryEngine = new QueryEngine()

    const bindingsStream = await queryEngine.queryBindings(queryString, {
      sources: [source_store]
    })

    console.log(bindingsStream)
    console.log(Object.prototype.toString.call(bindingsStream))
    console.log(await bindingsStream.toArray())

  })

  it('gets some bindings', async () => {
    let resourceUri = "http://ex.org/Mickey"
    let graph = "http://example.org/"
    const queryString = `select ?a where { ?a ?p ?o }`

    let source_store = new Store()
    source_store.add(
      rdf.quad(
        rdf.namedNode('http://ex.org/Mickey'),
        rdf.namedNode('http://ex.org/type'),
        rdf.namedNode('http://ex.org/Mouse')
      )
    )

    let queryEngine = new QueryEngine()

    const bindingsStream = await queryEngine.queryBindings(queryString, {
      sources: [source_store]
    })

    console.log(bindingsStream)
    console.log(Object.prototype.toString.call(bindingsStream))
    console.log(bindingsStream.size)
    console.log(bindingsStream.count)
    console.log(bindingsStream.length)
    console.log(count(bindingsStream))

  })

  it('query that returns no data', async () => {
    let resourceUri = "http://ex.org/Mickey"
    let graph = "http://example.org/"
    const queryString = `select ?a where { ?a <urn:nothing> ?o }`

    let source_store = new Store()
    source_store.add(
      rdf.quad(
        rdf.namedNode('http://ex.org/Mickey'),
        rdf.namedNode('http://ex.org/type'),
        rdf.namedNode('http://ex.org/Mouse')
      )
    )

    let queryEngine = new QueryEngine()

    const bindingsStream = await queryEngine.queryBindings(queryString, {
      sources: [source_store]
    })

    console.log(bindingsStream)
    console.log(Object.prototype.toString.call(bindingsStream))
    console.log(bindingsStream.size)

  })

})
