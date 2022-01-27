import Vue from 'vue'
import Vuex from 'vuex'
import { EndpointFactory } from '@/api/endpoint.js'
import { Generator } from 'sparqljs'
import { quadToStringQuad } from 'rdf-string'
import config from '@/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    graph_iri: config.graph_iri,
    resource_iri: config.resource_iri,
    sparqlEndpoint: EndpointFactory.create(config.endpoint)
  },
  actions: {
    sendQuery ({ state }, payload) {
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
        defaultGraph = [state.graph_iri]
      } else if (query instanceof Object) {
        queryString = query.query
        if (query.queryQuads !== undefined) {
          defaultGraph = undefined
        } else if (query.defaultGraph !== undefined) {
          defaultGraph = query.defaultGraph
        } else {
          defaultGraph = [state.graph_iri]
        }
      } else {
        console.error('can process query')
        console.error(query)
      }
      return state.sparqlEndpoint.query(queryString, defaultGraph, data)
    },
    getResource ({ state }, resourceUri, defaultGraph) {
      if (defaultGraph === undefined) {
        defaultGraph = [state.graph_iri]
      }
      const queryString = 'construct where {<' + resourceUri + '> ?p ?o}'
      return state.sparqlEndpoint.query(queryString, defaultGraph, true)
    }
  },
  mutations: {
    sendUpdate (state, updateString) {
      state.sparqlEndpoint.update(updateString)
        .then(function (response) {
          console.log(response)
        })
    },
    push (state) {
      if (state.sparqlEndpoint.push !== undefined) {
        state.sparqlEndpoint.push()
          .then(function (response) {
            console.log(response)
          })
      }
    },
    pull (state) {
      if (state.sparqlEndpoint.pull !== undefined) {
        state.sparqlEndpoint.pull()
          .then(function (response) {
            console.log(response)
          })
      }
    },
    insertDeleteData (state, payload) {
      const insertArray = payload.insertArray
      const deleteArray = payload.deleteArray
      const graphIri = payload.graphIri

      const updateStructure = {
        type: 'update',
        updates: []
      }

      // Delete has to come first, to not later remove stuff, we've just added
      if (deleteArray) {
        const deleteBGP = {
          triples: deleteArray.map(quadToStringQuad)
        }
        if (graphIri === undefined) {
          deleteBGP.type = 'bgp'
        } else {
          deleteBGP.type = 'graph'
          deleteBGP.name = graphIri
        }
        updateStructure.updates.push(
          {
            updateType: 'delete',
            delete: [deleteBGP]
          }
        )
      }

      if (insertArray) {
        const insertBGP = {
          triples: insertArray.map(quadToStringQuad)
        }
        if (graphIri === undefined) {
          insertBGP.type = 'bgp'
        } else {
          insertBGP.type = 'graph'
          insertBGP.name = graphIri
        }
        updateStructure.updates.push(
          {
            updateType: 'insert',
            insert: [insertBGP]
          }
        )
      }

      var generator = new Generator()
      var updateString = generator.stringify(updateStructure)
      console.log('updatestring: ' + updateString)
      return state.sparqlEndpoint.update(updateString)
    },
    changeGraphIri (state, graphIri) {
      console.log('Change graph Iri to ' + graphIri)
      state.graph_iri = graphIri
    },
    changeResourceIri (state, resourceIri) {
      console.log('Change resource Iri to ' + resourceIri)
      state.resource_iri = resourceIri
    },
    updateEndpointConfiguration (state, configuration) {
      console.log('Change SPARQL Endpoint configuration.')
      console.log(configuration)
      state.sparqlEndpoint = EndpointFactory.create(configuration)
    }
  }
})
