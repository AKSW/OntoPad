'use strict'


// The default NodeShape used in FormDemo.vue
const defaultShape = `@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:    <http://www.w3.org/2000/01/rdf-schema#> .
@prefix ex: <http://example.org#> .

ex:DefaultShape
  a sh:NodeShape, rdf:Class ;
  sh:property [
    sh:name 'class' ;
    sh:path rdf:type ;
    sh:minCount 1 ;
    sh:maxCount 1 ;
  ] ;
  sh:property [
    sh:name 'label' ;
    sh:path rdfs:label ;
    sh:maxCount 1 ;
  ] .`

// The default resource used in FormDemo.vue
const defaultData = `@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

<http://example.org/Example> rdf:type rdf:Class ;
<http://www.w3.org/2000/01/rdf-schema#label> 'Example resource'. `

export { defaultShape, defaultData }