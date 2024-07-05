'use strict'


// This method takes an IRI of a taget class and returns
// a query string to construct a NodeShape matching the
// target class.
function getShapeQuery4Target (targetClassIri) {
  return `
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  CONSTRUCT {
    ?node_s ?node_p ?node_o .
    ?prop_s ?prop_p ?prop_o . 
    ?s sh:in ?list .
    ?elt rdf:rest ?rest .
    ?elt rdf:first ?val .
  } WHERE { 
    GRAPH ?g { 
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
    ?node_s ?node_p ?node_o .
    ?prop_s ?prop_p ?prop_o . 
    ?node_s ?p ?o .
    ?s sh:in ?list .
    ?elt rdf:rest ?rest .
    ?elt rdf:first ?val .
  } WHERE { 
    GRAPH ?g { 
      <${instanceIri}> rdf:type ?class .
        ?node_s ?p ?o .
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
    }
  }`
}

export { getShapeQuery4Target, getShapeQuery4Instance }
