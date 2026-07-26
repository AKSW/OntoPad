'use strict'

import { Parser } from 'sparqljs'
import rdf from '@rdfjs/data-model'

function getResourceQuery (resourceIri) {
  return `
  CONSTRUCT {
    <${resourceIri}> ?p ?o .
  } WHERE {
    <${resourceIri}> ?p ?o .
  }`
}

function injectDefaultGraph(query, defaultGraph) {
  console.log(query)
  let altQuery = "select distinct ?instance from <http://default.com/> { ?instance a <http://example.org/Resource> } order by ?instance"
  if (typeof query === 'string') {
    const parser = new Parser()
    query = parser.parse(query)
    const parsedAltQuery = parser.parse(altQuery)
    console.log(parsedAltQuery)
  }
  console.log(query)
  if (query.type === "query") {
    query.from = {
      "default": [rdf.namedNode(defaultGraph)],
      "named": []
    }
  } else if (query.type === "update") {
    query.with = rdf.namedNode(defaultGraph)
  }
  return query
}

export { getResourceQuery, injectDefaultGraph }
