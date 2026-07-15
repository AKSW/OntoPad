'use strict'

import { Parser, Generator } from 'sparqljs'
import rdf from '@rdfjs/data-model'

// This method takes an IRI of a taget class and returns
// a query string to construct a NodeShape matching the
// target class.
function getShapeQuery4Target (targetClassIri) {
  return `
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  CONSTRUCT {
    ?node_s ?node_p ?node_o ;
      sh:targetClass <${targetClassIri}> ;
      a sh:NodeShape .
    ?prop_s ?prop_p ?prop_o .
    ?prop_s sh:in ?list .
    ?elt rdf:rest ?rest .
    ?elt rdf:first ?val .
  } WHERE {
      {
        {
          ?node_s sh:targetClass <${targetClassIri}> .
          ?node_s ?node_p ?node_o .
          ?prop_s ?prop_p ?prop_o .
          FILTER(?prop_p != sh:in)
          FILTER(?node_o = ?prop_s)
        }
        UNION
        {
          ?node_s sh:targetClass <${targetClassIri}> .
          ?node_s ?node_p ?node_o .
          ?prop_s ?prop_p ?prop_o .
          ?prop_s sh:in ?list .
          ?list rdf:rest* ?elt .
          ?elt rdf:rest ?rest .
          ?elt rdf:first ?val .
          FILTER(?node_o = ?prop_s)
        }
      }
  }`
}

// This method takes an IRI of an instance and returns
// a query string to construct a NodeShape matching the
// class of that instance.
function getShapeQuery4Instance (instanceIri) {
  return `
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  CONSTRUCT {
    ?node_s ?node_p ?node_o ;
      sh:targetClass ?class ;
      a sh:NodeShape .
    ?prop_s ?prop_p ?prop_o .
    #?node_s ?p ?o .
    ?prop_s sh:in ?list .
    ?elt rdf:rest ?rest .
    ?elt rdf:first ?val .
  } WHERE {
        <${instanceIri}> rdf:type ?class .
        {
          ?node_s sh:targetClass ?class .
          ?node_s ?node_p ?node_o .
          ?prop_s ?prop_p ?prop_o .
          FILTER(?prop_p != sh:in)
          FILTER(?node_o = ?prop_s)
        }
        UNION
        {
          ?node_s rdf:type ?class .
          ?node_s ?node_p ?node_o .
          ?prop_s ?prop_p ?prop_o .
          ?prop_s sh:in ?list .
          ?list rdf:rest* ?elt .
          ?elt rdf:rest ?rest .
          ?elt rdf:first ?val .
          FILTER(?node_o = ?prop_s)
        }
  }`
}

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

export { getShapeQuery4Target, getShapeQuery4Instance, getResourceQuery, injectDefaultGraph }
