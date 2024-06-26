<template>

</template>

<script>
import { mapState } from 'pinia'
import { useRdfStore } from '../stores/rdf'
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
