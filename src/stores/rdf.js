import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { EndpointFactory } from '@/api/endpoint.js'
import { Generator } from 'sparqljs'
import * as sparql from 'rdf-sparql-builder'
import { useSelectionStore } from '../stores/selection'
import config from '@/config'
import rdf from '@rdfjs/data-model'


export const useRdfStore = defineStore('rdf', {
  state: () => ({
      sparqlEndpoint: EndpointFactory.create(config.endpoint)
  }),
  actions: {
    sendQuery (payload) {
      let query = ''
      let data = false
      if (typeof payload === 'object') {
        query = payload.query
        data = payload.data
      } else {
        query = payload
      }
      console.log('send query with data=' + data + ' query: ' + query)
      let defaultGraph
      let queryString = ''
      if (typeof query === 'string') {
        queryString = query
        defaultGraph = [useSelectionStore().graph_iri]
      } else if (query instanceof Object) {
        queryString = query.query
        if (query.queryQuads !== undefined) {
          defaultGraph = undefined
        } else if (query.defaultGraph !== undefined) {
          defaultGraph = query.defaultGraph
        } else {
          defaultGraph = [useSelectionStore().graph_iri]
        }
      } else {
        console.error('cant process query')
        console.error(query)
      }
      return this.sparqlEndpoint.query(queryString, defaultGraph, data)
    },
    getResource_comunica (resourceUri, defaultGraph) {
      if (defaultGraph === undefined) {
        defaultGraph = [useSelectionStore().graph_iri]
      }
      let datasetClause = ""
      for (const graph of defaultGraph) {
        datasetClause += `from <${defaultGraph}>`
      }
      const queryString = `construct {<${resourceUri}> ?p ?o} ${datasetClause} where {<${resourceUri}> ?p ?o}`
      return this.sparqlEndpoint.query_comunica_quads(queryString, defaultGraph)
    },
    sendUpdate (updateString) {
      this.sparqlEndpoint.update(updateString)
        .then(function (response) {
          console.log(response)
        })
    },
    push () {
      if (this.sparqlEndpoint.push !== undefined) {
        this.sparqlEndpoint.push()
          .then(function (response) {
            console.log(response)
          })
      }
    },
    pull () {
      if (this.sparqlEndpoint.pull !== undefined) {
        this.sparqlEndpoint.pull()
          .then(function (response) {
            console.log(response)
          })
      }
    },
    deleteInsertData_comunica (payload) {
      let deleteArray = payload.deleteArray
      let insertArray = payload.insertArray

      const updates = []

      if (payload.graphIri !== undefined) {
        // graphIri needs to be a namedNode
        const graphIri = rdf.namedNode(payload.graphIri)

        if (deleteArray) {
          deleteArray = [sparql.graph(graphIri, deleteArray)]
        }
        if (insertArray) {
          insertArray = [sparql.graph(graphIri, insertArray)]
        }
      }

      // Delete has to come first, to not later remove stuff, we've just added
      if (deleteArray) {
        updates.push(sparql.deleteData(deleteArray).toString())
      }
      if (insertArray) {
        updates.push(sparql.insertData(insertArray).toString())
      }

      const updateString = updates.join(";")

      return this.sparqlEndpoint.update_comunica(updateString)
    }
  },
})
