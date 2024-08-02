import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Generator } from 'sparqljs'
import { Readable } from 'readable-stream';
import TripleToQuad from 'rdf-transform-triple-to-quad'
import * as sparql from 'rdf-sparql-builder'
import rdf from '@rdfjs/data-model'
import { EndpointFactory } from '@/api/endpoint.js'
import config from '@/config'
import { useSelectionStore } from '../stores/selection'
import { injectDefaultGraph } from '../helpers/queries'


export const useRdfStore = defineStore('rdf', () => {
  const ready = ref(false)
  const sparqlEndpoint = ref(null)

  async function sendQuery (payload) {
    /**
    Query for quads (construct query)
     payload can be:
     a string: which is the query
     an object with the properties
     - query: which is the query
     - defaultGraph: to query a specific graph or a set of graphs
     graph can be:
     - specified as a list of graphs
     - can be undefined to use the current system selected graph
     */
    let defaultGraph
    let query = ''
    console.log(`send query: ${payload}`)
    if (typeof payload === 'string') {
      query = payload
      defaultGraph = [useSelectionStore().graph_iri]
    } else if (typeof payload === 'object') {
      query = payload.query
      if (payload.defaultGraph === 'quads') {
        defaultGraph = undefined
      } else if (payload.defaultGraph !== undefined) {
        defaultGraph = payload.defaultGraph
      } else {
        defaultGraph = [useSelectionStore().graph_iri]
      }
    } else {
      console.error('can\'t process query')
      console.error(payload)
    }
    // TODO inject defaultGraph
    if (defaultGraph !== undefined) {
      console.log(`inject graph: ${defaultGraph}`);
      query = injectDefaultGraph(query, defaultGraph)
    }
    const generator = new Generator()
    let queryString
    if (typeof query !== 'string') {
      queryString = generator.stringify(query)
    } else {
      queryString = query
    }
    return sparqlEndpoint.value.query(queryString)
  }

  async function getResource (resourceUri, defaultGraph) {
    if (defaultGraph === undefined) {
      defaultGraph = [useSelectionStore().graph_iri]
    }
    let datasetClause = ""
    for (const graph of defaultGraph) {
      datasetClause += `from <${graph}>`
    }
    const queryString = `construct {<${resourceUri}> ?p ?o} ${datasetClause} where {<${resourceUri}> ?p ?o}`

    const tripleStream = await sparqlEndpoint.value.query_quads(queryString)
    const graph = rdf.namedNode(defaultGraph[0])
    return Readable.from(tripleStream).pipe(new TripleToQuad(graph))
  }

  function push () {
    if (sparqlEndpoint.value.push !== undefined) {
      sparqlEndpoint.value.push()
        .then(function (response) {
          console.log(response)
        })
    }
  }

  function pull () {
    if (sparqlEndpoint.value.pull !== undefined) {
      sparqlEndpoint.value.pull()
        .then(function (response) {
          console.log(response)
        })
    }
  }

  async function deleteInsertData (payload) {
    let deleteArray = payload.deleteArray
    let insertArray = payload.insertArray

    const updates = []

    if (payload.graphIri !== undefined) {
      // If a graphIri is given, overwrite the graph context for each quad.
      // graphIri needs to be a namedNode
      const graph = rdf.namedNode(payload.graphIri)

      if (deleteArray && deleteArray.length > 0) {
        deleteArray = await Readable.from(deleteArray).pipe(new TripleToQuad(graph)).toArray()
      }
      if (insertArray && insertArray.length > 0) {
        insertArray = await Readable.from(insertArray).pipe(new TripleToQuad(graph)).toArray()
      }
    }

    // Delete has to come first, to not later remove stuff, we've just added
    if (deleteArray && deleteArray.length > 0) {
      updates.push(sparql.deleteData(deleteArray).toString())
    }
    if (insertArray && insertArray.length > 0) {
      updates.push(sparql.insertData(insertArray).toString())
    }

    const updateString = updates.join(";")

    return sparqlEndpoint.value.update(updateString)
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function updateEndpointConfiguration (configuration) {
    console.log('Loading …')
    // await sleep(2000)
    console.log('Change SPARQL Endpoint configuration.')
    console.log(configuration)
    const stores = await EndpointFactory.create(configuration)
    sparqlEndpoint.value = stores[0]
    ready.value = true
  }

  console.log("configuration is")
  console.log(config)

  updateEndpointConfiguration(config)

  return { ready, sparqlEndpoint, sendQuery, getResource, push, pull, deleteInsertData, updateEndpointConfiguration }
})
