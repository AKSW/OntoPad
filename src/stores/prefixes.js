import { defineStore } from 'pinia'
import rdf from '@rdfjs/data-model'

export const usePrefixesStore = defineStore('prefixes', {
  state: () => ({
    prefixes: {
       'ex': rdf.namedNode('http://example.org/'),
       'exc': rdf.namedNode('http://example.org/classes#'),
       'exp': rdf.namedNode('http://example.org/properties#'),
       'rdf': rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#'),
       'rdfs': rdf.namedNode('http://www.w3.org/2000/01/rdf-schema#'),
       'xsd': rdf.namedNode('http://www.w3.org/2001/XMLSchema#'),
       'foaf': rdf.namedNode('http://xmlns.com/foaf/0.1/'),
       'sh': rdf.namedNode('http://www.w3.org/ns/shacl#'),
    },
  }),
  getters: {
    namespace_prefix_map: (state) => {
      const ret = {};
      Object.keys(state.prefixes).forEach(key => {
        ret[state.prefixes[key].value] = key;
      });
      return ret;
    },
    prefixes_flat: (state) => {
      const ret = {};
      Object.keys(state.prefixes).forEach(key => {
        ret[key] = state.prefixes[key].value;
      });
      return ret;
    }
  },
  actions: {
    setPrefix (prefix, namespaceIri) {
      this.prefixes[prefix] = rdf.namedNode(namespaceIri)
    },
    resolvePrefix (prefix) {
      return this.prefixes[prefix]
    },
    getPrefix (namespaceIri) {
      return this.namespace_prefix_map[namespaceIri]
    },
    shortenIri (iriIn) {
      const iri = new URL(iriIn)
      let identifier = iri.toString()
      let rest = ''
      if (iri.hash) {
        const hashPos = identifier.lastIndexOf('#')
        rest = identifier.substr(0, hashPos + 1)
        identifier = iri.hash.substr(1)
      } else if (iri.pathname) {
        const slashPos = identifier.lastIndexOf('/')
        rest = identifier.substr(0, slashPos + 1)
        identifier = identifier.substr(slashPos + 1)
      }
      if (this.namespace_prefix_map[rest] && identifier.indexOf('#') < 0 && identifier.indexOf(':') < 0 && identifier.indexOf('/') < 0) {
        return `${this.namespace_prefix_map[rest]}:${identifier}`
      }
      return iri.toString()
    },
  },
})
