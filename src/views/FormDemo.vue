<template>
  <div>
    <dl>
      <dt>IRI</dt>
      <dd>{{ resource_iri }}</dd>
      <dt>Type</dt>
      <dd><Term v-model:term="res_type" @click="selectResource"/></dd>
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
import Term from '../components/Term.vue'
import { Readable } from 'readable-stream'
import { mapState } from 'pinia'
import { useRdfStore } from '../stores/rdf'
import { Store, StreamParser } from 'n3'

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
    Term
  },
  mounted () {
    this.getResource()
  },
  watch: {
    resource_iri (value) {
      this.getResource()
    }
  },
  data () {
    return {
      dataModel: {},
      subject: rdf.namedNode(''),
    }
  },
  computed: {
    ...mapState(useRdfStore, ['graph_iri', 'resource_iri']),
    res_type () {
      if (this.dataModel.getQuads !== undefined) {
        const res_type = this.dataModel.getQuads(rdf.namedNode(this.resource_iri), rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), null)[0]
        if (res_type) {
          return res_type.object
        }
      }
      return ''
    }
  },
  methods: {
    getResource () {
      this.subject = rdf.namedNode(this.resource_iri)
      console.log('get resource: ' + this.resource_iri)
      this.store.getResource(this.resource_iri)
        .then(result => {
          const streamParser = new StreamParser()
          Readable.from([result.data]).pipe(streamParser)

          const n3_store = new Store()
          n3_store.import(streamParser).on('end', () => {
            this.dataModel = n3_store
          })
        })
    },
    selectResource (resourceIri) {
      this.store.changeResourceIri(resourceIri)
    } 
  }
}

</script>
