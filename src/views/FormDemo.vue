<template>
  <div>
    <dl>
      <dt>IRI</dt>
      <dd>{{ resource_iri }}</dd>
      <dt>Label</dt>
      <dd><Term v-model:term="label" @click="selectResource"/></dd>
    </dl>
  </div>

  <!--
      SHACL shapes can be defined on the attribute 'data-shapes'
      or can be loaded by setting attribute 'data-shapes-url'
    -->
    <shacl-form data-shapes="
      @prefix sh: <http://www.w3.org/ns/shacl#> .
      @prefix rdfs:    <http://www.w3.org/2000/01/rdf-schema#> .
      @prefix ex: <http://example.org#> .

      ex:ExampleShape
        a sh:NodeShape, rdfs:Class ;
        sh:property [
          sh:name 'my value' ;
          sh:path ex:exampleValue ;
          sh:maxCount 3 ;
        ] .
    "></shacl-form>
</template>

<script>
import { mapState } from 'pinia'
import { useRdfStore } from '../stores/rdf'

import { registerPlugin } from '@ulb-darmstadt/shacl-form'
// import { LeafletPlugin } from '@ulb-darmstadt/shacl-form/plugins/leaflet.js'
// import * as jsonld from 'jsonld'
import rdf from '@rdfjs/data-model'

export default {
  name: 'FormDemo',
  setup () {
    const store = useRdfStore();
    return { store }
  },
  components: {
    
  },
  mounted () {
    
  },
  
  data () {
    return {
      subject: rdf.namedNode(''),
    }
  },
  computed: {
    ...mapState(useRdfStore, ['graph_iri', 'resource_iri']),
  },
  methods: {
  }
}

</script>
